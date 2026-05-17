import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.url || item.name}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {isLast ? (
                <span itemProp="name" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.url} itemProp="item">
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
              {!isLast && (
                <span className="seo-breadcrumbs__sep" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
