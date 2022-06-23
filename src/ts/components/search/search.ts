import { gsap } from "gsap";

interface ISearch {
	trigger: TElement;
	wrapper: TElement;
	search: TElement;
	itemsContent: TElement;
	closeButton: TElement;
	init(): void;
}

type TSearchState = "show" | "hide";

type TTimeline = gsap.core.Timeline;

type TElement = HTMLElement | null;

export default class Search implements ISearch {
	public trigger: TElement;

	public wrapper: TElement;

	public search: TElement;

	public itemsContent: TElement;

	public closeButton: TElement;

	private timeLine: TTimeline = gsap.timeline({ duration: 0.05 });

	private searchState: TSearchState = "hide";

	constructor({
		triggerButton,
		searchWrapper,
		searchContent,
		searchItemsContent,
		closeSearchButton
	}: {
		triggerButton: string;
		searchWrapper: string;
		searchContent: string;
		searchItemsContent: string;
		closeSearchButton: string;
	}) {
		this.trigger = document.querySelector(triggerButton);
		this.wrapper = document.querySelector(searchWrapper);
		this.search = document.querySelector(searchContent);
		this.itemsContent = document.querySelector(searchItemsContent);
		this.closeButton = document.querySelector(closeSearchButton);
	}

	public init(): void {
		this.trigger?.addEventListener("click", () => {
			this.searchState = "show";
			this.showSearch(this.wrapper, this.search, this.itemsContent, this.closeButton);
		});
		this.closeButton?.addEventListener("click", () => {
			this.searchState = "hide";
			this.hideSearch(this.wrapper, this.search, this.itemsContent, this.closeButton);
		});
	}

	private showSearch(
		wrapper: TElement,
		search: TElement,
		itemsContent: TElement,
		closeButton: TElement
	): void {
		this.#animateWrapper(wrapper, this.searchState);
		this.#animateSearch(search, this.searchState);
		this.#animateItemsContent(itemsContent, this.searchState);
		this.#animateCloseButton(closeButton, this.searchState);
	}

	private hideSearch(
		wrapper: TElement,
		search: TElement,
		itemsContent: TElement,
		closeButton: TElement
	): void {
		this.#animateCloseButton(closeButton, this.searchState);
		this.#animateItemsContent(itemsContent, this.searchState);
		this.#animateSearch(search, this.searchState);
		this.#animateWrapper(wrapper, this.searchState);
	}

	#animateWrapper(element: TElement, state: string): void {
		switch (state) {
			case "show":
				this.timeLine.fromTo(
					element,
					{ display: "none", opacity: 0 },
					{ opacity: 1, display: "block", duration: 0.6, ease: "power2.out" }
				);
				break;
			case "hide":
				this.timeLine.fromTo(
					element,
					{ display: "block", opacity: 1 },
					{ opacity: 0, display: "none", duration: 0.6, ease: "power2.out" }
				);
				break;
			default:
				throw new Error(`Unkown search state ${state}. Expected to be "show" or "hide`);
		}
	}

	#animateSearch(element: TElement, state: string): void {
		switch (state) {
			case "show":
				this.timeLine.fromTo(
					element,
					{ display: "none", opacity: 0, translateY: -50 },
					{
						opacity: 1,
						display: "block",
						translateY: 0,
						duration: 0.6,
						ease: "power2.out"
					}
				);
				break;
			case "hide":
				this.timeLine.fromTo(
					element,
					{ display: "block", opacity: 1, translateY: 0 },
					{
						opacity: 0,
						display: "none",
						translateY: -50,
						duration: 0.6,
						ease: "power2.out"
					}
				);
				break;
			default:
				throw new Error(`Unkown search state ${state}. Expected to be "show" or "hide`);
		}
	}

	#animateItemsContent(element: TElement, state: string): void {
		switch (state) {
			case "show":
				this.timeLine.fromTo(
					element,
					{ display: "none", opacity: 0, translateY: 50 },
					{
						opacity: 1,
						display: "block",
						translateY: 0,
						duration: 0.6,
						ease: "power2.out"
					}
				);
				break;
			case "hide":
				this.timeLine.fromTo(
					element,
					{ display: "block", opacity: 1, translateY: 0 },
					{
						opacity: 0,
						display: "none",
						translateY: 50,
						duration: 0.6,
						ease: "power2.out"
					}
				);
				break;
			default:
				throw new Error(`Unkown search state ${state}. Expected to be "show" or "hide`);
		}
	}

	#animateCloseButton(element: TElement, state: string): void {
		switch (state) {
			case "show":
				this.timeLine.fromTo(
					element,
					{ display: "none", opacity: 0 },
					{ opacity: 1, display: "block", duration: 0.6, ease: "power2.out" }
				);
				break;
			case "hide":
				this.timeLine.fromTo(
					element,
					{ display: "block", opacity: 1 },
					{ opacity: 0, display: "none", duration: 0.6, ease: "power2.out" }
				);
				break;
			default:
				throw new Error(`Unkown search state ${state}. Expected to be "show" or "hide`);
		}
	}
}
