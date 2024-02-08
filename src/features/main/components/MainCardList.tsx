import { MainGlossariesUiState } from '../uiStates/main.uiState';
import MainCard from './MainCard';

interface MainCardListProps {
  glossaries: MainGlossariesUiState[];
}

export default function MainCardList({ glossaries }: MainCardListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-1">
      {glossaries.map(({ glossary, spoiler, slugName }) => (
        <MainCard
          key={glossary}
          glossary={glossary}
          spoiler={spoiler}
          slugName={slugName}
        />
      ))}
    </div>
  );
}
