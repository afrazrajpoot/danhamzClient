import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetLettingsByIdQuery, useGetSalesByIdQuery } from '../../store/storeApi';
import Layout from '../../Layout/Layout';
import LettingProperty from '../../Component/PropertyDetails/LettingProperty';
import Property from '../../Component/PropertyDetails/Property';

const Email = () => {
    const { id } = useParams();
    const { 
        data: propertyDetails, 
        error: lettingsError, 
        isLoading: lettingsLoading 
    } = useGetLettingsByIdQuery(id, { skip: !id });

    const { 
        data: salesPropertyDetails, 
        error: salesError, 
        isLoading: salesLoading 
    } = useGetSalesByIdQuery(id, { skip: !id });

    if (lettingsLoading || salesLoading) {
        return (
            <Layout>
                <div className="flex items-center justify-center min-h-screen bg-gray-50">
                    <div className="animate-pulse text-lg font-medium text-gray-600">
                        Loading property details...
                    </div>
                </div>
            </Layout>
        );
    }

    if ((lettingsError && !propertyDetails) && (salesError && !salesPropertyDetails)) {
        return (
            <Layout>
                <div className="flex items-center justify-center min-h-screen bg-gray-50">
                    <div className="text-red-500 bg-red-50 px-6 py-4 rounded-lg shadow-sm">
                        <p className="text-lg font-medium">Unable to fetch property details</p>
                        <p className="text-sm mt-2">Please try again later or contact support</p>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Email Form Section */}
                        <div className="w-full lg:w-3/5 bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Contact About Property
                                </h2>
                            </div>
                            <iframe
                                src="https://link.agent-online.co.uk/widget/form/Aspo1MXcMSVMxHSeQvAa"
                                className="w-full h-[calc(100vh-12rem)] lg:h-[800px]"
                                id="inline-Aspo1MXcMSVMxHSeQvAa"
                                title="Email form"
                            />
                        </div>

                        {/* Property Details Section */}
                        <div className="w-full lg:w-2/5">
                            <div className="sticky top-8">
                                {propertyDetails ? (
                                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                        <LettingProperty
                                            key={propertyDetails._id}
                                            id={propertyDetails._id}
                                            quantity={propertyDetails.bedrooms}
                                            sharedHouse={propertyDetails.sharedHouse}
                                            weekPrice={propertyDetails.pricePerWeek}
                                            monthPrice={propertyDetails.pricePerMonth}
                                            location={propertyDetails.propertyName}
                                            bedRooms={propertyDetails.bedrooms}
                                            available={propertyDetails.availableDate}
                                            furnished={propertyDetails.furnished}
                                            bills={propertyDetails.bills}
                                            img={propertyDetails.image1?.url || 
                                                `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails.image1?.fileName}`}
                                        />
                                    </div>
                                ) : salesPropertyDetails ? (
                                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                        <Property
                                            key={salesPropertyDetails._id}
                                            tag={salesPropertyDetails.tag}
                                            icon={salesPropertyDetails.icon}
                                            quantity={salesPropertyDetails.bedrooms}
                                            price={salesPropertyDetails.price}
                                            name={salesPropertyDetails.propertyName}
                                            icon2={salesPropertyDetails.pics?.[0]?.icon}
                                            bed_rooms={salesPropertyDetails.bedrooms}
                                            img={salesPropertyDetails.image1?.url}
                                            img2={salesPropertyDetails.image2?.url}
                                            img3={salesPropertyDetails.image3?.url}
                                            img4={salesPropertyDetails.image4?.url}
                                            img5={salesPropertyDetails.image5?.url}
                                        />
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-xl shadow-sm p-6">
                                        <p className="text-gray-500 text-center">
                                            No property details available
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Email;