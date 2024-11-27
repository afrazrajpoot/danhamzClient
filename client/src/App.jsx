import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import About from './app/pages/About'
import Contact from './app/pages/Contact'
import Report from './app/pages/Report'
import Signup from './app/pages/Signup'
import SearchProperty from './app/pages/SearchProperty'
import LettingsPropertyDetails from './app/Component/PropertyDetails/LettingsPropertyDetails'
import PropertySearch from './app/pages/PropertySearch'
import ShowProperties from './app/pages/CMS/ShowProperties'
import SalesPropertyDetails from './app/Component/PropertyDetails/SalesPropertyDetails'
import UpdateLettingsProperty from './app/pages/CMS/UpdateLettingsProperty'
import UpdateSalesProperty from './app/pages/CMS/UpdateSalesProperty'
import Email from './app/pages/Email/Email'
import Register from './app/Admin/Register'
import UserLogin from './app/Admin/UserLogin'
import Term from './app/pages/Policies/Term'
import PricacyPolicy from './app/pages/Policies/PricacyPolicy'
import CookiePolicy from './app/pages/Policies/CookiePolicy'
import ComingSoon from './app/pages/ComingSoon'
import DirectMail from './app/pages/Email/DirectMail'
import PrivateRoute from './app/pages/Routes/PrivateRoutes'
import Lettings from './app/pages/Lettings'
import Sales from './app/pages/Sales'
import Blogs from './app/pages/Blogs/Blogs'
import Valuation from './app/pages/Valuation'
import Confirmation from './app/pages/Email/Confirmation'
import ReportDetails from './app/pages/Reports/ReportDetails'
import ReadSingleBlog from './app/pages/Blogs/ReadSingleBlog'
import PopUpForm from './app/pages/Blogs/PopUpForm'
import Error from './app/pages/Error'
import Refurbishment from './app/pages/Refurbishment'
import BlockManagement from './app/pages/BlockManagement'
import FreeSales from './app/pages/FreeSales'



const App = () => {

  return (
    <>
      <Routes>
        {/* protected roues */}
        <Route path='/cms' element={<PrivateRoute component={ShowProperties} />} />
        {/* <Route path='/send-mail/:id' element={<PrivateRoute component={Email} />} /> */}        <Route path='/confirmation' element={<PrivateRoute component={Confirmation} />} />

        <Route path='/send-mail/:id' element={<Email/>} />

        <Route path='/confirmation' element={<PrivateRoute component={Confirmation} />} />

        <Route path='/edit-lettings-property/:id' element={<PrivateRoute component={UpdateLettingsProperty} />} />
        <Route path='/add-lettings-property' element={<PrivateRoute component={UpdateLettingsProperty} />} />
        <Route path='/add-sales-property' element={<PrivateRoute component={UpdateSalesProperty} />} />
        <Route path='/edit-sales-property/:id' element={<PrivateRoute component={UpdateSalesProperty} />} />
        <Route path='/create-blog' element={<PrivateRoute component={PopUpForm} />} />
        <Route path='/update-blog/:keywords' element={<PrivateRoute component={PopUpForm} />} />
        {/* protected roues */}
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/news-and-blogs' element={<Blogs />} />
        <Route path='/book-valuation' element={<Valuation />} />
        {/* <Route path='/maintenance' element={<Reports />} /> */} 
        <Route path='/maintenance' element={<Report />} />
        <Route path='/maintenance-request' element={<ReportDetails />} />

        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<LettingsPropertyDetails />} />
        <Route path='/sales-details/:id' element={<SalesPropertyDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login-1' element={<Signup />} />
        <Route path='/lettings' element={<Lettings />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/search-properties' element={<SearchProperty />} />
        <Route path='/propertySearch' element={<PropertySearch />} />
        <Route path='/send-mail' element={<DirectMail />} />
        <Route path='/terms-and-conditions' element={<Term />} />
        <Route path='/privacy-policy' element={<PricacyPolicy />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        <Route path="/blogs/:keywords" element={<ReadSingleBlog />} />
        <Route path="/refurbishment" element={<Refurbishment />} />
        <Route path="/block-management" element={<BlockManagement />} />
        <Route path='/sell-for-free' element ={<FreeSales />} />
        <Route path="*" element={<Error />} />
      
      </Routes>
    </>
  )
}

export default App