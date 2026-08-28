import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["", "/about", "/treatments", "/reviews", "/faq", "/contact", "/appointment"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/appointment" ? 0.9 : 0.7,
  }));
}
