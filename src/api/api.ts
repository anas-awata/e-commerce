import axios, { AxiosError } from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

export const fetchApi = async (
  method?: string,
  endpoint?: string,
  data?: any
) => {
  try {
    const headers = {
      "Accept-Language": "en",
      "Content-Type":
        data instanceof FormData ? "multipart/form-data" : "application/json",
    };

    const response = await axios({
      url: `${API_BASE_URL}${endpoint}`,
      method: method || "GET",
      data,
      headers,
    });

    return response;
  } catch (error: any) {
    handleApiError(error);
    throw error;
  }
};

const handleApiError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    const { data, status } = error.response;
    console.log("Response Error:", data);
    console.log("Response Status:", status);
    console.log("Response Headers:", error.response.headers);

    // Handle specific status codes
    if (status === 401) {
      // Handle UnAuthenticated error
      console.log("UnAuthenticated Error");
    } else if (status === 403) {
      // Handle Unauthorized error
      console.log("UnauthorizedError");
      throw new Error("UnauthorizedError");
    } else if (status === 404) {
      // Handle not found error
      console.log("Not Found Error");
      throw new Error("NotFoundError");
    } else if (status === 422) {
      // Handle status code 422
      console.log("Status Code 422 Error");
      return error.response; // Return the response
    } else if (status === 400) {
      // Handle status code 400
      console.log("Status Code 400 Error");
      return error.response; // Return the response
    } else if (status === 421) {
      return error.response;
    } else if (status === 429) {
      return error.response;
    } else {
      // Handle other status codes
      console.log("Other Error");
      throw new Error("OtherError");
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.log("Request Error:", error.request);
    throw new Error("NetworkError");
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error:", error.message);
  }
};
