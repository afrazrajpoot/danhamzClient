import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';

const SocialShare = ({ fbURL, twURL, waURL, hideShare, title }) => {
  return (
    <div className='flex border-[1px] bg-[#152347] p-[0.7vw] ml-vw justify-evenly rounded-md w-full max-w-[60vw] md:max-w-[13vw] items-center' onClick={hideShare}>
      <FacebookShareButton className='text-vw' url={fbURL} quote={title} hashtag="#Blog">
        <FacebookIcon size={32} round={true} logoFillColor='white' />
      </FacebookShareButton>
      <TwitterShareButton className='text-vw' url={twURL} title={title}>
        <TwitterIcon size={32} round={true} logoFillColor='white' />
      </TwitterShareButton>
      <WhatsappShareButton className='text-vw' url={waURL} title={title}>
        <WhatsappIcon size={32} round={true} logoFillColor='white' />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
