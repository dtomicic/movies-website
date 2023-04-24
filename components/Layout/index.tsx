import { ReactNode } from "react";
import Navigation from "../Navigation";

interface ILayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<Navigation />
			<main>{children}</main>
		</>
	);
};

export default Layout;
