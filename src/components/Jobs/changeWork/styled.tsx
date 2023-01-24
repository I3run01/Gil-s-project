import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = '#d2d2d2'
const fontColorLight = 'black'

export const ChangeWorkStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    #showWork {
        position: fixed;
        bottom: 20px;
        left: 20px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        background: linear-gradient(179.21deg, rgba(157, 155, 155, 0.1) 0%, rgba(85, 85, 85, 0.5) 100%);
        box-shadow: 0px 4.6281px 27.7686px -1.15702px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(23.1405px);
        border: 3px solid black;
        border-radius: 40px;

        #symble {
            width: 56px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 5px;


            img {
                width: 100%;
            }
        }

        #nameOfwork {
            padding-left: 20px;

            font-family: 'Dosis';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;

            color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
        }
    }

    
`