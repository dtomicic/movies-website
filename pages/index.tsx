import Banner from "@/components/Banner";
import InputBox from "@/components/InputBox";

export default function Home() {
	return (
		<>
			<Banner />
			<InputBox type={"text"} placeholder={"Search for movie or a TV show"} />
		</>
	);
}
