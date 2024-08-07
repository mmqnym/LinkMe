import MobileNameSwitcher from "../nameSwitcher/MobileNameSwitcher";
import MobildSocialList from "../socialList/MobildSocialList";

function MobileInfoCardProfile() {
	return (
		<div className="flex flex-col items-start">
			<MobileNameSwitcher />
			<p className="text-xl tracking-wide transition-colors duration-500 font-ubuntu text-amber-900/70 dark:text-purple-400/70">
				Backend Engineer |
			</p>
			<MobildSocialList />
		</div>
	);
}

export default MobileInfoCardProfile;
