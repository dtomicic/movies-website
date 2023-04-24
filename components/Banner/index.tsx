import Image from "next/image";
import { BannerStyled } from "./style";

const Banner = () => {
	return (
        <BannerStyled>
            <Image src="/images/hero.jpg" alt="hero" width={4740} height={3164} loading="eager" />
        </BannerStyled>
    );
};

export default Banner;
