# UmaHomeArts website

This is a free, static website for GitHub Pages. It is a catalogue only: there are no prices, carts or payments on this site. Every product button sends customers to Meesho.

## Upload it to GitHub

1. Download `UmaHomeArts-v1.zip` from the Codex chat.
2. Open your GitHub repository and choose **Add file → Upload files**.
3. Upload the extracted files and folders. Replace existing files when GitHub asks.
4. Click **Commit changes**. Your site will update in a few minutes.

## Important: add your own links

Open `js/products.js` on GitHub and click the pencil icon.

- Paste your Meesho store link into `storeUrl`.
- Paste your WhatsApp number (with country code, no `+` or spaces) into `whatsappNumber`.
- Replace the `meeshoUrl` of every product with that product's Meesho link.
- To hide a product from the homepage, change `featured:true` to `featured:false`.
- To remove a product completely, delete its whole line.

## Add product images

Upload each image into `images/products/` and use these exact names:

- `vastu-fish.jpg`
- `golden-owl.jpg`
- `vastu-tortoise.jpg`
- `laughing-buddha.jpg`
- `lord-ganesha.jpg`
- `bal-krishna.jpg`

Until an image is uploaded, the website displays a clean UmaHomeArts placeholder.
