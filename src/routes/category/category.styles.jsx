import styled from 'styled-components';


export const CategoryTitle= styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: rgb(219, 210, 80);
`   


export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    padding-left: 5px;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
`
