import { Swiper } from "swiper";
import { SwiperEvents } from "swiper/types/swiper-events";
import { gsap } from "gsap";

const showHeroSlideIndex = ({
	swiper,
	on
}: {
	swiper: Swiper;
	on<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void;
}): void => {
	const sliderSlides = document.querySelectorAll(".HeroSlider-Slide");
	const totalSlidesIndex = document.querySelector(".HeroSlider-TotalSlides");
	const currentSlideIndex = document.querySelector(".HeroSlider-CurrentSlide");

	on("slideChange", (): void => {
		if (totalSlidesIndex) {
			totalSlidesIndex.innerHTML = `0${sliderSlides.length}`;
		}

		if (currentSlideIndex) {
			currentSlideIndex.innerHTML = `0${swiper.activeIndex + 1}`;
		}
	});
};

const showOfferSlideIndexFirst = ({
	swiper,
	on
}: {
	swiper: Swiper;
	on<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void;
}): void => {
	const sliderSlides = document.querySelectorAll(".OfferFirst");
	const totalSlidesIndex = document.querySelector(".OfferSlider-PaginationLastSlideNumberFirst");
	const currentSlideIndex = document.querySelector(
		".OfferSlider-PaginationFirstSlideNumberFirst"
	);

	function addZero(index: number): string {
		const oldIndex = index.toString().split("");
		let newIndex = "";
		if (oldIndex.length > 1) {
			newIndex = oldIndex.join("");
		} else if (oldIndex.length <= 1) {
			newIndex = `0${oldIndex.join("")}`;
		}
		return newIndex;
	}

	on("init", (): void => {
		if (totalSlidesIndex) {
			totalSlidesIndex.innerHTML = `${addZero(sliderSlides.length)}`;
		}

		if (currentSlideIndex) {
			currentSlideIndex.innerHTML = `${addZero(swiper.activeIndex + 1)}`;
		}
	});

	on("slideChange", (): void => {
		if (totalSlidesIndex) {
			totalSlidesIndex.innerHTML = `${addZero(sliderSlides.length)}`;
		}

		if (currentSlideIndex) {
			currentSlideIndex.innerHTML = `${addZero(swiper.activeIndex + 1)}`;
		}
	});
};

const showOfferSlideIndexSecond = ({
	swiper,
	on
}: {
	swiper: Swiper;
	on<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void;
}): void => {
	const sliderSlides = document.querySelectorAll(".OfferSecond");
	const totalSlidesIndex = document.querySelector(".OfferSlider-PaginationLastSlideNumberSecond");
	const currentSlideIndex = document.querySelector(
		".OfferSlider-PaginationFirstSlideNumberSecond"
	);

	function addZero(index: number): string {
		const oldIndex = index.toString().split("");
		let newIndex = "";
		if (oldIndex.length > 1) {
			newIndex = oldIndex.join("");
		} else if (oldIndex.length <= 1) {
			newIndex = `0${oldIndex.join("")}`;
		}
		return newIndex;
	}

	on("init", (): void => {
		if (totalSlidesIndex) {
			totalSlidesIndex.innerHTML = `${addZero(sliderSlides.length)}`;
		}

		if (currentSlideIndex) {
			currentSlideIndex.innerHTML = `${addZero(swiper.activeIndex + 1)}`;
		}
	});

	on("slideChange", (): void => {
		if (totalSlidesIndex) {
			totalSlidesIndex.innerHTML = `${addZero(sliderSlides.length)}`;
		}

		if (currentSlideIndex) {
			currentSlideIndex.innerHTML = `${addZero(swiper.activeIndex + 1)}`;
		}
	});
};

