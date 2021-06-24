import React, { useEffect, useRef } from 'react'


export const Card = ({sitio, nombreUsuario, followers, dailyChange}) => {

    const cardElement = useRef(null);
    const arrowElement = useRef(null);
    const arrowContainer = useRef(null);
    const dailyText = useRef(null);

    useEffect(() => {
        if ( sitio === "facebook" ) {
            cardElement.current.classList.add("bg-facebook")
        } else if ( sitio === "twitter" ) {
            cardElement.current.classList.add("bg-twitter")
        } else if ( sitio === "instagram" ) {
            cardElement.current.classList.add("bg-gradient-to-r", "from-instagramStart", "to-instagramEnd")
        }

        if (dailyChange >= 1) {
            arrowElement.current.classList.add("origin-bottom-left", "bg-green-500");
            dailyText.current.classList.add("text-green-500");
        } else if (dailyChange < 0){
            arrowElement.current.classList.add("origin-top-right", "bg-red-500");
            dailyText.current.classList.add("text-red-400");
        } else {
            arrowContainer.current.classList.remove("w-5");
            arrowElement.current.classList.add("hidden");
            dailyText.current.classList.add("text-white");
        }
    }, [sitio, dailyChange])

    
    return (
        <div className="text-center mb-6"> 
            <div className="bg-cardDarkBlue h-56 rounded">
                <div ref={cardElement} className="max-w-full h-1 rounded-t "></div>
                <div className="w-3/5 mx-auto mb-6 pt-6 flex justify-center">
                    <img className="h-6 mr-4" alt={`${sitio}logo`} src={`icon-${sitio}.svg`}/>
                    <span className="text-desaturatedBlue">@{ nombreUsuario }</span>
                </div>

                <div className="text-white text-center text-4xl font-bold mb-4">{ followers }</div>

                <div className="text-desaturatedBlue tracking-widest text-sm mb-6">FOLLOWERS</div>

                <div ref={dailyText} className="text-sm font-semibold">
                    <div ref={arrowContainer} className="w-5 overflow-hidden inline-block">
                        <div ref={arrowElement} className="h-2 w-3 rotate-45 transform"></div> {/* bottomleft:up, topright:down */}
                    </div>{ dailyChange } Today
                </div>
            </div>
        </div>
    )
}
