import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://www.tycalk9.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/tycalheroimage-left.png`;

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  schema?: object | object[];
}

export default function PageSEO({ title, description, path, image, noindex, schema }: PageSEOProps) {
  const canonicalUrl = `${SITE_URL}${path}`.replace(/\/$/, '') || SITE_URL;
  const ogImage = image ? `${SITE_URL}${image}` : DEFAULT_OG_IMAGE;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
