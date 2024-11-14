export default (ctx) => {
  if (!ctx.app.head.link) ctx.app.head.link = [];

  const manifestLink = {
    rel: "manifest",
    href: "/manifest.json",
  };

  ctx.app.head.link = [...ctx.app.head.link, manifestLink];
};
