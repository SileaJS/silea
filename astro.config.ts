export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://silea.dev",
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("critters-astro")).default({ Logger: 1 }),
		(await import("@astrojs/prefetch")).default(),
		(await import("@playform/biome-astro")).default({ Logger: 1 }),
		(await import("compress-astro")).default({ Logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
}) as typeof defineConfig;

import type { defineConfig } from "astro/config";
