
# 🛍️ Full Stack E-commerce Website

This project is a comprehensive full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), integrating powerful payment gateways like Stripe and Razorpay, along with Cash on Delivery. It features both a user-facing frontend and a robust admin panel for managing products and orders.

## ✨ Key Features

This e-commerce platform offers a rich set of functionalities for both customers and administrators.

### 🌐 Frontend Features

The user-facing part of the application provides a seamless shopping experience:

*   **Homepage**:
    *   Displays **latest collections** and **recently added products** with images, titles, and prices.
    *   Highlights **best seller products**.
    *   Includes sections for **policies**, an **email subscription form**, and a **footer** with copyright information.
*   **Collection Page**:
    *   Shows **all available products**.
    *   **Product Filtering**: Filter products based on **category** (e.g., Kids, Men) and **type** (e.g., Top Wear, Bottom Wear).
    *   **Product Sorting**: Sort products by **price** (low to high, high to low) or by **relevance**.
*   **Search Functionality**:
    *   A dedicated search bar allows users to **search products by keywords** (e.g., "desert", "trouser").
*   **Product Page**:
    *   **Product Gallery**: Displays **multiple images** for a product, with small images updating the main image on click.
    *   **Product Information**: Shows product **title, reviews, price, and description**.
    *   **Size Selection**: Users can **select desired sizes** for a product, with selected sizes being highlighted.
    *   **Add to Cart**: Products can be **added to the cart** after selecting a size, with a notification if no size is selected.
    *   **Related Products**: Displays products related to the current product's category and subcategory.
*   **Cart Page**:
    *   **Cart Management**: Users can **increase or decrease the quantity** of items or **delete products** from the cart.
    *   **Cart Totals**: Displays the **total product value, shipping charge, and overall cart amount**.
    *   **Proceed to Checkout**: Directs users to the place order page.
*   **Checkout/Place Order Page**:
    *   **Delivery Information Form**: Users enter their **delivery details** (name, address, phone number, email).
    *   **Payment Gateway Selection**: Multiple options available: **Stripe**, **Razorpay**, or **Cash on Delivery** (COD).
    *   **Place Order**: Submits the order based on selected payment method.
*   **My Orders Page**:
    *   Displays a list of **products ordered** by the user.
    *   Shows **order date, size, and quantity** for each item.
    *   **Track Order**: Users can **track the real-time status** of their orders, updated from the admin panel.
*   **User Authentication**:
    *   **Login/Sign Up**: Users can **create new accounts** or **log in** with existing credentials.
    *   **Persistent Login**: Maintains user session using local storage, preventing automatic logout on page refresh.
    *   **Logout Functionality**: Allows users to securely log out, clearing session data.
*   **Other Pages**: Dedicated **About Us** and **Contact Us** pages with relevant information.
*   **Responsive Design**: The entire frontend is **mobile-responsive**, ensuring optimal display across various screen sizes.

### 🔒 Admin Panel Features

The administrative interface provides powerful tools for managing the e-commerce operations:

*   **Admin Login**:
    *   **Secure authentication** for administrators using predefined credentials.
*   **Order Management**:
    *   **View All Orders**: Access a comprehensive **list of all user orders**.
    *   **Update Order Status**: Administrators can **change the status of an order** (e.g., "order placed," "out for delivery," "delivered") which reflects on the user's "My Orders" page.
*   **Product Management**:
    *   **Add New Products**: Upload product **images** (supports multiple images), define **title, description, price, category, subcategory, available sizes**, and mark as a **best seller**.
    *   **List All Products**: Displays a sortable list of **all products** currently on the website.
    *   **Remove Products**: Administrators can **delete products** from the database.

## 💳 Payment Gateway Integrations

The application supports multiple payment methods to cater to diverse user preferences:

*   **Stripe Integration**:
    *   Allows for **secure online credit/debit card payments**.
    *   Manages **payment sessions** and redirects to Stripe's checkout page.
    *   Includes **payment verification** upon successful or cancelled transactions, handling order status and cart clearing accordingly.
*   **Razorpay Integration**:
    *   Enables **online payments** via Razorpay's platform.
    *   Creates **Razorpay orders** and handles payment execution through a secure popup.
    *   **Verifies payments** to update order status and clear user carts.
*   **Cash on Delivery (COD)**:
    *   Provides a traditional **offline payment option**, placing orders directly without online payment processing.

## 💻 Tech Stack

The project leverages a modern and robust technology stack:

