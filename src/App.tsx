import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "next-themes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {Toaster} from "@/components/ui/toaster";
import {TooltipProvider} from "@/components/ui/tooltip";
import CookieBanner from "./components/CookieBanner";
import CookiePolicy from "./pages/CookiePolicy";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <BrowserRouter>
                    <div className="min-h-screen flex flex-col">
                        <Routes>
                            <Route path="/" element={<Index/>}/>
                            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                            <Route path="/terms-of-service" element={<TermsOfService/>}/>
                            <Route path="/cookie-policy" element={<CookiePolicy/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                    <CookieBanner/>

                </BrowserRouter>
            </TooltipProvider>
        </ThemeProvider>
    </QueryClientProvider>
);

export default App;
