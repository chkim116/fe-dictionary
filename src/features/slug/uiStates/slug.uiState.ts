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
   *
   * 현재 미사용 - 24.05.26
   * 추후 컨트리뷰터를 표시하기 위해 사용 예정
   */
  contributors: string[];
  /**
   * 연관 포스트
   */
  related: string[];
  /**
   * 카테고리
   *
   * 현재 미사용 - 24.05.26
   * 추후 FE, CS, BE 등 영역을 구분하기 위해 사용 에정
   */
  category: string;
}
