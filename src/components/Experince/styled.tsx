import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const fontColorDark = 'white'
const fontColorLight = 'black'

export const ExperienceStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    min-height: 100vh;

    h1 {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
    }

    #container {
        width: 100%;

        .subcontainer {
            margin-top: 20px;
            padding-top: 20px;
            width: 100%;

            box-sizing: border-box;
            background: linear-gradient(179.21deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
            box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(20px);
            /* Note: backdrop-filter has minimal browser support */
            border-radius: 20px;

            .business {
                display: flex;
                justify-content: space-around;
                width: 95%;
                margin: auto;

                background: linear-gradient(179.21deg, rgba(157, 155, 155, 0.4) 0%, rgba(85, 85, 85, 0.1) 100%);
                box-shadow: 0px 4.6281px 27.7686px -1.15702px rgba(0, 0, 0, 0.25);
                backdrop-filter: blur(23.1405px);
                border: 3px solid black;
                border-radius: 40px;
                
                .photo {
                    width: 56px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 5px;

                    img {
                        width: 100%;
                    }
                }

                .text {
                    h3 {
                        margin: 0;
                        font-family: 'Dosis';
                        font-style: normal;
                        font-weight: 700;
                        font-size: px;
                        line-height: 30px;

                        text-align: center;
                        color: black;
                    }

                    h4 {
                        margin: 0;
                        font-family: 'Dosis';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        color: black;

                        padding: 5px;
                    }
                }


            }

            h2 {
                font-family: 'Dosis';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 23px;
                padding-left: 10px;

                color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
            }

            .describe {
                position: relative;
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;
                display: flex;
                align-items: center;
                padding: 10px;
                padding-left: 40px;

                color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};

                display: flex;
                flex-direction: row;
                align-items: flex-start;
            }
        }
    }

    @media screen and (min-width: 550px) {
        #container > .subcontainer {

            .business {
                width: 65%;
                padding: 20px;
                margin-left: 10px;
                border-radius: 80px;
                justify-content: space-between;
    
                .photo {
                    width: 120px;
                }
        
                .text {
                    margin-left: 80px;
                    
                    h3 {
                        margin-top: 20px;
                        font-size: 24px;
                    }
        
                    h4 {
                        margin-top: 20px;
                        font-size: 18px;
                    }
                }
            }

        }

    }
    
`