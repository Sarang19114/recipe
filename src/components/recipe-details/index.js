import Link from "next/link";

export default function RecipeDetailsItem({ recipeDetails }) {
  return (
    <div>
      <Link href={"/recipes-detail"}>Go to recipe list</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Recipe Image */}
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={recipeDetails?.image} // Updated variable name
              alt={recipeDetails?.name} // Fixed 'name' prop as 'alt'
              className="w-4/5 rounded object-cover"
            />
          </div>

          {/* Recipe Details */}
          <div>
            {/* Recipe Name */}
            <h2 className="text-3xl font-extrabold text-gray-950">
              {recipeDetails?.name}
            </h2>

            {/* Meal Type */}
            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {recipeDetails?.mealType?.[0]} {/* Safely accessing first meal type */}
              </p>
            </div>

            {/* Cuisine */}
            <div className="mt-5">
              <p className="text-xl text-gray-800">
                {recipeDetails?.cuisine}
              </p>
            </div>

            {/* Ingredients */}
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {recipeDetails?.ingredients?.map((item, index) => (
                  <li key={index}>{item}</li> // Added key for list items
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