const showOfferSlideIndexThird = ({
	swiper,
	on
}: {
	swiper: Swiper;
	on<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void;
}): void => {
	const sliderSlides = document.querySelectorAll(".OfferThird");
	const totalSlidesIndex = document.querySelector(".OfferSlider-PaginationLastSlideNumberThird");
	const currentSlideIndex = document.querySelector(
		".OfferSlider-PaginationFirstSlideNumberThird"
	);

	function addZero(index: number): string {
		const oldIndex = index.toString().split("");
		let newIndex = "";
		if (oldIndex.length > 1) {
			newIndex = oldIndex.join("");
		} else if (oldIndex.length <= 1) {
			newIndex = `0${oldIndex.join("")}`;
		}
		return newIndex;
	}

	on("init", (): void => {
		if (totalSlidesIndex) {
			totalSlidesIndex.innerHTML = `${addZero(sliderSlides.length)}`;
		}

		if (currentSlideIndex) {
			currentSlideIndex.innerHTML = `${addZero(swiper.activeIndex + 1)}`;
		}
	});

	on("slideChange", (): void => {
		if (totalSlidesIndex) {
			totalSlidesIndex.innerHTML = `${addZero(sliderSlides.length)}`;
		}

		if (currentSlideIndex) {
			currentSlideIndex.innerHTML = `${addZero(swiper.activeIndex + 1)}`;
		}
	});
};

const switchSlideContent = ({
	swiper,
	on
}: {
	swiper: Swiper;
	on<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void;
}): void => {
	const sliderContent = [...document.querySelectorAll(".HeroSlider-SlideContent")];
	const slider = document.querySelector(".HeroSlider");
	let previousActiveContent: Element;
	let currentActiveContent: Element;

	on("slideChange", (): void => {
		function findUnactiveContent(): Element | undefined {
			for (const content of sliderContent) {
				if (content.classList.contains("HeroSlider-SlideContentActive")) {
					previousActiveContent = content;
					return previousActiveContent;
				}
			}
		}

		function findCurrentActiveContent(activeSlideIndex: number): Element[] {
			const activeContent = sliderContent?.filter(content => {
				return content.getAttribute("data-slider-slide") === `${activeSlideIndex + 1}`;
			});

			[currentActiveContent] = activeContent;
			return activeContent;
		}

		function showContentAnimation(element: Element): void {
			gsap.fromTo(
				element,
				{ opacity: 0, display: "none", translateY: -10 },
				{ opacity: 1, display: "block", translateY: 0, duration: 0.6, ease: "power2.out" }
			);
		}

		function hideContentAnimation(element: Element): void {
			gsap.fromTo(
				element,
				{ opacity: 1, display: "block", translateY: 0 },
				{ opacity: 0, display: "none", translateY: -10, duration: 0.6, ease: "power2.out" }
			);
		}

		function addActiveClass(element: Element): void {
			element.classList.add("HeroSlider-SlideContentActive");

			showContentAnimation(element);
		}

		function removeActiveClass(element: Element): void {
			element.classList.remove("HeroSlider-SlideContentActive");

			hideContentAnimation(element);
		}

		function temporaryDisableSlider(milliseconds: number): void {
			if (slider) {
				(slider as HTMLElement).style.cssText = `
					pointer-events: none;
				`;
				setTimeout(() => {
					(slider as HTMLElement).style.cssText = `
					pointer-events: auto;
				`;
				}, milliseconds);
			}
		}

		findUnactiveContent();
		removeActiveClass(previousActiveContent);
		setTimeout(() => {
			findCurrentActiveContent(swiper.activeIndex);
			addActiveClass(currentActiveContent);
		}, 600);
		temporaryDisableSlider(600);
	});
};

