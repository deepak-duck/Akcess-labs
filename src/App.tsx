import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import UnderDevelopment from "./pages/ProgressPage";



const App = () => {
  return (
    <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/progress" element={<UnderDevelopment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
    </BrowserRouter>
  );
};

export default App;
