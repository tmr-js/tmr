/**
 * Renders the HTML page to be sent to the browser.
 */

type RenderProps = {
  lang?: string;
  charset?: string;
  title?: string;
  stylesheets?: string[];
  scripts?: string[]; // TODO, possibly support async, defer etc.
};

function render(props: RenderProps): string {
  const {
    lang = "en",
    charset = "utf-8",
    title,
    stylesheets = [],
    scripts = [],
  } = props;
  return `<!doctype html>
    <html lang="${lang}">
    <head>
      <meta charset=${charset}>
      <title>${title}</title>
      ${stylesheets.map((url) => `<link rel="stylesheet" href="${url}">`)}
    </head>
    <body>
      ${scripts.map((url) => `<script src="${url}"></script>`)}
    </body>
  </html>`;
}

export default render;
