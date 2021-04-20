export interface Styles {
  'pageLoading': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
