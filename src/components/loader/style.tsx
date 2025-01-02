import styled from "styled-components";

export const LoaderContainer = styled.div`
        width: 100%;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            font-size: 8rem;
            color: #d3d3d3;
            animation: rotateSpinner .5s infinite linear;

            @keyframes rotateSpinner {
                to{
                    transform: rotateZ(360deg);
                };
            };
        };
`;