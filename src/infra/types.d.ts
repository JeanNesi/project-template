type IHttpClientAdapter = {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  data?: any;
  query?: {
    [key: string]: any;
  };
  showSuccessToast?: boolean;
};
