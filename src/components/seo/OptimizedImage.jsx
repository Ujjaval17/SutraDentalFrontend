import React from "react";

/**
 * SEO-friendly image: lazy loading, alt, optional dimensions for CLS.
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  ...rest
}) => {
  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      {...rest}
    />
  );
};

export default OptimizedImage;
