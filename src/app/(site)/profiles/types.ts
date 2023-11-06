export interface EventItem {
  id: string;
  count: number | null;
  value: number | null;
}

export interface EventCardItemRef {
  buttonRef: HTMLDivElement | null;
  currentRef: HTMLElement | null;
}
