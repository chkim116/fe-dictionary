/* eslint-disable @typescript-eslint/no-explicit-any */
import SlugHeader from '../components/SlugHeader';
import { SlugMatterDataUiState } from '../uiStates/slug.uiState';

interface SlugContainerProps {
  matterData: SlugMatterDataUiState;
}

export default function SlugContainer({ matterData }: SlugContainerProps) {
  return <SlugHeader {...matterData} />;
}
