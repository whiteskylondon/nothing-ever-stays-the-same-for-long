# nothing ever stays the same for long

A minimal, monochrome photography and video website built with Next.js 14, featuring responsive images, YouTube embeds, and thoughtful commentary on urban and natural landscapes.

## Features

- **Minimal Design**: Strictly monochrome aesthetic with generous whitespace
- **Responsive Images**: Optimized loading with Next.js Image component
- **Video Integration**: YouTube embeds with custom commentary
- **SEO Optimized**: Dynamic OG images, sitemap, and robots.txt
- **Accessible**: Semantic HTML and proper contrast ratios
- **Performance**: Fast loading with optimized assets

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Inter (UI) + EB Garamond (headlines)
- **Images**: Next/Image with Vercel Blob storage
- **Video**: YouTube embeds
- **Deployment**: Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Media

### Photos

1. **Upload to Vercel Blob**: Use the Vercel dashboard or CLI to upload web-optimized images
2. **Update Manifest**: Add photo metadata to `src/data/photos.json`:
```json
{
  "id": "unique-id",
  "src": "https://your-blob-url.com/image.jpg",
  "width": 1200,
  "height": 800,
  "alt": "Descriptive alt text",
  "caption": "Optional caption",
  "tags": ["tag1", "tag2"],
  "series": "optional-series",
  "date": "2024-01-01",
  "location": "Optional location",
  "commentary": "Long-form commentary text with line breaks..."
}
```

### Videos

1. **Upload to YouTube**: Upload your video and get the YouTube ID
2. **Update Manifest**: Add video metadata to `src/data/videos.json`:
```json
{
  "id": "unique-id",
  "youtubeId": "YouTube-video-id",
  "title": "Video Title",
  "date": "2024-01-01",
  "tags": ["tag1", "tag2"],
  "commentary": "Long-form commentary text..."
}
```

## Deployment

1. **Connect to Vercel**: Link your GitHub repository to Vercel
2. **Configure Environment**: Set up Vercel Blob storage
3. **Deploy**: Push to `main` branch for production deployment

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── data/               # JSON manifests for photos/videos
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

## Next Steps

- [ ] Set up Vercel Blob storage
- [ ] Upload high-quality web derivatives of existing images
- [ ] Configure custom domain
- [ ] Add analytics tracking
- [ ] Implement series pages with MDX
- [ ] Add lightbox functionality
- [ ] Optimize for Core Web Vitals

## License

All rights reserved. © 2024 Daniel Roy
