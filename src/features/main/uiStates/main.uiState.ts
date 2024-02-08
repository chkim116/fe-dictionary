export interface MainGlossariesUiState {
  /**
   * folder 이름
   */
  slugName: string;
  /**
   * 미리보기 요약 문구
   */
  spoiler: string;
  /**
   * 용어 이름
   */
  glossary: string;
}

export type MainCardTabsKey = '0' | '1' | '2' | '3' | '4';

export interface MainGlossariesSearchUiParams {
  keyword: string;
  tabKey: MainCardTabsKey;
}
