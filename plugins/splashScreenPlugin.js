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
      href: "/screens/apple-splash-2048-2732.png",
      media:
        "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2732-2048.png",
      media:
        "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1668-2388.png",
      media:
        "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2388-1668.png",
      media:
        "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1536-2048.png",
      media:
        "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2048-1536.png",
      media:
        "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1488-2266.png",
      media:
        "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2266-1488.png",
      media:
        "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1640-2360.png",
      media:
        "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2360-1640.png",
      media:
        "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1668-2224.png",
      media:
        "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2224-1668.png",
      media:
        "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1620-2160.png",
      media:
        "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2160-1620.png",
      media:
        "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1320-2868.png",
      media:
        "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2868-1320.png",
      media:
        "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1206-2622.png",
      media:
        "(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2622-1206.png",
      media:
        "(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1290-2796.png",
      media:
        "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2796-1290.png",
      media:
        "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1179-2556.png",
      media:
        "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2556-1179.png",
      media:
        "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1284-2778.png",
      media:
        "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2778-1284.png",
      media:
        "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1170-2532.png",
      media:
        "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2532-1170.png",
      media:
        "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1125-2436.png",
      media:
        "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2436-1125.png",
      media:
        "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1242-2688.png",
      media:
        "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2688-1242.png",
      media:
        "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-828-1792.png",
      media:
        "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-1792-828.png",
      media:
        "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-1242-2208.png",
      media:
        "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-2208-1242.png",
      media:
        "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-750-1334.png",
      media:
        "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-1334-750.png",
      media:
        "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
    },
    {
      href: "/screens/apple-splash-640-1136.png",
      media:
        "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "/screens/apple-splash-1136-640.png",
      media:
        "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
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
