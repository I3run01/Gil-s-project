import { useContext, useEffect, useState } from 'react'
import { AboutJob } from '../../components/Jobs/AboutJob'
import { WorksTypes } from '../../components/Jobs/worksTypes'
import { Gallary } from '../../components/Jobs/Gallary/'
import { ChangeWork } from '../../components/Jobs/changeWork'
import { MainStyled } from '../../globalStyled'
import { servicesObj } from './servicesClass/servicesClass'
import { Context } from '../../contexts/Context'

export const GilsServices = () => {
    const {state, dispatch} = useContext(Context)
    const [index, setIndex] = useState<number>(0)
    const [renderGallary, setRenderGallary] = useState<boolean>(
        servicesObj[index].gallary.length > 0 ? true : false
    )

    useEffect(() => {
        servicesObj[index].gallary.length > 0 ? setRenderGallary(true) : setRenderGallary(false)
        changeBkColor()
    }, [index])

    useEffect(() => {
        changeBkColor()
    },[])

    const changeWorkLeft = () => {
        index <= 0 ? setIndex(servicesObj.length-1) : setIndex(index - 1)
    }

    const changeWorkRight = () => {
        index >= servicesObj.length-1 ? setIndex(0) : setIndex(index + 1)
    }

    const changeBkColor = () => {

        dispatch({
            type: 'changerightColor_1',
            payload: {
                rightColor_1: servicesObj[index].colors.colorRight_1
            }
        })

        dispatch({
            type: 'changerightColor_2',
            payload: {
                rightColor_2: servicesObj[index].colors.colorRight_2
            }
        })

        dispatch({
            type: 'changeleftColor_1',
            payload: {
                leftColor_1: servicesObj[index].colors.colorLeft_1
            }
        })

        dispatch({
            type: 'changeleftColor_2',
            payload: {
                leftColor_2: servicesObj[index].colors.colorLeft_2
            }
        })





    }

    return (
        <div>
            <ChangeWork
                title={servicesObj[index].title}
                icon={servicesObj[index].icon}
                changeWorkLeft={changeWorkLeft}
                changeWorkRight={changeWorkRight}/>
            <MainStyled>
                <AboutJob
                    title='Prestadora de servi??os'
                    subtitile='O que faz um prestador de servi??os?'
                    description="Um prestador de servi??os ?? uma pessoa ou empresa que oferece um determinado tipo de servi??o para outras pessoas ou empresas. Este tipo de servi??o pode ser de qualquer natureza, incluindo servi??os financeiros, legais, cont??beis, de tecnologia, de sa??de, de transporte, de limpeza, entre outros.

                    Os prestadores de servi??os geralmente possuem habilidades e conhecimentos espec??ficos em seu campo de atua????o, e s??o respons??veis por fornecer esses servi??os de maneira eficiente e de acordo com as necessidades e expectativas dos seus clientes. Eles tamb??m podem ser respons??veis pela manuten????o de registros e documenta????o, bem como pela comunica????o com os clientes para garantir a satisfa????o e o sucesso do servi??o prestado."
                />
                <WorksTypes
                    title={servicesObj[index].title}
                    icon={servicesObj[index].icon}
                    image={servicesObj[index].image}
                    description={servicesObj[index].description}
                />

                { renderGallary &&
                    <Gallary
                        gallary={servicesObj[index].gallary}/>
                } 
            </MainStyled>
        </div>
    )
}