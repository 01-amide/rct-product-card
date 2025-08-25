# rct_card

A simple React + Bootstrap card showcasing a product with a light, welcoming UI theme.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the dev server:
```bash
npm run dev
```

3. Open the app in your browser at the URL printed in the terminal.

## Tech Stack
- React
- Vite
- React-Bootstrap / Bootstrap
- Custom CSS in `src/index.css` and `src/App.css`

## Project Structure
```
src/
  App.jsx          # Renders the product card and greeting
  App.css          # Component-level styles (card, image, button)
  index.css        # Global base styles (light gradient background)
  components/
    Img.jsx        # Product image
    Name.jsx       # Product name
    Price.jsx      # Product price
    Description.jsx# Product description
  product.jsx      # Central product data
```

## Styling Notes
- The background uses a soft radial gradient for a welcoming feel (`src/index.css`).
- The card has rounded corners, soft shadows, and a gentle hover lift (`src/App.css`).
- The price button uses a subtle blue gradient.

### Product Image Behavior
There are two common ways to display the product image inside the card:
- Contain (show full image, no cropping):
  ```css
  .product-img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    background: #f5f9ff;
  }
  ```
- Fixed height (uniform card height). If you want no cropping, use `contain`; for edge-to-edge, use `cover`:
  ```css
  .product-img {
    width: 100%;
    height: 200px;       /* or your preferred fixed height */
    object-fit: contain; /* or cover */
    background: #f5f9ff;
  }
  ```

Adjust `.product-img` in `src/App.css` depending on the look you want.

## Customization
- Update `src/product.jsx` to change the product details and image.
- Tweak color tokens and typography in `src/index.css`.
- Modify card spacing, radius, and shadows in `src/App.css`.



## License
MIT