*   **Frontend**: **React.js** with **Vite** for fast development, **React Router DOM** for navigation, **Tailwind CSS** for styling, and **Axios** for API calls.
*   **Backend**: **Node.js** and **Express.js** for building RESTful APIs.
*   **Database**: **MongoDB Atlas** for cloud-hosted NoSQL database, with **Mongoose** for object data modeling.
*   **Image Storage**: **Cloudinary** for secure and scalable image uploads and hosting.
*   **Authentication**: **JSON Web Tokens (JWT)** for user and admin authentication.
*   **Password Hashing**: **Bcrypt** for secure password storage.
*   **Payment Gateways**: **Stripe** and **Razorpay** SDKs.
*   **Environment Variables**: **Dotenv (`dotenv`)** for managing sensitive API keys and configurations.
*   **CORS**: **CORS middleware** for enabling cross-origin requests.
*   **Notifications**: **React Toastify** for displaying user feedback notifications.
*   **Validation**: **Validator.js** for input validation (e.g., email format, strong password).

## 🚀 Deployment

The project is designed for easy deployment on **Vercel**.

### Vercel Deployment Steps

1.  **Project Structure**: The repository is organized into `admin`, `backend`, and `frontend` folders.
2.  **Vercel Configuration (`vercel.json`)**:
    *   A `vercel.json` file is present in the `backend` folder for Express.js backend configuration.
    *   `vercel.json` files are also in the `frontend` and `admin` folders to support React Router.
3.  **Git Ignore (`.gitignore`)**: Includes `node_modules` and `.env` files to prevent sensitive data and unnecessary files from being pushed to GitHub.
4.  **GitHub Upload**: The entire project (excluding ignored files) is uploaded to a GitHub repository.
5.  **Vercel Import**:
    *   Link your GitHub account to Vercel.
    *   Import the GitHub repository as a new project on Vercel.
    *   For each sub-project (backend, frontend, admin), specify the **root directory** (e.g., `/backend`, `/frontend`, `/admin`).
6.  **Environment Variables**:
    *   Provide all necessary **environment variables** (e.g., `MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_API_KEY`, `STRIPE_SECRET_KEY`, `RAZORPAY_KEY_ID`, `VITE_BACKEND_URL`) in Vercel's project settings.
    *   The `VITE_BACKEND_URL` for frontend and admin panels should point to the deployed backend URL from Vercel.
7.  **Deploy**: Initiate the deployment process for each sub-project.

## ⚙️ Local Development Setup

To set up and run the project locally:

1.  **Prerequisites**:
    *   Node.js (LTS recommended)
    *   npm (Node Package Manager) or Yarn
    *   A MongoDB Atlas account (for database setup).
    *   A Cloudinary account (for image hosting).
    *   Stripe and Razorpay developer accounts (if testing online payments).
2.  **Clone the Repository**:
    ```bash
    git clone <your-repository-url>
    cd <your-project-folder>
    ```
3.  **Backend Setup**:
    ```bash
    cd backend
    npm install
    # Create a .env file and add your MongoDB_URI, JWT_SECRET, Cloudinary API keys, Stripe/Razorpay keys, and admin credentials.
    # Example .env content:
    # MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/ecommerce?retryWrites=true&w=majority
    # JWT_SECRET=your_jwt_secret_key
    # CLOUDINARY_API_KEY=your_cloudinary_api_key
    # CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
    # CLOUDINARY_NAME=your_cloudinary_cloud_name
    # ADMIN_EMAIL=admin@example.com
    # ADMIN_PASSWORD=adminpassword
    # STRIPE_SECRET_KEY=your_stripe_secret_key
    # RAZORPAY_KEY_ID=your_razorpay_key_id
    # RAZORPAY_KEY_SECRET=your_razorpay_key_secret
    npm run server # Starts the backend server with nodemon
    ```
4.  **Frontend Setup**:
    ```bash
    cd ../frontend
    npm install
    # Create a .env file and add your backend URL and Razorpay Key ID
    # Example .env content:
    # VITE_BACKEND_URL=http://localhost:4000
    # VITE_RAZORPAY_KEY_ID=your_razorpay_key_id (frontend only needs ID)
    npm run dev # Starts the frontend React app
    ```
5.  **Admin Panel Setup**:
    ```bash
    cd ../admin
    npm install
    # Create a .env file and add your backend URL
    # Example .env content:
    # VITE_BACKEND_URL=http://localhost:4000
    npm run dev # Starts the admin panel React app
    ```

Ensure all three (backend, frontend, admin) are running simultaneously in separate terminal windows for full functionality.
```
