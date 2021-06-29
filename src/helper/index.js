
export const arrowHelper = (arrowElement, arrowContainer, changeText, change) => {
    
    if ( change >= 1 ) {
        arrowElement.current.classList.remove("origin-top-right", "bg-red-500", "hidden");
        arrowElement.current.classList.add("origin-bottom-left", "bg-green-500");
        changeText.current.classList.remove("text-red-400", "text-white", "dark:text-black");
        changeText.current.classList.add("text-green-500");
        arrowContainer.current.classList.add("w-5");
    } else if ( change < 0 ){
        arrowElement.current.classList.remove("origin-bottom-left", "bg-green-500", "hidden");
        arrowElement.current.classList.add("origin-top-right", "bg-red-500");
        changeText.current.classList.remove("text-green-500", "text-white", "dark:text-black");
        changeText.current.classList.add("text-red-400",);
        arrowContainer.current.classList.add("w-5");
    } else {
        arrowElement.current.classList.remove("origin-bottom-left", "bg-green-500", "origin-top-right", "bg-red-500");
        changeText.current.classList.remove("text-green-500", "text-red-400",);
        arrowElement.current.classList.add("hidden");
        changeText.current.classList.add("text-white", "dark:text-black");
        arrowContainer.current.classList.remove("w-5");
    }
}

export const borderHelper = (cardElement, site) => {
    
    if ( site === "facebook" ) {
        cardElement.current.classList.add("bg-facebook");
    } else if ( site === "twitter" ) {
        cardElement.current.classList.add("bg-twitter");
    } else if ( site === "instagram" ) {
        cardElement.current.classList.add("bg-gradient-to-r", "from-instagramStart", "to-instagramEnd");
    }
}
