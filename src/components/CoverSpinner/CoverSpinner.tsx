import { MoonLoader } from 'react-spinners';
import { Background } from './CoverSpinner.styles';

export function CoverSpinner() {
  return (
    <Background>
      <MoonLoader
        size={150}
        color='var(--maincolor)'
      />
    </Background>
  );
}
