export type ClickEvent = MouseEvent & {
	currentTarget: EventTarget & HTMLButtonElement;
};
