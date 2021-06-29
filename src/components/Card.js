import React, { useEffect, useRef } from 'react'
import { arrowHelper, borderHelper } from '../helper';


export const Card = ({ site, userName, followers, dailyChange }) => {

    const cardElement = useRef(null);
    const arrowElement = useRef(null);
    const arrowContainer = useRef(null);
    const dailyText = useRef(null);

    useEffect(() => {
        borderHelper(cardElement, site);
        arrowHelper(arrowElement, arrowContainer, dailyText, dailyChange);
    }, [ dailyChange, site ])

    
    return (
        <div className="text-center mb-6 w-auto md:w-1/4"> 
            <div className="bg-cardDarkBlue dark:bg-greyBlue h-56 rounded transition-shadow duration-150 dark:hover:shadow-shadowlight hover:shadow-shadowdark">
                <div ref={ cardElement } className="max-w-full h-1 rounded-t "></div>
                <div className="w-3/5 mx-auto mb-6 pt-6 flex justify-center">
                    <img className="h-6 mr-4" alt={`${ site }logo`} src={`icon-${ site }.svg`}/>
                    <span className="text-desaturatedBlue dark:text-darkBlueGrey">@{ userName }</span>
                </div>

                <div className="text-white dark:text-black text-center text-4xl font-bold mb-4">{ followers }</div>

                <div className="text-desaturatedBlue dark:text-darkBlueGrey tracking-widest text-sm mb-6">FOLLOWERS</div>

                <div ref={ dailyText } className="text-sm font-semibold">
                    <div ref={ arrowContainer } className="overflow-hidden inline-block">
                        <div ref={ arrowElement } className="h-2 w-3 rotate-45 transform"></div>
                    </div>{ dailyChange } Today
                </div>
            </div>
        </div>
    )
}
