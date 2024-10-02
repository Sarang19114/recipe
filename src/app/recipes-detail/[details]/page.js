import RecipesDetailsItem from '@/components/recipe-details'; // Correct import path

async function getRecipesDetails(recipeId) {
    try {
        const apires = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        if (!apires.ok) {
            throw new Error(`Error fetching recipe details: ${apires.status}`);
        }
        const result = await apires.json();
        return result;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export default async function Details({ params }) {
    const RD = await getRecipesDetails(params?.details);

    if (!RD) {
        return <div>Failed to load recipe details.</div>;
    }

    return (
        <div>
            <RecipesDetailsItem recipeDetails={RD} />
        </div>
    );
}
