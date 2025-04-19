import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import { Link } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* <a href="#contact" className="skip-to-content"></a> */}

          {/* <a
            href="#main"
            className="skip-to-content absolute left-0 top-0 -translate-y-full focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-500 focus:text-white px-4 py-2 transition-all duration-200"
          >
            Skip to main content
          </a> */}
          {/* <a
            href="#main-content"
            className="absolute left-0 top-0 bg-blue-500 text-white py-2 px-4 z-50 transform -translate-y-full focus:translate-y-0 transition"
          >
            Skip to main content
          </a> */}
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
