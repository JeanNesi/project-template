import { ErrorBoundary } from "react-error-boundary";

import { ToastContainer, Slide } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ErrorFallback } from "@/components";
import AppRoutes from "@/routes";
import GlobalCSS from "@/styles/globalCSS";

import "react-toastify/dist/ReactToastify.css";
import { errorHandler } from "@/utils/handler/errorHandler";
import { IconProvider } from "./context/Icon/IconProvider";
import { theme } from "./styles/theme";

export default function App() {
  const query = new QueryClient();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        errorHandler({ error });
      }}
    >
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={query}>
          <IconProvider>
            <GlobalCSS />
            <ToastContainer
              position="bottom-left"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              transition={Slide}
            />
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </IconProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
