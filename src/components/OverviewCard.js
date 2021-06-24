import React, { useRef, useEffect } from 'react'

export const OverviewCard = ({type, sitio, data, change }) => {

    const arrowElement = useRef(null);
    const arrowContainer = useRef(null);
    const changeText = useRef(null);

    useEffect(() => {
        
        if (change >= 1) {
            arrowElement.current.classList.add("origin-bottom-left", "bg-green-500");
            changeText.current.classList.add("text-green-500");
        } else if (change < 0){
            arrowElement.current.classList.add("origin-top-right", "bg-red-500");
            changeText.current.classList.add("text-red-400");
        } else {
            arrowContainer.current.classList.remove("w-5");
            arrowElement.current.classList.add("hidden");
            changeText.current.classList.add("text-white");
        }

    }, [change])

    return (
        <div className="bg-cardDarkBlue h-32 rounded grid grid-cols-2 grid-rows-2 mb-4">
            <p className="w-full h-full px-8 py-4 text-desaturatedBlue">{ type }</p>
            <p className="w-full h-full px-8 py-4 flex flex-row justify-end items-center"> <img className="h-6" alt={`${sitio}logo`} src={`icon-${ sitio }.svg`}/> </p>
            <p className="w-full h-full px-8 py-4 text-white text-3xl flex flex-row items-end">{ data }</p>
            <div ref={changeText} className="w-full h-full px-8 py-4 text-sm font-semibold text-right leading-10">
                <div ref={arrowContainer} className="w-5 overflow-hidden inline-block">
                    <div ref={arrowElement} className="h-2 w-3 rotate-45 transform"></div> {/* bottomleft:up, topright:down */}
                </div> { change }%
            </div>

        </div>
    )
}
