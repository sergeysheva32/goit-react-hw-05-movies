import styled from '@emotion/styled';
import {
  secondTextColor,
  secondBgColor,
} from 'utilities/variables/css';

export const FooterWrapper = styled.footer`
  background-color: ${secondBgColor};
  color: ${secondTextColor};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  font-size: 15px;
  font-weight: 700;
  padding-left: 40px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

