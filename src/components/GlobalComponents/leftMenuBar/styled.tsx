import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const widthMenu = '250px'
const fontColorDark = '#d2d2d2'
const fontColorLight = 'black'
const lightPurpleColor = '#590099'
const darkPurpleColor = '#CFBDDB'




export const LeftMenuBarStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    #burguerMenu {
        transform: scale(80%);
    }

    .container {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        box-shadow: 1px 1px 1px black;
        width: ${widthMenu};
        transition: all 0.5s ease-in-out;

        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border-right: 1px solid rgba(255, 255, 255, 0.34);

        #AboutIcon, #workIcon, #themeIcon {

            overflow: hidden;
            
            div {
                width: ${widthMenu};
                display: flex;
                justify-content: space-between;

                margin-bottom:20px;
                margin-top:20px;

                position: relative;
                text-decoration: none;

                ::after {
                        content: "";
                        position: absolute;
                        left: 50%;
                        right: 50%;
                        bottom: -8px;
                        border: 2px solid ${props => props.theme === 'dark' ? darkPurpleColor : lightPurpleColor};
                        transition: .5s;
                        opacity: 0;
                    }

                :hover::after {
                    left: 32%;
                    right: 32%;
                    opacity: 100%;
                }

                :hover {
                    cursor: pointer;
                    

                    img {
                        filter: ${props => props.theme === 'dark' ?
                        'saturate(5%) brightness(620%)':
                        'saturate(100%)'
                        };
                    }  
                    
                    h2 {
                        color: ${props => props.theme === 'dark' ? darkPurpleColor : lightPurpleColor};
                        
                    }

                }
                    
            }

            img {
                margin-left: 20px;
                width: 40px;
                filter: brightness(0) invert(${props => props.theme === 'dark' ? 1 : 0});  
            }

            h2 {
                margin-right: 20px;
                font-family: 'dosis';
                font-size: 24px;
                color: ${props => props.theme === 'dark' ? fontColorDark : fontColorLight};
                text-align: right;
            }
        } 


        #AboutIcon {
            height: 15%;

            

        }

        #workIcon {
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;

        }

        #themeIcon {
            height: 15%;
            
        }
    }

    //animation
    .closed {
        width: 0px;
        border-right: 0px;
    }

    @media screen and (min-width: 1000px){

        //animation
        .closed {
            width: 80px;
            border-right: 0px;
        }
        
    }
`