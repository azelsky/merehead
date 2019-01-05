import styled from "styled-components";

export const LoaderWrapper = styled.div`
    position: absolute;
    top: calc(50% - 40px);
    right: calc(50% - 40px);
`;

export const PaginationWrapper = styled.div`
    display: block;
`;

export const PaginationItem = styled.div`
    display: inline-block;
    border: 1px #888 solid;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;    
    margin-right: -1px;
    background-color: ${props => props.active && '#888'};
`;