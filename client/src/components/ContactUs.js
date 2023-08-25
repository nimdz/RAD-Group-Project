import ContactUsBG from "../assets/images/contactusbg.png";

export default function ContactUs() {
  return (
    <div className="w-full justify-start my-10 px-[50px] lg:px-[100px] grid grid-cols-[3fr_2fr]">
      <div className="flex items-center">
        <img src={ContactUsBG} alt="backgroundimage" />
      </div>
      <div className="flex items-center">
        <div className="ml-5 lg:ml-10 xl:ml-15">
          <h1 className="text-[20px] font-semibold">Let's have a chat !</h1>
          <p className="text-sm w-5/6">
            We're just message away - reach out to us for any inquries or
            assistance you need through our contact information provided below.
          </p>
          <form className="w-4/5 max-w-[350px]">
            <label htmlFor="name" className="font-semibold text-sm">
              Name
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 text-sm"
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 text-sm"
            />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              placeholder="Enter your message"
              id="message"
              className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 text-sm"
            />
            <br />
            <button className="bg-secondary_500 px-10 py-1 rounded-md text-white shadow-lg mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
