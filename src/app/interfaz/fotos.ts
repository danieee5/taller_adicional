export interface Fotos {
    idMeal: string;
    strMeal: string;
    strMealAlternate: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string; // URL de la imagen
    strTags: string;
    strYoutube: string;

    // //mostrar los ingredientes: OPCIONAL
    // [key: `strIngredient${number}`]: string | null;
    // [key: `strMeasure${number}`]: string | null;
    // }
}
