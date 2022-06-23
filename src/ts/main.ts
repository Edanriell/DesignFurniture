import "../sass/style.scss";
import "swiper/css";

import Swiper, { Navigation, Pagination, Autoplay, Keyboard, FreeMode, Mousewheel } from "swiper";
import BurgerMenu from "./components/burgerMenu/burgerMenu";
import Tabs from "./components/tabs/tabs";
import Search from "./components/search/search";
import {
	heroSliderParams,
	offerSliderParamsFirst,
	offerSliderParamsSecond,
	offerSliderParamsThird,
	reviewsSliderParams
} from "./components/slider/sliderParams";

Swiper.use([Navigation, Pagination, Autoplay, Keyboard, FreeMode, Mousewheel]);

window.addEventListener("DOMContentLoaded", () => {
	const burgerMenu = new BurgerMenu({
		triggerSelector: ".MobileNavigationBurger",
		burgerMenuContentSelector: ".BurgerMenu",
		animateBurgerMenuLinks: true
	});
	const tabs = new Tabs({
		container: ".Tabs-Buttons",
		tabs: ".OfferSliderTab",
		dataAttribute: "data-target-tab",
		triggerActiveClass: "Tabs-Button_state_Active",
		initialActiveTab: "chairs"
	});
	const search = new Search({
		triggerButton: "[data-search]",
		searchWrapper: ".Search-Wrapper",
		searchContent: ".Search",
		searchItemsContent: ".Search-ItemsContent",
		closeSearchButton: ".Search-CloseButtonWrapper"
	});

	burgerMenu.init();
	tabs.init();
	search.init();
});

window.addEventListener("load", () => {
	const heroSlider = new Swiper(".HeroSlider", heroSliderParams);
	const offerSliderFirst = new Swiper(".OfferSlider-FirstSlider", offerSliderParamsFirst);
	const offerSliderSecond = new Swiper(".OfferSlider-SecondSlider", offerSliderParamsSecond);
	const offerSliderThird = new Swiper(".OfferSlider-ThirdSlider", offerSliderParamsThird);
	const reviewsSlider = new Swiper(".ReviewsSlider", reviewsSliderParams);

	heroSlider.init();
	offerSliderFirst.init();
	offerSliderSecond.init();
	offerSliderThird.init();
	reviewsSlider.init();
});
