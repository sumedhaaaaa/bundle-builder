# Bundle Builder - Assignment Implementation

A responsive bundle builder interface that allows users to select products, track bundle progress, view discount calculations, and proceed with their selection. Built to match the exact assignment requirements.

## 🎯 Assignment Requirements

### ✅ Core Features Implemented

1. **Responsive Grid of Products**
   - 6 product cards with image, title, price
   - Each card includes a toggle-style "Add to Bundle" button

2. **Bundle Sidebar (Right side on desktop)**
   - Progress bar showing how many items selected (e.g., 2/3 added)
   - Dynamic list of selected products with thumbnail, name, price
   - Discount: Automatically show 30% off when 3+ products are added
   - Subtotal: Final total after discount
   - CTA Button: "Add Bundle to Cart" (enabled only when 3 or more products selected)

3. **Mobile-Friendly Layout**
   - Product grid should stack vertically
   - Sidebar should appear below or become sticky

## 🛠 Technical Implementation

### File Structure
```
/bundle-builder/
├── index.html          # Main HTML structure
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
└── /assets/            # Product images
    ├── photo-*.jpg     # Product images
```

### Key Components

#### Product Cards
- Dynamic generation from product data
- Toggle button states (Add/Added)
- Responsive image display

#### Bundle Sidebar
- Progress bar with completion status
- Dynamic item list with thumbnails
- Quantity controls with +/- buttons
- Remove item functionality

#### Pricing Logic
- Automatic 30% discount calculation
- Real-time subtotal updates
- Smart button enabling/disabling

## 🎮 User Experience

### Interactive Elements
1. **Add to Bundle**: Click to add items
2. **Progress Bar**: Shows completion status
3. **Quantity Controls**: Adjust quantities in the sidebar
4. **Remove Items**: Delete items from bundle
5. **Add to Cart**: Final action when 3+ items selected

## 📊 Product Data

The bundle includes 6 fashion items:
1. **Tie-Dye Lounge Set** - $150.00
2. **Sunburst Tracksuit** - $150.00
3. **Retro Red Streetwear** - $150.00
4. **Urban Sportwear Combo** - $150.00
5. **Oversized Knit & Coat** - $150.00
6. **Chic Monochrome Blazer** - $150.00

## 🚀 Getting Started

1. **Open** `index.html` in a web browser
2. **Interact** with the bundle builder interface
3. **Test** responsive design on different screen sizes

### Development Server
```bash
# Start a local server (if you have Python)
python -m http.server 8000

# Navigate to http://localhost:8000
```

## 🎨 Design Specifications

### Colors
- **Primary**: #111111 (Dark Gray)
- **Secondary**: #EBEBEB (Light Gray)
- **Success**: #00AA00 (Green for discount)
- **Background**: #FFFFFF (White)
- **Text**: #111111, #666666 (Gray)

### Typography
- **Font Family**: Instrument Sans
- **Weights**: 400 (Regular), 600 (Semi-Bold)

## 📱 Browser Support

- **Chrome**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Edge**: ✅ Full support
- **Mobile Browsers**: ✅ Responsive design

## 📄 Assignment Compliance

- ✅ No frameworks used (vanilla HTML, CSS, JS)
- ✅ No backend or cart logic — just simulate interactions using JS
- ✅ Clean, semantic HTML
- ✅ Custom JS only (no jQuery)
- ✅ Matches layout and spacing to Figma as closely as possible
- ✅ Commented code for readability
- ✅ Responsive design implemented
- ✅ All core features working as specified

---

**Built exactly as per assignment requirements using vanilla HTML, CSS, and JavaScript**
