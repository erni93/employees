export interface Badge {
    text: string;
    class: BadgeCssClass;
}

export enum BadgeCssClass {
    DEFAULT = "badge-default",
    ORANGE = "badge-orange"
}
  
export const VIP_BADGE: Badge = {
    text: "VIP",
    class: BadgeCssClass.ORANGE
}
export const MARRIED_BADGE: Badge = {
    text: "Married",
    class: BadgeCssClass.DEFAULT
}
  