import styled from "styled-components";

export const Main = styled.main`
padding: 10px 50px;
margin:0 auto;
margin-top: 50px;
width: 50%;
background-color: ${props => props.theme.colors.background};
box-shadow: 0px 5px 10px -4px #050505;
`;

export const Notification = styled.div`
color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSizes.ml1};
`;