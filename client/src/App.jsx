import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import CategoriesPage from "./pages/CategoriesPage";
import CategoriesFormPage from "./pages/CategoriesFormPage";

import ProductsPage from "./pages/ProductsPage";
import ProductsFormPage from "./pages/ProductsFormPage";

import HomePage from "./pages/HomePage";

import ProtectedRoute from "./ProtectedRoute";
import { CategoryProvider } from "./context/CategoriesContext";
import { ProductProvider } from "./context/ProductsContext";

import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          <BrowserRouter>
            <main className="container mx-auto px-10">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/add-category" element={<CategoriesFormPage />} />
                  <Route path="/categories/:id" element={<CategoriesFormPage />} />

                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/add-product" element={<ProductsFormPage />} />
                  <Route path="/products/:id" element={<ProductsFormPage />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App