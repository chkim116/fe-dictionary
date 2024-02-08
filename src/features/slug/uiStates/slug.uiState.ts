export interface SlugMatterDataUiState {
  /**
   * 제목
   */
  title: string;
  /**
   * 작성일
   */
  date: string;
  /**
   * 문서의 컨트리뷰터
   */
  contributors: string[];
  /**
   * 연관 포스트
   */
  related: string[];
  /**
   * 카테고리
   */
  category: string;
}
