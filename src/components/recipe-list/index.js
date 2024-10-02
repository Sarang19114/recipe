import {
    Card,
    CardContent,
} from "@/components/ui/card";
import Link from "next/link";  // Ensure that you're importing Link from next/link

export default function RecipeList({ recipesList }) { // Corrected prop name
    console.log(recipesList);  // Log the data to inspect it
    return (
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h1>
            <Link href={"/"} className="text-xl font-bold text-gray-800 mb-12">Back to Home page</Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    recipesList && recipesList.length > 0 ? (
                        recipesList.map(recipe => (
                            <Link key={recipe.id} href={`/recipes-detail/${recipe.id}`}>
                                <Card>
                                    <CardContent className="bg-white rounded-md cursor-pointer hover:scale-[1.1] transition-all">
                                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                            <img
                                                src={recipe.image}
                                                alt={recipe.name}
                                                className="h-full w-full object-cover object-top"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-800">{recipe.name}</h3>
                                        </div>
                                        <div className="mt-4 flex items-center flex-wrap gap-2">
                                            <p className="text-lg text-gray-600">
                                                Rating: {recipe.rating}
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="text-lg text-gray-600 font-bold">
                                                {recipe.cuisine}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))
                    ) : (
                        <p>No recipes available</p>
                    )
                }
            </div>
        </div>
    );
}
