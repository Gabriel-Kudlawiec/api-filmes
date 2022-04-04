import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    div {
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        max-width: 50%;
        justify-content: center;
        align-items: flex-start;
    }

 

    p {
        margin-bottom: 1rem ;
        text-align: justify;
        font-size: 110%;
        line-height: 130%;
    }
    
    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover {
        background-color: #5848c2;
    }

    span {
        opacity: 0.5;
    }
`