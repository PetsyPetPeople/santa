export interface EventItem {
  id: string;
  count: number | null;
  value: number | null;
  status: 'hot' | 'cold' | null;
}

export interface EventCardItemRef {
  buttonRef: HTMLDivElement | null;
  currentRef: HTMLElement | null;
}
