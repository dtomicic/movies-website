import { ReactNode } from "react";
import Navigation from "../Navigation";

interface ILayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
};

export default Layout;
