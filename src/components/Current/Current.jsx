const Current = ({ currentCooking }) => {
  

  const totalTime = currentCooking?.reduce(
    (total, item) => total + (+item?.preparing_time?.split(" ")?.[0]),
    0
  );
  
  const totalCalories = currentCooking?.reduce(
    (total, item) => total + (+item?.calories?.split(" ")?.[0]),
    0
  );

  return (
    <>
      <div className="mt-2">
        <h1 className="text-2xl font-semibold text-center text-[#282828] border-b-2 pb-3 lg:pb-6">
          Currently cooking: {currentCooking?.length}
        </h1>
      </div>
      {/* table section */}
      <div className="overflow-x-hidden text-[#878787]">
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
          {currentCooking.map((item, i) => (
            <div
              key={item?.recipe_id}
              className="flex gap-6 text-nowrap bg-[#28282808] p-2"
            >
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
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end justify-end gap-2 mx-3 my-3">
        <p className="text-base text-[#282828CC] font-medium">
          Total Time = {totalTime} <span>mins</span>
        </p>
        <p className="text-base text-[#282828CC] font-medium mb-3">
          Total Calories = {totalCalories} <span>calories</span>
        </p>
      </div>
    </>
  );
};

export default Current;
