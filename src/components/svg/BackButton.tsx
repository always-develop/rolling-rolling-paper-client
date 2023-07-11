import { useNavigate } from 'react-router-dom';
import SvgWrapper from './SvgWrapper';

export default function BackButton() {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }

  return (
    <SvgWrapper onButtonClick={back}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 19.0002H15.83L21.42 13.4102L20 12.0002L12 20.0002L20 28.0002L21.41 26.5902L15.83 21.0002H28V19.0002Z"
          fill="#202020"
        />
      </svg>
    </SvgWrapper>
  );
}
