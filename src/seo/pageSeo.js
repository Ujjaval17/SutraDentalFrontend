import { DEFAULT_DESCRIPTION, SITE_NAME } from "./siteConfig";

/** Static route-level SEO defaults (dynamic pages override in components) */
export const PAGE_SEO = {
  home: {
    title: `Best Dental Clinic in Chandkheda, Ahmedabad | ${SITE_NAME}`,
    description:
      "Looking for a dental clinic near Chandkheda? Sutra Dental offers implants, root canal, braces, kids dentistry & cosmetic care by Dr. Khushbu Singh. Book online or call 8010556229.",
    path: "/",
  },
  about: {
    title: "About Dr. Khushbu Singh",
    description:
      "Meet Dr. Khushbu Singh, experienced dental surgeon at Sutra Dental, Chandkheda, Ahmedabad. Education, expertise, and patient-focused care.",
    path: "/about-me",
  },
  treatments: {
    title: "Dental Treatments",
    description:
      "Explore dental treatments at Sutra Dental — implants, root canal, teeth whitening, orthodontics, pediatric dentistry, and more in Ahmedabad.",
    path: "/all-treatments",
  },
  blogs: {
    title: "Dental Health Blogs",
    description:
      "Read expert dental health tips and guides from Sutra Dental, Chandkheda, Ahmedabad — oral care, treatments, and prevention.",
    path: "/blogs",
  },
  login: {
    title: "Admin Login",
    description: "Secure admin login for Sutra Dental staff.",
    path: "/login",
    noindex: true,
  },
  admin: {
    title: "Admin Panel",
    description: "Sutra Dental administration.",
    path: "/admin-panel",
    noindex: true,
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for could not be found.",
    path: "/404",
    noindex: true,
  },
};

export function getStaticSeo(key) {
  const config = PAGE_SEO[key] || PAGE_SEO.home;
  return {
    title: config.title,
    description: config.description || DEFAULT_DESCRIPTION,
    path: config.path,
    noindex: Boolean(config.noindex),
  };
}
