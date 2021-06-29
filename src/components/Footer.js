import React from 'react'

export const Footer = () => {
    return (
        <footer className="py-4 text-center bg-cardDarkBlue dark:bg-paleBlue">
            <p className="text-base text-white dark:text-black mb-2"><code>Made by</code></p>
            <div className="opac">
                <img alt="github-icon" src="././github-icon.png" className="mr-3 filter invert dark:filter-none contrast-200 opac-item inline-block opacity-0 transition-opacity duration-300 w-6"/>
                <a href="https://github.com/nicolasarielmaldonado" 
                target="_blank" 
                rel="noreferrer" 
                className=" text-lg inline-block text-desaturatedBlue border-b-1 border-transparent transition duration-300 
                                mr-3 transform hover:scale-105 hover:border-desaturatedBlue">nicolasarielmaldonado
                </a>
            </div>
        </footer>
    )
}
