import React from 'react'

export const Header = ({ totalFollowers, setSeed, handleDarkMode, dark}) => {

	const handleRandom = ()  => {
		setSeed(Math.floor(Math.random()*1000));
	}

    return (
        <div className="block border-0 md:mb-12 md:border-b-1 md:border-gray-700 md:flex md:flex-column">
            <header className="py-4 border-t-0 border-l-0 border-r-0 border-b-1
							 border-gray-700 md:border-b-0 mb-4 md:mb-0 md:w-3/4 flex flex-row justify-between md:justify-start">
				<div className="md:mr-8">
					<h2 className="text-white dark:text-black text-2xl">Social Media Dashboard</h2>
					<h3 className="text-desaturatedBlue dark:text-darkBlueGrey font-medium">Total followers <span className="text-white ml-1">{ totalFollowers }</span></h3>
				</div>
				<div className="text-center h-auto w-32 transform active:scale-90 transition duration-150 border-t-2 rounded-lg border-toggleColorStart hover:border-toggleColorEnd"> 
					<button onClick={() => handleRandom()} className="bg-cardDarkBlue h-full w-full text-desaturatedBlue dark:bg-greyBlue dark:text-darkBlueGrey text-sm px-2 rounded-lg outline-none border-0 focus:outline-none">Get a random user!</button>
        		</div>
			</header>
		
			{/* dark mode toogle */}
			<div className="flex items-center justify-between md:justify-end w-full mb-12 md:mb-0 md:w-1/4">
				<p className="text-desaturatedBlue dark:text-darkBlueGrey text-md font-medium">Dark Mode</p>
				<label className="flex items-center cursor-pointer md:ml-4">
					<button onClick={() => handleDarkMode()} className="relative">

						<input type="checkbox" className="sr-only" checked={ dark } readOnly={ true }/>

						<div className="block bg-gradient-to-r from-toggleColorStart to-toggleColorEnd w-14 h-8 rounded-full"></div>

						<div className="dot absolute left-1 top-1 bg-bgDarkBlue w-6 h-6 rounded-full transition-transform"></div>
					</button>
				</label>
			</div>
        </div>
    )
}
