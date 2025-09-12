To change the website icons/favicons:

1. Prepare assets (recommended):
   - favicon.ico (16x16, 32x32 embedded)
   - favicon-16x16.png (16x16)
   - favicon-32x32.png (32x32)
   - apple-touch-icon.png (180x180)
   - android-chrome-192x192.png (192x192)
   - android-chrome-512x512.png (512x512)
   - (optional) safari-pinned-tab.svg (monochrome)
   - (optional) favicon.svg

2. Place them in this /public folder at the root of the built app (same level as index.html when served).

3. Update colors:
   - index.html: meta name="theme-color" value
   - site.webmanifest: theme_color & background_color

4. After replacing, clear browser cache or open DevTools > Application > Clear storage.

5. If deploying to Firebase Hosting, run:
   npm run build
   firebase deploy --only hosting

6. Validate:
   - Use https://realfavicongenerator.net/favicon_checker to confirm.

All files currently referenced have placeholder expectation—you must supply actual images.