const heroSliderPagination = ({
	swiper,
	on
}: {
	swiper: Swiper;
	on<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void;
}): void => {
	const paginationContainer = document.querySelector(".HeroSlider-Pagination");

	on("init", (): void => {
		let initialActiveBullet: number | null = 0;
		const activeBulletClass = "HeroSlider-PaginationButton_status_active";

		for (let i = 1; i <= swiper.slides.length; i++) {
			const pagination = document.createElement("li");
			pagination.classList.add("HeroSlider-PaginationItem");
			pagination.innerHTML = `
			<button class="HeroSlider-PaginationButton" type="button" data-slide=${i}>
				<span class="HeroSlider-PaginationNumber">0${i}</span>
				<span class="VisuallyHidden">Слайд номер ${i}</span>
			</button>
			`;
			paginationContainer?.append(pagination);
		}

		const paginationItem = document.querySelectorAll(".HeroSlider-PaginationItem");

		const disableTriggers = (triggers: NodeListOf<Element>): void => {
			triggers.forEach(trigger => {
				(trigger as HTMLElement).style.cssText = `
					pointer-events: none;
				`;
				setTimeout(() => {
					(trigger as HTMLElement).style.cssText = `
						pointer-events: auto;
					`;
				}, 600);
			});
		};

		function addBulletsInteractivity(): void {
			const patgination = document.querySelectorAll(".HeroSlider-PaginationButton");

			const switchSlide = (trigger: EventTarget | null) => {
				const targetSlide = (trigger as HTMLElement).getAttribute("data-slide");
				if (targetSlide) {
					swiper.slideTo(+targetSlide - 1);
				}
			};

			patgination?.forEach(bullet => {
				bullet.addEventListener("click", event => {
					switchSlide(event.target);
					disableTriggers(patgination);
				});
			});
		}

		function addInitialActiveBulletClass(
			bulletClass: string,
			initialBullet: number | null
		): void {
			let bullet: Element | null = null;
			if (initialBullet === 0) {
				initialActiveBullet = null;
				[bullet] = paginationItem[initialBullet].children;
			}
			(bullet as unknown as HTMLElement).classList.add(bulletClass);
		}

		addBulletsInteractivity();
		addInitialActiveBulletClass(activeBulletClass, initialActiveBullet);
	});

	on("slideChange", (): void => {
		const pagination = document.querySelectorAll(".HeroSlider-PaginationItem");
		const activeBulletClass = "HeroSlider-PaginationButton_status_active";

		function addActiveClass(bulletClass: string): void {
			const [bullet] = pagination[swiper.activeIndex].children;
			(bullet as unknown as HTMLElement).classList.add(bulletClass);
		}

		function removeActiveClass(parentElement: NodeListOf<Element>, bulletClass: string): void {
			parentElement.forEach(bullet => {
				if (bullet.children[0].classList.contains(bulletClass)) {
					bullet.children[0].classList.remove(bulletClass);
				}
			});
		}

		removeActiveClass(pagination, activeBulletClass);
		addActiveClass(activeBulletClass);
	});
};
const disableNavigation = ({
	swiper,
	on
}: {
	swiper: Swiper;
	on<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void;
}): void => {
	const buttonNext = document.querySelector(".ReviewsSlider-ButtonNext");
	const buttonPrev = document.querySelector(".ReviewsSlider-ButtonPrev");
	const disableClass = "ReviewsSlider-ButtonDisabled";
	const totalSlides = document.querySelectorAll(".ReviewsSlider-Slide").length;

	on("init", (): void => {
		if (!buttonNext?.classList.contains(disableClass) && swiper.activeIndex === 0) {
			buttonPrev?.classList.add(disableClass);
		}
	});

	on("slideChange", (): void => {
		if (buttonNext?.classList.contains(disableClass) && swiper.activeIndex < totalSlides - 1) {
			buttonNext?.classList.remove(disableClass);
		} else if (buttonPrev?.classList.contains(disableClass) && swiper.activeIndex > 0) {
			buttonPrev?.classList.remove(disableClass);
		}
	});

	on("reachEnd", (): void => {
		buttonNext?.classList.add(disableClass);
	});

	on("reachBeginning", (): void => {
		buttonPrev?.classList.add(disableClass);
	});
};

export {
	showHeroSlideIndex,
	showOfferSlideIndexFirst,
	showOfferSlideIndexSecond,
	showOfferSlideIndexThird,
	switchSlideContent,
	heroSliderPagination,
	disableNavigation
};
