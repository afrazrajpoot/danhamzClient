import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { Toaster, toast } from "sonner";
import Loading from "../../Component/Common/Loading";
import { useGlobalContext } from "../../UserContext/UserContext";
import SocialShare from '../../Component/SocialShare'
import { Helmet } from "react-helmet";

const ReadSingleBlog = () => {
  const { keywords } = useParams();
  const [blogId, setBlogId] = useState(null);
  const [blogData, setBlogData] = useState({});
  const token = JSON.parse(localStorage.getItem("userLoginInfo"));
  const admin = token?.admin ? token?.admin : "user";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { newBlog } = useGlobalContext();

  const readBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/blogs/${keywords}`
      );
      if (res) {
        setBlogData(res.data);
        setBlogId(res.data._id);
        setLoading(false);
        // console.log(res.data, "res.data");
        
        // setOpenGraphTags(res.data);
      }
    } catch (err) {
      setLoading(false);
      // Handle error
    }
  };

  const deleteBlog = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/deleteBlog/${blogId}`
      );
      if (res) {
        toast.success("Delete successfully", {
          position: "top-center",
        });
        navigate("/news-and-blogs");
      }
    } catch (err) {
      // Handle error
    }
  };

  const setOpenGraphTags = (data) => {
    const metaTitle = data.metaTitle || "Blog Title";
    const metaDescription = data.metaDescription || "Blog Description";
    const metaImage = `${import.meta.env.VITE_API_URL}/blogsPosts/${data.image1?.fileName}` || "Default Image URL";

    document.title = metaTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", metaDescription);
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", metaTitle);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute("property", "og:title");
      meta.setAttribute("content", metaTitle);
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", metaDescription);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute("property", "og:description");
      meta.setAttribute("content", metaDescription);
      document.head.appendChild(meta);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", metaImage);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute("property", "og:image");
      meta.setAttribute("content", metaImage);
      document.head.appendChild(meta);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);
    else {
      const meta = document.createElement('meta');
      meta.setAttribute("property", "og:url");
      meta.setAttribute("content", window.location.href);
      document.head.appendChild(meta);
    }
  };

  useEffect(() => {
    readBlog();
  }, [newBlog]);

  const metaTitle = blogData.metaTitle || "Blog Title";
  const metaDescription = blogData.metaDescription || "Blog Description";
  const metaImage = `${import.meta.env.VITE_API_URL}/blogsPosts/${blogData.image1?.fileName}` || "Default Image URL";


  return (
    <Layout>
      <Helmet>
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:image" content={metaImage} />
  <meta property="og:site_name" content="Danhamz" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:type" content="article" />
  {/* <!-- Twitter Card Tags --> */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Danhamz" />
  <meta name="twitter:creator" content="@Danhamz" />
  <meta name="twitter:title" content={metaTitle} />
  <meta name="twitter:description" content={metaDescription} />
  <meta name="twitter:image" content={metaImage} />
</Helmet>
      <Toaster />
      {loading ? <Loading /> : (
        <main>
          {admin && admin === 'admin' ? (
            <div className="bg-white p-[3vw] md:p-[1vw]">
              <button
                className="ml-[3vw] hover:shadow-lg bg-[#152347] text-white text-[3vw] md:text-vw rounded-md shadow-md p-[0.5vw]"
                onClick={() => navigate(`/update-blog/${keywords}`)}
              >
                Update Blog
              </button>
              <button
                className="ml-[3vw] hover:shadow-lg bg-amber-500 text-white text-[3vw] md:text-vw rounded-md shadow-md p-[0.5vw]"
                onClick={deleteBlog}
              >
                Delete Blog
              </button>
            </div>
          ) : null}
          <section className="p-[2vw] bg-white">
            <h1 className="text-[#152347] text-center text-[5vw] md:text-2vw font-medium">All you want to know about us</h1>
            <div className="flex items-center flex-col my-[4vw] md:my-[2vw]">
            <SocialShare
            fbURL={window.location.href}
            twURL={window.location.href}
            waURL={window.location.href}
            title={blogData.metaTitle}
            image={`${import.meta.env.VITE_API_URL}/blogsPosts/${blogData.image1?.fileName}`}
          />
          <p>Click here to share this article</p>
            </div>
            {[...Array(15)].map((_, index) => (
              <main className="my-[1vw]" key={index}>
                <article className="flex flex-col w-full my-[5vw] justify-around items-center">
                  {blogData?.[`image${index + 1}`] && (
                    <figure className="w-full max-w-[80vw] md:max-w-[50vw] rounded-md">
                      <img
                        src={`${import.meta.env.VITE_API_URL}/blogsPosts/${blogData?.[`image${index + 1}`]?.fileName}`}
                        alt="blog_image"
                        className="w-full rounded-md"
                      />
                    </figure>
                  )}
                  {blogData?.[`heading${index + 1}`] && (
                    <h1 className="text-[#152347] font-semibold text-start w-full max-w-[70vw] md:max-w-[50vw] text-[4.5vw] md:text-[1.5vw] mt-[5vw] md:mt-2vw">
                      {blogData?.[`heading${index + 1}`]}
                    </h1>
                  )}
                </article>
                {blogData?.[`info${index + 1}`] && (
                  <div className="text-[#152347] mt-[5vw] md:[mt-3vw] w-full max-w-[70vw] md:max-w-[50vw] mx-auto text-[3vw] md:text-vw">
                    {blogData?.[`info${index + 1}`]?.split('\n')?.map((paragraph, index) => (
                      <React.Fragment key={index}>
                        <p>{paragraph}</p>
                        {index !== blogData[`info${index + 1}`]?.split('\n')?.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </main>
            ))}
            <p className="text-[#152347] mt-[5vw] md:[mt-3vw] font-medium w-full max-w-[80vw] mx-auto text-[3vw] md:text-vw"> By: {blogData?.name}</p>
          </section>
        </main>
      )}
    </Layout>
  );
};

export default ReadSingleBlog;


