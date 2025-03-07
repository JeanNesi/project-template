import axios from "axios";

export const errorHandler = async ({ error }: { error: Error }) => {
  if (import.meta.env.PROD) {
    axios.post(import.meta.env.VITE_HANDLER_URL, {
      projectName: import.meta.env.VITE_PROJECT_NAME,
      environment: import.meta.env.VITE_PROJECT_ENVIRONMENT,
      side: import.meta.env.VITE_PROJECT_SIDE,
      errorStack: error.stack,
      extraInfo: {
        url: window.location.href,
      },
    });
  }
};
