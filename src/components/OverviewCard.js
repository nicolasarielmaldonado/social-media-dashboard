import React, { useRef, useEffect } from 'react'
import { arrowHelper } from '../helper';

export const OverviewCard = ({type, site, data, change }) => {

    const arrowElement = useRef(null);
    const arrowContainer = useRef(null);
    const changeText = useRef(null);

    useEffect(() => {
        arrowHelper(arrowElement, arrowContainer, changeText, change);
    }, [change])

    return (
        <div className="bg-cardDarkBlue dark:bg-greyBlue h-32 rounded 
                        grid grid-cols-2 grid-rows-2 mb-4 transition-shadow duration-150 
                        hover:shadow-shadowdark dark:hover:shadow-shadowlight">
            <p className="w-full h-full px-8 py-4 md:px-4 text-desaturatedBlue dark:text-darkBlueGrey">{ type }</p>
            <p className="w-full h-full px-8 py-4 md:px-4 flex flex-row justify-end items-center">
                <img className="h-6" alt={`${site}logo`} src={`icon-${ site }.svg`}/>
            </p>
            <p className="w-full h-full px-8 py-4 md:px-4 text-white dark:text-black text-3xl flex flex-row items-end">{ data }</p>
            <div ref={ changeText } className="w-full h-full dark:text-black px-8 py-4 md:px-4 text-sm font-semibold text-right leading-10">
                <div ref={ arrowContainer } className="w-5 overflow-hidden inline-block">
                    <div ref={ arrowElement } className="h-2 w-3 rotate-45 transform"></div> 
                </div> { change }%
            </div>

        </div>
    )
}
