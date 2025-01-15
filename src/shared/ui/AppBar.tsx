import styled from 'styled-components';
import { HeaderAction } from '@shared/types';

interface AppBarProps {
  title?: string;
  leftHeaderAction: HeaderAction;
  rightHeaderActionArr?: HeaderAction[];
  isClear?: boolean;
}

const AppBar = ({ title, leftHeaderAction, rightHeaderActionArr, isClear }: AppBarProps) => {
  const { icon, onClick } = leftHeaderAction;

  return (
    <Wrapper isClear={isClear}>
      <img
        src={icon}
        onClick={onClick ? onClick : undefined}
        style={{ background: 'none' }}
        alt="left-icon"
      />
      <p>{title}</p>
      <div>
        {rightHeaderActionArr?.map((action, index) => (
          <img
            key={index}
            src={action.icon}
            onClick={action.onClick}
            style={{ background: 'none' }}
            alt="right-icon"
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default AppBar;

const Wrapper = styled.header<Pick<AppBarProps, 'isClear'>>`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  max-width: 440px;
  min-height: 5.4vh;
  align-items: center;
  padding: 12px 18px;
  background-color: ${({ isClear }) => (isClear ? 'transparent' : 'white')};

  img {
    flex-shrink: 0;
  }

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: black;
    font-size: 13px;
    margin: 0;
    text-align: center;
  }

  div {
    display: flex;
    gap: 24px;
  }
`;
