import Image from "next/image";
import { BannerStyled, HeroArrow, HeroText } from "./style";
import ArrowIcon from "../Icons/ArrowIcon";

const Banner = () => {
	return (
		<BannerStyled>
			<Image src={"/images/hero.jpg"} width={4740} height={3164} loading={"eager"} priority={true} alt={"Hero image"} />
			<HeroText>
				<h1>
					Explore your favourite movies and TV shows all in{" "}
					<span>one</span> place
				</h1>
			</HeroText>
            <HeroArrow>
                <span>Scroll to see more</span>
                <ArrowIcon direction={"down"}/>
            </HeroArrow>
		</BannerStyled>
	);
};

export default Banner;
