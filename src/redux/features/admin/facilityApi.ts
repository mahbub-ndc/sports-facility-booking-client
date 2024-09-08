import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllfacilities: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
    }),

    createFacility: builder.mutation({
      query: (data) => ({
        url: "/facility",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllfacilitiesQuery, useCreateFacilityMutation } =
  facilityApi;
