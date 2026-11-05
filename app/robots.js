export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "Omgilibot",
          "FacebookBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.facetverify.com/sitemap.xml",
    host: "https://www.facetverify.com",
  };
}
