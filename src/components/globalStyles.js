import { createGlobalStyle } from "styled-components";

import "@fontsource/open-sans";
import "@fontsource/montserrat/600.css";

const GlobalStyles = createGlobalStyle`
	:root{
		--red: #ff3535;
		--black: #3E3D3D;
		--yellow: #ffC500;
		--grey: #efefef;
		--barColor: #333333;
	}


	html{
		font-size:12px;
		font-family: 'Open Sans', sans-serif;
		font-weight:400;
		font-style:normal;

	}
	img{
		max-width:100%;
	}
	h1,h2, h3,h4{
		font-family: 'Montserrat',sans-serif;
	}
	
	ul, li, p {
		font-family: 'Open Sans', sans-serif;
	}
`;
export default GlobalStyles;
