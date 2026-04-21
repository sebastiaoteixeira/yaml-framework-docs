# yaml-framework-docs

Documentation site for [yaml-api-generator](https://github.com/sebastiaoteixeira/yaml-framework), built with [Fumadocs](https://fumadocs.vercel.app/) and Next.js.

Content is pulled automatically from the source repo's `docs/` directory via CI. The `content/` directory is not committed here.

## Local development

1. Clone both repos side by side.
2. In this repo's root, create a symlink so Fumadocs can find the content:

```bash
ln -s /path/to/yaml-api-generator/docs content/docs
```

3. Install and run:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000/yaml-framework-docs/docs`.
