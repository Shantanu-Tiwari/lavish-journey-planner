import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/Services"));
const VisaCountries = lazy(() => import("./pages/VisaCountries"));
const VisaDetail = lazy(() => import("./pages/VisaDetail"));
const Europe = lazy(() => import("./pages/Europe"));
const Africa = lazy(() => import("./pages/Africa"));
const America = lazy(() => import("./pages/America"));
const Asia = lazy(() => import("./pages/Asia"));
const Australia = lazy(() => import("./pages/Australia"));
const MiddleEast = lazy(() => import("./pages/MiddleEast"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/visa-countries" element={<VisaCountries />} />
            <Route path="/visa/:country" element={<VisaDetail />} />
            <Route path="/europe" element={<Europe />} />
            <Route path="/africa" element={<Africa />} />
            <Route path="/america" element={<America />} />
            <Route path="/asia" element={<Asia />} />
            <Route path="/australia" element={<Australia />} />
            <Route path="/middle-east" element={<MiddleEast />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
