import Link from "next/link";
import Image from "next/image";
import { NavigationStyled } from "./style";

const Navigation = () => {
    return (
        <NavigationStyled>
            <Link href={"/"}>
                <Image src={"/images/logo.svg"} width={40} height={40} alt="Movies website logo" />
            </Link>
        </NavigationStyled>
    );
};

export default Navigation;