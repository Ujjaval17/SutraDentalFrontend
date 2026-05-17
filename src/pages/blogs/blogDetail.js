import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./blogDetail.scss";
import { FaRegCalendarDays } from "react-icons/fa6";
import SEO from "../../components/seo/SEO";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import OptimizedImage from "../../components/seo/OptimizedImage";
import PageLoader from "../../components/seo/PageLoader";
import API from "../../config";
import { blogsPattern, getBlogDetailRoute, indexPattern } from "../../Routes";
import { articleSchema, breadcrumbSchema } from "../../seo/schemas";
import { buildCanonical, matchBlogBySlug, slugify, truncate } from "../../seo/utils";

const BlogDetail = () => {
  const { slug } = useParams();
  const locationState = useLocation()?.state;
  const [blog, setBlog] = useState(locationState || null);
  const [loading, setLoading] = useState(!locationState);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (locationState?._id) {
      setBlog(locationState);
      setLoading(false);
      return;
    }

    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${API}/blog-list`);
        const match = matchBlogBySlug(data, slug);
        if (!cancelled) {
          if (match) setBlog(match);
          else setNotFound(true);
        }
      } catch {
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [slug, locationState]);

  if (loading) return <PageLoader />;

  if (notFound || !blog) {
    return (
      <main className="blog-detail-container w-100">
        <SEO title="Blog not found" description="This blog post could not be found." noindex canonicalPath="/blogs" />
        <div className="m-5 text-center">
          <h1>Blog not found</h1>
          <p>This article may have been removed or the link is incorrect.</p>
          <Link to={blogsPattern}>View all blogs</Link>
        </div>
      </main>
    );
  }

  const canonicalPath = getBlogDetailRoute(slugify(blog.title));
  const description = truncate(blog.short_desc || blog.long_desc);
  const breadcrumbs = [
    { name: "Home", url: indexPattern },
    { name: "Blogs", url: blogsPattern },
    { name: blog.title, url: canonicalPath },
  ];

  return (
    <article className="blog-detail-container w-100">
      <SEO
        title={blog.title}
        description={description}
        canonicalPath={canonicalPath}
        image={blog.image_url}
        type="article"
        jsonLd={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: blog.title,
            description,
            image: blog.image_url,
            datePublished: blog.date,
            url: buildCanonical(canonicalPath),
          }),
        ].filter(Boolean)}
      />
      <Breadcrumbs items={breadcrumbs} />
      <div className="m-5">
        <header>
          <h1>{blog.title}</h1>
          <div className="d-flex m-auto justify-content-center align-items-center gap-2 mb-4">
            <FaRegCalendarDays aria-hidden />
            <time dateTime={blog.date}>{blog.date}</time>
          </div>
        </header>
        <div className="blog-detail-img-container m-auto">
          <OptimizedImage
            src={blog.image_url}
            alt={blog.title}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="blog-content mx-auto mt-5">
          <p className="text-start">{blog.long_desc}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
