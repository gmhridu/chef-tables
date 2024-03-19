const PrimaryBtn = ({ children }) => {
  return (
    <button className="bg-primary rounded-full text-primaryDark text-xl font-semibold px-3 py-2 md:px-6 md:py-3">
      {children}
    </button>
  );
};

export default PrimaryBtn;
