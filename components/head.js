import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = `${process.env.PROJECT_NAME}`;

const Head = ({ title, page, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    {process.env.DEV_ENV == "NO" && (
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}`,
        }}
      />
    )}
    <title>{title || defaultDescription}</title>
    <meta
      name={defaultDescription}
      content={description || defaultDescription}
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1,maximum-scale=1"
    />
    <link rel="icon" sizes="192x192" href="/icon.ico" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"
    />
    <link rel="apple-touch-icon" href="/icon.ico" />
    <link rel="mask-icon" href="/icon.ico" />
    <link rel="icon" href="/icon.ico" />
    <meta property="og:title" content={title || defaultDescription} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <link
      rel="manifest"
      href={`/manifest.json${page ? `?page=${page}` : ""}`}
    />
    <meta name="theme-color" content={"black"}></meta>
  </NextHead>
);

Head.propTypes = { title: string, description: string, ogImage: string };

export default Head;
