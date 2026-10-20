## ⚡ DigiTools — Digital Tools

**DigiTools** is a digital tools discovery platform where users can explore digital products, discover useful resources, add products to their cart, compare pricing plans, and find the right tools to improve their productivity.

**Live Demo |** [DigiTools](https://digitools-hub.surge.sh/)

---


#### 📁 Project Structure

```
digitools-platform/
├── public/
│   ├── CNAME
│   ├── products-data.json
│   ├── steps-data.json
│   └── pricing-data.json
├── src/
│   ├── assets/
│   │   ├── products/
│   │   │   └── shopping-cart.png
│   │   ├── banner.png
│   │   ├── circle.png
│   │   └── play.png
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Links.jsx
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── UserStats/
│   │   │   └── UserStats.jsx
│   │   ├── Products/
│   │   │   └── Products.jsx
│   │   ├── ProductsCard/
│   │   │   └── ProductsCard.jsx
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── CartCard.jsx
│   │   ├── GetStarted/
│   │   │   └── Getstarted.jsx
│   │   ├── UI/
│   │   │   ├── GetStartedCard.jsx
│   │   │   └── PricingCard.jsx
│   │   ├── Pricing/
│   │   │   └── Pricing.jsx
│   │   ├── Transform/
│   │   │   └── Transform.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

<br>




### 📌 About the Project

**DigiTools** is a modern, responsive digital tools platform that brings AI tools, design resources, templates, and productivity solutions together in one place. Users can explore products, manage their cart, and choose pricing plans through a clean and user-friendly interface.

This project focuses on practicing **React component architecture, props, state management, dynamic data rendering, JSON data fetching, cart functionality, responsive design, and reusable UI components**.


---



### ✨ Key Features

- **Dynamic Product Rendering:** Display digital products with dynamically rendered details, pricing, ratings, and badges using JSON data.
- **Interactive Cart Management:** Update the Navbar cart count when products are added and clear the cart upon checkout. The Buy Now button provides an instant “Added to cart” confirmation.
- **Responsive Pricing System:** Showcase pricing plans with dynamic features, highlighted popular plans, and responsive layouts.

<br>



### ⚙️ Technology Stack

| Technology | Purpose |
|:---|:---|
| **HTML5** | Semantic structure |
| **Tailwind CSS** | Responsive styling and layouts |
| **DaisyUI** | Reusable UI components |
| **JavaScript (ES6)** | Application logic and interactivity |
| **React** | Component-based UI development |
| **Vite** | Development server and build tool |
| **JSON** | Storing product, steps, and pricing data |
| **Git** | Version control |
| **GitHub** | Source code management |
| **Surge** | Project deployment |

<br>




#### 🌐 Build and Deployment

The project is built with Vite and deployed to Surge.

To generate a production-ready build and deploy the application, run the following commands:

    npm run build
    npm install -g surge
    surge dist

For custom domain configuration, refer to the Surge deployment settings.

<br>






## 👨‍💻 Author

**Bayjid Alom**

> Every small step in coding brings you closer to something extraordinary.
