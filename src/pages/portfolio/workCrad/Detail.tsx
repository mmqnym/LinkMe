import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function Detail() {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	return (
		<div className="w-full h-full col-span-2 col-start-5 row-span-5 border border-gray-700 row-start-8 rounded-2xl bg-gray-700/30">
			<p className="px-4 py-1 m-2 text-xl tracking-wide text-gray-200 select-none h-fit w-fit rounded-xl bg-purple-400/50 font-ubuntu">
				Detail
			</p>
			<p
				className={`mt-4 h-4/5 w-full overflow-y-auto whitespace-pre-line px-6 pb-5 font-ubuntu text-lg ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-200/30" : "text-gray-200"} transition-all duration-300 scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full`}
			>
				{workCardContext.workCardData.detail}
			</p>
		</div>
	);
}

export default Detail;
