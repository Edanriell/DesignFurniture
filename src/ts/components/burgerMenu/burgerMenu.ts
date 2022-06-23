import { gsap } from "gsap";

interface IBurgerMenu {
	trigger: HTMLElement | null;
	burgerMenuContent: HTMLElement | null;
	animateMenuLinks: true | false;
	openMenu(state: string): void;
	closeMenu(state: string): void;
}

export default class BurgerMenu implements IBurgerMenu {
	trigger: HTMLElement | null;

	burgerMenuContent: HTMLElement | null;

	animateMenuLinks: true | false;

	constructor({
		triggerSelector,
		burgerMenuContentSelector,
		animateBurgerMenuLinks
	}: {
		triggerSelector: string;
		burgerMenuContentSelector: string;
		animateBurgerMenuLinks: true | false;
	}) {
		this.trigger = document.querySelector(triggerSelector);
		this.burgerMenuContent = document.querySelector(burgerMenuContentSelector);
		this.animateMenuLinks = animateBurgerMenuLinks;
	}

	public init(): void {
		this.trigger?.addEventListener("click", event => {
			const menu: unknown = event.currentTarget;
			const menuState: string | null = (menu as HTMLElement).getAttribute("data-menu-open");

			switch (menuState) {
				case "false":
					this.openMenu(menuState);
					this.#animateMenuContent(this.animateMenuLinks);
					(menu as HTMLElement).setAttribute("data-menu-open", "true");
					break;
				case "true":
					this.closeMenu(menuState);
					(menu as HTMLElement).setAttribute("data-menu-open", "false");
					break;
				default:
					throw new Error("Unknown menu state, should be true or false.");
			}
		});
	}

	public openMenu(state: string): void {
		this.animateBurgerMenu(state);
		this.toggleBurgerMenu(state);
	}

	public closeMenu(state: string): void {
		this.animateBurgerMenu(state);
		this.toggleBurgerMenu(state);
	}

	private animateBurgerMenu(burgerMenuState: string): void {
		if (burgerMenuState === "false") {
			this.#closeBurgerMenuAnimation();
		} else {
			this.#openBurgerMenuAnimation();
		}
	}

	private toggleBurgerMenu(burgerMenuState: string): void {
		if (burgerMenuState === "false") {
			this.#showBurgerMenu(burgerMenuState);
		} else {
			this.#hideBurgerMenu(burgerMenuState);
		}
	}

	#closeBurgerMenuAnimation(): void {
		const [bar1, bar2, bar3] = this.trigger?.children as unknown as Array<HTMLElement>;

		gsap.fromTo(
			bar1,
			{ rotate: 0, translateY: 0, backgroundColor: "hsl(240deg, 2%, 20%)" },
			{
				rotate: 45,
				translateY: 8,
				duration: 0.6,
				backgroundColor: "hsl(0deg, 0%, 100%)",
				ease: "power4.out"
			}
		);
		gsap.fromTo(
			bar2,
			{ opacity: 1, scale: 1, backgroundColor: "hsl(240deg, 2%, 20%)" },
			{
				opacity: 0,
				scale: 0,
				duration: 0.6,
				backgroundColor: "hsl(0deg, 0%, 100%)",
				ease: "power4.out"
			}
		);
		gsap.fromTo(
			bar3,
			{ rotate: 0, translateY: 0, backgroundColor: "hsl(240deg, 2%, 20%)" },
			{
				rotate: -45,
				translateY: -8,
				duration: 0.6,
				backgroundColor: "hsl(0deg, 0%, 100%)",
				ease: "power4.out"
			}
		);
	}

	#openBurgerMenuAnimation(): void {
		const [bar1, bar2, bar3] = this.trigger?.children as unknown as Array<HTMLElement>;

		gsap.fromTo(
			bar1,
			{ rotate: 45, translateY: 8, backgroundColor: "hsl(0deg, 0%, 100%)" },
			{
				rotate: 0,
				translateY: 0,
				duration: 0.6,
				backgroundColor: "hsl(240deg, 2%, 20%)",
				ease: "power4.out"
			}
		);
		gsap.fromTo(
			bar2,
			{ opacity: 0, scale: 0, backgroundColor: "hsl(0deg, 0%, 100%)" },
			{
				opacity: 1,
				scale: 1,
				duration: 0.6,
				backgroundColor: "hsl(240deg, 2%, 20%)",
				ease: "power4.out"
			}
		);
		gsap.fromTo(
			bar3,
			{ rotate: -45, translateY: -8, backgroundColor: "hsl(0deg, 0%, 100%)" },
			{
				rotate: 0,
				translateY: 0,
				duration: 0.6,
				backgroundColor: "hsl(240deg, 2%, 20%)",
				ease: "power4.out"
			}
		);
	}

	#showBurgerMenu(state: string): void {
		gsap.fromTo(
			this.burgerMenuContent,
			{ display: "none", translateX: "100vw" },
			{
				display: "block",
				translateX: 0,
				duration: 0.6,
				ease: "power4.out",
				onStart: () => {
					this.#toggleBodyOverflow(state);
				}
			}
		);
	}

	#hideBurgerMenu(state: string): void {
		gsap.fromTo(
			this.burgerMenuContent,
			{ display: "block", translateX: 0 },
			{
				display: "none",
				translateX: "100vw",
				duration: 0.6,
				ease: "power4.out",
				onComplete: () => {
					this.#toggleBodyOverflow(state);
				}
			}
		);
	}

	#toggleBodyOverflow(burgerMenuState: string): void {
		const body = document.querySelector("body");

		if (burgerMenuState === "false") {
			(body as HTMLElement).style.cssText = `
				overflow: hidden
			`;
		} else {
			(body as HTMLElement).style.cssText = `
				overflow: auto
			`;
		}
	}

	#animateMenuContent(animateLinks: true | false): void {
		if (animateLinks) this.#showMenuContent();
	}

	#showMenuContent(): void {
		const menuLinks = document.querySelectorAll(".BurgerMenuNavigation-Item");

		gsap.fromTo(
			menuLinks,
			{ opacity: 0, translateX: 50 },
			{ opacity: 1, translateX: 0, duration: 1, ease: "power4.out", stagger: 0.2 }
		);
	}
}
