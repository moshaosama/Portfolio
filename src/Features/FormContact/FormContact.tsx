const FormContact = () => {
  return (
    <>
      <form className="flex flex-col gap-7">
        <p>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-slate-800/50 py-4 rounded-xl  px-4 w-[35pc] max-sm:w-[22pc] max-xl:w-[20pc] border border-slate-700"
          />
        </p>

        <p>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-slate-800/50 py-4 rounded-xl  px-4 w-[35pc] max-sm:w-[22pc] max-xl:w-[20pc] border border-slate-700"
          />
        </p>
        <p>
          <textarea
            placeholder="Your Message"
            className="bg-slate-800/50 h-40 rounded-xl  py-4 px-4 w-[35pc] max-sm:w-[22pc] max-xl:w-[20pc] border border-slate-700"
          />
        </p>
        <button className=" py-3 hover:shadow-blue-400 hover:shadow-sm hover:scale-105 cursor-pointer transition-all duration-300  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full">
          Send Message
        </button>
      </form>
    </>
  );
};

export default FormContact;
