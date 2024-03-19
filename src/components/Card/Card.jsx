import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Card = ({ recipe, handleWantToCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-white border shadow-xl">
        <figure className="px-4 pt-4">
          <img src={recipe_image} alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-2xl font-semibold text-[#282828]">
            {recipe_name}
          </h2>
          <p className="border-b text-base font-normal font-fira text-[#878787] pb-3 lg:line-clamp-1">
            {short_description}
          </p>
          <div className="border-b">
            <h4 className="text-xl font-medium text-[#282828]">
              Ingredients: {ingredients.length}
            </h4>
            <ul className="list-disc list-inside mb-2 text-[1.125rem] font-normal font-fira text-[#878787]">
              {ingredients?.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          {/* time and calories */}
          <div className="flex justify-between my-2">
            <div className="flex items-center gap-2">
              <CiClock2 className="text-xl text-[#282828CC]" />
              <p className="text-base font-normal text-[#282828CC]">
                {preparing_time}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineFire className="text-xl text-[#282828CC]" />
              <p className="text-base font-normal text-[#282828CC]">
                {calories}
              </p>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleWantToCook(recipe)}
              className="bg-primary rounded-full text-primaryDark text-xl font-semibold px-3 py-2 md:px-6 md:py-3"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
