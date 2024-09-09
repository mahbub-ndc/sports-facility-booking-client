import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      transformResponse: (response) => {
        console.log("redux-data", response);

        return response;
      },
    }),
  }),
});

export const { useGetAllBookingsQuery } = bookingApi;
