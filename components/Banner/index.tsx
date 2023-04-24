import Image from "next/image";
import { BannerStyled, HeroText } from "./style";

const Banner = () => {
	return (
		<BannerStyled>
			<Image
				src="/images/hero.jpg"
				alt="hero"
				width={4740}
				height={3164}
				loading="eager"
				priority={true}
			/>
			<HeroText>
				<h1>
					Explore your favourite movies and TV shows all in <span>one</span> place
				</h1>
			</HeroText>
		</BannerStyled>
	);
};

export default Banner;
