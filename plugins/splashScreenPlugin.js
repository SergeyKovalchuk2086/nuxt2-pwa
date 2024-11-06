export default (ctx) => {
  console.log("ctx :", ctx);
  const metaData = [
    {
      name: "mobile-web-app-capable",
    },
    {
      name: "apple-touch-fullscreen",
    },
    {
      name: "apple-mobile-web-app-capable",
    },
  ];

  for (const data of metaData) {
    const meta = {
      name: data.name,
      content: "yes",
    };

    ctx.app.head.meta = [...ctx.app.head.meta, meta];
  }

  const splashSizes = [
    {
      filename: "apple-splash-2048-2732.png",
      media:
        "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-1668-2224.png",
      media:
        "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-1536-2048.png",
      media:
        "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      filename: "apple-splash-1284-2778.png",
      media:
        "(device-width: 1170px) and (device-height: 2532px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-1125-2436.png",
      media:
        "(device-width: 750px) and (device-height: 1334px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-1242-2208.png",
      media:
        "(device-width: 1080px) and (device-height: 1920px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-750-1334.png",
      media:
        "(device-width: 750px) and (device-height: 1334px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      filename: "apple-splash-640-1136.png",
      media:
        "(device-width: 640px) and (device-height: 1136px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-640-960.png",
      media:
        "(device-width: 640px) and (device-height: 960px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      filename: "apple-splash-750-1294.png",
      media:
        "(device-width: 750px) and (device-height: 1294px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-1536-2048.png",
      media:
        "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-1668-2224.png",
      media:
        "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-1536-2048.png",
      media:
        "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      filename: "apple-splash-1125-2436.png",
      media:
        "(device-width: 750px) and (device-height: 1334px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-1242-2208.png",
      media:
        "(device-width: 1080px) and (device-height: 1920px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-640-960.png",
      media:
        "(device-width: 640px) and (device-height: 960px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      filename: "apple-splash-640-1136.png",
      media:
        "(device-width: 640px) and (device-height: 1136px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-828-1792.png",
      media:
        "(device-width: 828px) and (device-height: 1792px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      filename: "apple-splash-750-1334.png",
      media:
        "(device-width: 750px) and (device-height: 1334px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      filename: "apple-splash-640-1136.png",
      media:
        "(device-width: 640px) and (device-height: 1136px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      filename: "apple-splash-1125-2436.png",
      media:
        "(device-width: 750px) and (device-height: 1334px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
  ];

  for (const splash of splashSizes) {
    const link = {
      rel: "apple-touch-startup-image",
      media: splash.media,
      href: `/screens/${splash.filename}`,
    };

    ctx.app.head.link = [...ctx.app.head.link, link];
  }
  const appleTouchLink = {
    rel: "apple-touch-icon",
    href: "/screens/apple-icon-180.png",
  };

  ctx.app.head.link = [...ctx.app.head.link, appleTouchLink];
};
