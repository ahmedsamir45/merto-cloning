# 🛍️ Merto E-Commerce Clone

## 📋 Project Overview
A responsive e-commerce website clone with 4 key pages:
- **Homepage** - Featured products, categories, promotions
- **Shop Page** - Product grid with filtering/sorting
- **Product Page** - Detailed view with zoomable images and interactive tabs
- **Contact Page** - Customer support form

## ✨ Key Features
```bash
✔️ Responsive Bootstrap 5 layout
✔️ Product image zoom functionality  
✔️ Dynamic tab system (Description/Specs/Reviews)
✔️ Interactive quantity selector (+/- buttons)
✔️ Off-canvas mobile menu
✔️ Shopping cart with item counter
```

## 🛠️ Tech Stack
| Category       | Technologies Used |
|----------------|-------------------|
| **Frontend**   | HTML5, CSS3, Bootstrap 5 |
| **Interactivity** | JavaScript, jQuery |
| **Components** | Owl Carousel, Font Awesome |
| **Animations** | WOW.js, Animate.css |

## 📂 File Structure
```
merto-cloning/
├── index.html          # Homepage
├── shop.html           # Product listings
├── product.html        # Single product view
├── contact.html        # Contact form
├── css/
│   ├── style.css       # Custom styles
│   └── all.min.css     # Font Awesome
├── js/
│   ├── global.js       # Shared functions
│   └── product.js      # Product page logic
└── imgs/               # Images/icons
```

## 🚀 Setup Guide
1. **Clone the repo**:
   ```bash
   git clone https://github.com/ahmedsamir45/merto-cloning.git
   ```
2. **Run locally**:
   - Open any HTML file in your browser
   - For live reloading, use VS Code with Live Server extension

## 🧩 Component Breakdown
### Product Page Features
- **Image Gallery**: Sidebar thumbnails + main image zoom
- **Dynamic Tabs**:
  ```markdown
  1. Description - Product details + shipping info
  2. Specifications - Tech details in table format  
  3. Reviews - Customer feedback section
  ```
- **Add-to-Cart**: Quantity selector with +/- buttons

## 📝 Customization
To modify:
1. **Update products** in `js/product.js`:
   ```javascript
   const productDetails = {
     1: {
       title: "New Product Name",
       price: "$19.99"
     }
   };
   ```
2. **Change styles** in `css/style.css`
3. **Add pages** by duplicating existing HTML files

## 🌟 Why This Project?
- **Modern UI**: Clean Bootstrap 5 design
- **Mobile-Friendly**: Responsive layout
- **Interactive Elements**: Enhances user experience

## 📬 Contact
🔗 [GitHub Profile](https://github.com/ahmedsamir45)

---

