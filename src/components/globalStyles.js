import { createGlobalStyle } from "styled-components";

import montserrat from "../fonts/Montserrat-Bold.ttf";
import lora from "../fonts/Lora-Italic-VariableFont_wght.ttf";
import hind from "../fonts/HindMadurai-Light.ttf";

const GlobalStyles = createGlobalStyle`
	:root{
		--red: #ff3535;
		--black: #3E3D3D;
		--yellow: #ffC500;
		--grey: #efefef;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${montserrat})  format('truetype');
	}
	@font-face {
		font-family: 'Lora';
		src: url(${lora})  format('truetype');
	}
	@font-face {
		font-family: 'Hind';
		src: url(${hind})  format('truetype');
	}

	html{
		font-size:12px;
		font-family:Hind,Arial, sans-serif;
	}
	img{
		max-width:100%;
	}
	h1,h3,h4{
		font-family: Montserrat,'Arial Narrow', Arial, sans-serif;
	}
	h2{
		font-family: Lora,'Arial Narrow', Arial, sans-serif;

	}

	ul, li, p {
		font-family: Hind, 'Arial Narrow', Arial, sans-serif;
	}
`;
export default GlobalStyles;
