import { useEffect, useRef, useState } from "react";
import { CardList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { OverviewList } from "./components/OverviewList";
import { dataRequest } from "./services/dataRequest";



function App() {

	const [ totalFollowers, setTotalFollowers ] = useState(0);
	const [{ userName, socialMedia }, setFullData ] = useState([]);
	const [ seed , setSeed ] = useState(Math.floor(Math.random()*1000));
	const [ dark, setDark ] = useState(false);

	const toggle = useRef( null );

	useEffect(() => {
		setFullData(dataRequest( seed ));
	}, [ seed ])
	
	useEffect(() => {
		if( socialMedia ){
			setTotalFollowers( socialMedia[0].followers + socialMedia[1].followers + socialMedia[2].followers );
		}

	}, [ socialMedia ]);

	const handleDarkMode = () => {
		setDark( !dark );
		toggle.current.classList.toggle( "dark" );
	}

	const handleTop = () => {
		// cancel if already on top
		if (document.scrollingElement.scrollTop === 0) return;
	
		const cosParameter = document.scrollingElement.scrollTop / 2;
		let scrollCount = 0, oldTimestamp = null;
	
		function step (newTimestamp) {
			if (oldTimestamp !== null) {
				// if duration is 0 scrollCount will be Infinity
				scrollCount += Math.PI * (newTimestamp - oldTimestamp) / 750;
				if (scrollCount >= Math.PI) {
					return document.scrollingElement.scrollTop = 0;
				}
				document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
			}
			oldTimestamp = newTimestamp;
			window.requestAnimationFrame(step);
		}
		window.requestAnimationFrame(step);
	}

	return (
		<div ref={toggle} className="dark h-screen bg-cardDarkBlue">
			<div className="mx-auto px-6 py-4 bg-bgDarkBlue dark:bg-white">

				<Header 
					totalFollowers={ totalFollowers } 
					setSeed={ setSeed }
					handleDarkMode={ handleDarkMode }
					dark={dark}
				/>

				<CardList 
					socialMedia={ socialMedia }
					userName={ userName } 
				/>

				<OverviewList 
					userName={ userName }
					socialMedia={ socialMedia } 	
				/>
				
			</div>
			<button onClick={() => handleTop()} className="font-bold absolute right-0 mr-4 
											focus:outline-none focus:select-none text-desaturatedBlue animation">Back to Top
			</button>

			<Footer/>
			
		</div>
	)
}

export default App;
