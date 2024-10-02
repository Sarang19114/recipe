import RecipeList from "@/components/recipe-list";

async function getRecipes() {
    try {
        const apires = await fetch("https://dummyjson.com/recipes");
        if (!apires.ok) {
            throw new Error(`Error: ${apires.status}`);
        }
        const result = await apires.json();
        console.log(result); // Log to check the response
        return result?.recipes || []; // Return an empty array if recipes are undefined
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return []; // Return an empty array on error to avoid breaking the UI
    }
}

export default async function RecipesDetail() {
    const recipesList = await getRecipes();
    return <RecipeList recipesList={recipesList} />;
}
