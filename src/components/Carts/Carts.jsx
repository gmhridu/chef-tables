import { useState } from "react";
import Current from "../Current/Current";

const Carts = ({ cart, setCart }) => {
  const [currentCooking, setCurrentCooking] = useState([]);

  const handlePreparing = (cartItem) => {
    setCurrentCooking((perv) => {
      return [...perv, cartItem];
    });
    setCart((prev) => {
      return prev.filter((item) => item.recipe_id !== cartItem.recipe_id);
    });
  };
  return (
    <>
      <div className="bg-white shadow-xl border rounded-xl p-4 lg:p-8">
        <div>
          <h1 className="text-2xl font-semibold text-center text-[#282828] border-b-2 pb-3 lg:pb-6">
            Want to cook: {cart?.length}
          </h1>
        </div>
        <div className="flex flex-col w-full">
          <div className="overflow-x-hidden text-[#878787] p-3">
            <div className="flex flex-col gap-4 items-center lg:items-start justify-center">
              <div className="flex gap-[5rem] font-fira text-base font-medium">
                <h4 className="font-fira text-base font-medium text-[#878787]">
                  Name
                </h4>
                <h4 className="font-fira text-base font-medium text-[#878787]">
                  Time
                </h4>
                <h4 className="font-fira text-base font-medium text-[#878787]">
                  Calories
                </h4>
              </div>
              {cart.length === 0 ? (
                <p className="font-fira text-base text-center font-medium text-[#878787]">
                  No recipes in cart
                </p>
              ) : (
                cart.map((item, i) => (
                  <div
                    key={item?.recipe_id}
                    className="flex flex-col gap-4 lg:gap-2 items-center lg:flex-row bg-[#28282808] p-2"
                  >
                    <div className="flex gap-6 text-nowrap">
                      <p className="font-fira text-base font-medium text-[#878787] line-clamp-1 md:line-clamp-none">
                        {i + 1} {item?.recipe_name}
                      </p>
                      <p className="font-fira text-base font-medium text-[#878787]">
                        {item?.preparing_time}
                      </p>
                      <p className="font-fira text-base font-medium text-[#878787]">
                        {item?.calories}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => handlePreparing(item)}
                        className="btn btn-primary hover:bg-green-400 bg-primary rounded-full text-primaryDark border-none text-xl font-semibold mb-4 lg:mb-0"
                      >
                        Preparing
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* currently cooking section */}
          <Current currentCooking={currentCooking} />
        </div>
      </div>
    </>
  );
};

export default Carts;
