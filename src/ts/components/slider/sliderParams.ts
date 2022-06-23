import { SwiperOptions } from "swiper";
import {
	showHeroSlideIndex,
	showOfferSlideIndexFirst,
	showOfferSlideIndexSecond,
	showOfferSlideIndexThird,
	switchSlideContent,
	heroSliderPagination,
	disableNavigation
} from "./sliderHelpers";

const heroSliderParams: SwiperOptions = {
	modules: [showHeroSlideIndex, switchSlideContent, heroSliderPagination],
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 80,
	loop: false,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	pagination: {
		el: ".HeroSlider-PaginationProgressBar",
		type: "progressbar",
		progressbarFillClass: "HeroSlider-PaginationProgressBar_fillColor_dark"
	},
	keyboard: {
		enabled: false
	},
	grabCursor: true,
	breakpoints: {
		768: {
			direction: "horizontal"
		}
	}
};

const offerSliderParamsFirst: SwiperOptions = {
	modules: [showOfferSlideIndexFirst],
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 80,
	loop: false,
	autoplay: {
		delay: 60000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	pagination: {
		el: ".OfferSlider-PaginationProgressBar",
		type: "progressbar",
		progressbarFillClass: "OfferSlider-PaginationProgressBar_fillColor_dark"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: false,
	breakpoints: {
		940: {
			slidesPerView: 2,
			centeredSlides: false,
			spaceBetween: 40,
			grabCursor: true
		},
		1350: {
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 40,
			grabCursor: true
		},
		1440: {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 30,
			grabCursor: true
		},
		1445: {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 34,
			grabCursor: true
		}
	},
	mousewheel: true
};

const offerSliderParamsSecond: SwiperOptions = {
	modules: [showOfferSlideIndexSecond],
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 80,
	loop: false,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	pagination: {
		el: ".OfferSlider-PaginationProgressBarSecond",
		type: "progressbar",
		progressbarFillClass: "OfferSlider-PaginationProgressBar_fillColor_dark"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: false,
	breakpoints: {
		940: {
			slidesPerView: 2,
			centeredSlides: false,
			spaceBetween: 40,
			grabCursor: true
		},
		1350: {
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 40,
			grabCursor: true
		},
		1440: {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 30,
			grabCursor: true
		},
		1445: {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 34,
			grabCursor: true
		}
	},
	mousewheel: true
};

const offerSliderParamsThird: SwiperOptions = {
	modules: [showOfferSlideIndexThird],
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 80,
	loop: false,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	pagination: {
		el: ".OfferSlider-PaginationProgressBarThird",
		type: "progressbar",
		progressbarFillClass: "OfferSlider-PaginationProgressBar_fillColor_dark"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: false,
	breakpoints: {
		940: {
			slidesPerView: 2,
			centeredSlides: false,
			spaceBetween: 40,
			grabCursor: true
		},
		1350: {
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 40,
			grabCursor: true
		},
		1440: {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 30,
			grabCursor: true
		},
		1445: {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 34,
			grabCursor: true
		}
	},
	mousewheel: true
};

const reviewsSliderParams: SwiperOptions = {
	modules: [disableNavigation],
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 80,
	loop: false,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	grabCursor: true,
	navigation: {
		nextEl: ".ReviewsSlider-ButtonNext",
		prevEl: ".ReviewsSlider-ButtonPrev"
	},
	pagination: {
		el: ".ReviewsSlider-Pagination",
		clickable: true,
		bulletActiveClass: "ReviewsSlider-PaginationButton_status_active",
		renderBullet: (index, className) => {
			return `
			<li class="ReviewsSlider-PaginationDot ${className}">
			<button
				class="ReviewsSlider-PaginationButton"
				type="button"
			>
				<span class="VisuallyHidden">Отзыв нр. ${index}</span>
			</button>
			</li>
		`;
		}
	}
};

export {
	heroSliderParams,
	offerSliderParamsFirst,
	offerSliderParamsSecond,
	offerSliderParamsThird,
	reviewsSliderParams
};
