/** Sacred Journey Editorial design reminder: preserve a focused, light parchment reading environment for the public ministry experience. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { AboutPage, ContactPage, EventsPage, FounderPage, GalleryPage, GivePage, OutreachesPage, PartnerPage, PrayerPage, SermonsPage } from "./pages/MinistryPages";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/founder" component={FounderPage} />
      <Route path="/outreaches" component={OutreachesPage} />
      <Route path="/sermons" component={SermonsPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/prayer" component={PrayerPage} />
      <Route path="/partner" component={PartnerPage} />
      <Route path="/give" component={GivePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
