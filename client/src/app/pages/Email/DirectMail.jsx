import React from 'react';
import Layout from '../../Layout/Layout';

const DirectMail = () => {

  return (
    <Layout>
      <div className="w-full bg-slate-100">
        <iframe
          src="https://link.agent-online.co.uk/widget/form/Aspo1MXcMSVMxHSeQvAa"
          className='w-full h-screen xl:h-[40vw] lg:h-[50vw] md:h-[50vw]'
          id="inline-Aspo1MXcMSVMxHSeQvAa" 
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Email form"
          data-height="567"
          data-layout-iframe-id="inline-Aspo1MXcMSVMxHSeQvAa"
          data-form-id="Aspo1MXcMSVMxHSeQvAa"
          title="Email form"
        />
      </div>
    </Layout>
  );
};

export default DirectMail;
