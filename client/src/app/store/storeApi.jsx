import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    endpoints: (builder) => ({
        getAllLettings: builder.query({
            query: () => `/lettings`,
        }),
        getAllDisabledLettings: builder.query({
          query: () => `/lettings/disabled-lettings`,
      }),
        getLettingsById: builder.query({
            query: (id) => `/lettings/${id}`,
          }),
          getLettingsByPermaLink: builder.query({
            query: (permaLink) => `/lettings/property/${permaLink}`,
          }),
          // getproperties
          getAvailablePropertiesByAreaName: builder.query({
            query: () => `/lettings/getproperties`,
          }),

          getLettingsAdvancedSearch: builder.query({
            query: (params) => {
              const { maxPrice, bedrooms, } = params;
              // Use the object syntax for query parameters
              return {
                url: `/lettings/advancedSearch`,
                method: 'GET',
                params: { maxPrice, bedrooms, },
              };
            },
          }),
        addLettingProperty: builder.mutation({
            query: (data) => ({
                url: '/lettings',
                method: 'POST',
                body: data,
            }),
        }),
        updateLettingProperty: builder.mutation({
            query: ({ id, data }) => ({
              url: `/lettings/${id}`,
              method: 'PUT',
              body: data,
            }),
        }),
        deleteLettingProperty: builder.mutation({
            query: (id) => ({
              url: `/lettings/${id}`,
              method: 'DELETE',
            }),
          }),
          getAllSales: builder.query({
            query: () => `/sales`,
        }),
        getSalesById: builder.query({
            query: (id) => `/sales/${id}`,
          }),
          getSalesByPermaLink: builder.query({
            query: (permaLink) => `/sales/property/${permaLink}`,
          }),
        addSaleProperty: builder.mutation({
            query: (data) => ({
                url: '/sales',
                method: 'POST',
                body: data,
            }),
        }),
        updateSaleProperty: builder.mutation({
            query: ({ id, data }) => ({
              url: `/sales/${id}`,
              method: 'PUT',
              body: data,
            }),
        }),
        deleteSaleProperty: builder.mutation({
            query: (id) => ({
              url: `/sales/${id}`,
              method: 'DELETE',
            }),
          }),
        signUpUser: builder.mutation({
            query: (data) => ({
                url: '/auth/signup',
                method: 'POST',
                body: data,
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        removePropertyImage: builder.mutation({
            query: ({ propertyId, fileName }) => ({
              url: `/lettings/deletePropertyImages`,
              method: 'POST',
              body: { propertyId, fileName },
            }),
          }),
    })
})

export const {
    useGetAllLettingsQuery,
    useGetLettingsByPermaLinkQuery,
    useGetAllDisabledLettingsQuery,
    useGetLettingsByIdQuery,
    useGetLettingsAdvancedSearchQuery,
    useAddLettingPropertyMutation,
    useUpdateLettingPropertyMutation,
    useDeleteLettingPropertyMutation,
    useGetAllSalesQuery,
    useGetSalesByPermaLinkQuery,
    useGetSalesByIdQuery,
    useAddSalePropertyMutation,
    useUpdateSalePropertyMutation,
    useDeleteSalePropertyMutation,
    useSignUpUserMutation,
    useLoginUserMutation,
    useRemovePropertyImageMutation,
    useGetPropertiesByAreaNameQuery,
} = storeApi