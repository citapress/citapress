/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from 'react';

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <link
      key="bluu-regular"
      rel="preload"
      href="/fonts/bluunext-bold-webfont.woff2"
      as="font"
      crossOrigin="anonymous"
    />,
    <link
      key="bluu-bold"
      rel="preload"
      href="/fonts/bluunext-bolditalic-webfont.woff2"
      as="font"
      crossOrigin="anonymous"
    />
  ]);
}
