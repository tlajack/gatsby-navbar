import { createGlobalStyle } from "styled-components";

// import montserrat from "../fonts/Montserrat-Bold.ttf";
// import lora from "../fonts/Lora-Italic-VariableFont_wght.ttf";
// import hind from "../fonts/HindMadurai-Light.ttf";

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
	}
	img{
		max-width:100%;
	}
	h1,h3,h4{
		font-family: 'Montserrat',sans-serif;
	}
	h2{
		font-family: 'Lora',sans-serif;

	}

	ul, li, p {
		font-family: 'Open Sans', sans-serif;
	}
`;
export default GlobalStyles;
