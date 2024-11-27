import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
export const FileUploade = ({ handleFile, imageUrl }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);
  const [fileUrl, setFileUrl] = useState(imageUrl ? imageUrl : null)

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    // read the file url
    const readUrl = URL.createObjectURL(fileUploaded);
    setFileUrl(readUrl);
    handleFile(fileUploaded);
  };
  return (
    <main className="w-full">
       {fileUrl && <figure className=" w-full flex justify-center items-center h-[6vw] max-w-[5vw] rounded-[0.5vw]">
            <img src={fileUrl} alt="" className="w-full rounded-[0.5vw]" />
        </figure>}
        <section className="w-full md:max-w-[25vw] flex items-end justify-center mt-[0.7vw] bg-[#ECECEC] focus:outline-none rounded-[0.5vw] p-[1vw]">
    <Icon icon="icon-park-outline:upload-two" className='text-[4.5vw] md:text-[1.5vw] cursor-pointer hover:scale-125' onClick={handleClick} />
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </section>
    </main>
  );
};
