import { HashRouter, Route, Routes } from "react-router-dom";
import Frontend from "./pages/certifications/Frontend";
import Home from "./pages/Home";
import Mern from "./pages/certifications/Mern";
import Python from "./pages/certifications/Python";
import Backend from "./pages/certifications/Backend";
import Aws from "./pages/certifications/AWS";
import Fullstack from "./pages/certifications/Fullstack";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { UserProvider } from "./context/userContext";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ViewTask from "./pages/ViewTask";
import UserDashboard from "./pages/user/UserDashboard";
import CertificactePreview from "./components/CertificatePreview";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoutes";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Courses from "./pages/Courses";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <HashRouter>
        <UserProvider>
          <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/certifications" element={<Certifications />} /> */}
                <Route path="/certifications/frontend" element={<Frontend />} />
                <Route
                  path="/certifications/fullstack"
                  element={<Fullstack />}
                />
                <Route path="/certifications/mern" element={<Mern />} />
                <Route path="/certifications/backend" element={<Backend />} />
                <Route path="/certifications/python" element={<Python />} />
                <Route path="/certifications/aws" element={<Aws />} />
                {/* login and signup */}

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />
                {/* admin login */}
                <Route path="/admin-login" element={<AdminLogin />} />
                {/* Add more routes as needed */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin/task/:userId" element={<ViewTask />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route
                  path="/user-dashboard/:userId"
                  element={<UserDashboard />}
                />
                <Route
                  path="/certificate-preview"
                  element={<CertificactePreview />}
                />
                <Route path="/courses" element={<Courses />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/support" element={<Support />} />
              </Route>
            </Routes>
          </div>
        </UserProvider>
      </HashRouter>
    </div>
  );
}

export default App;
