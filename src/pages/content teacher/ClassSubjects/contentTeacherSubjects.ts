type gallary = string[]
type colors = {
    colorRight_1: string
    colorRight_2: string
    colorLeft_1: string
    colorLeft_2: string
}

export class contentTeacherSubjects {
    private _title: string;
    private _icon: string;
    private _image: string;
    private _description: string;
    private _gallary: gallary;
    private _colors: colors

    constructor(title: string, icon: string, image: string, description: string, gallary: gallary, colors: colors) {
        this._title = title;
        this._icon = icon;
        this._image = image;
        this._description = description;
        this._gallary = gallary;
        this._colors = colors
    }

    get title(): string {
        return this._title;
    }

    get icon(): string {
        return this._icon;
    }

    get image(): string {
        return this._image;
    }

    get description(): string {
        return this._description;
    }

    get gallary(): gallary {
        return this._gallary;
    }

    get colors(): colors {
        return this._colors;
    }
}

export const contentTeacherObj = [
    new contentTeacherSubjects(
        'Robótica',
        'contentTeacher/Robotics/roboticsImageIcon.svg',
        'contentTeacher/Robotics/roboticsImage.png',
        `Robótica é a área da tecnologia que se ocupa com o projeto, construção, operação e uso de robôs, bem como sistemas de computador para seu controle, feedback sensorial e processamento de informações. Essas tecnologias são usadas para desenvolver máquinas que podem substituir as funções humanas ou aumentar as habilidades humanas. A robótica envolve uma variedade de campos, incluindo engenharia mecânica, engenharia elétrica e ciência da computação. A robótica pode ser usada em uma ampla gama de aplicações, como fabricação, transporte, agricultura, saúde e muito mais.`,
        [
            'contentTeacher/Robotics/roboticsGallary/image 1.png',
            'contentTeacher/Robotics/roboticsGallary/image 2.png',
            'contentTeacher/Robotics/roboticsGallary/image 3.png',
            'contentTeacher/Robotics/roboticsGallary/image 4.png',
            'contentTeacher/Robotics/roboticsGallary/image 5.png',
            'contentTeacher/Robotics/roboticsGallary/image 6.png',
            'contentTeacher/Robotics/roboticsGallary/image 7.png',
            'contentTeacher/Robotics/roboticsGallary/image 8.png',
            'contentTeacher/Robotics/roboticsGallary/image 9.png',
            'contentTeacher/Robotics/roboticsGallary/image 10.png',
            'contentTeacher/Robotics/roboticsGallary/image 11.png',
        ],
        {
            colorRight_1: '#5E5054',
            colorRight_2: '#B6424E',
            colorLeft_1: '#918575',
            colorLeft_2: '#4A7B7D',
        }
    ),
    new contentTeacherSubjects (
        'Excel',
        'contentTeacher/Excel/excelIcon.svg',
        'contentTeacher/Excel/ExcelImage.png',
        `Lorem ipsum dolor sit amet. Ut necessitatibus molestiae vel commodi officia vel vero consequatur et repellat deserunt aut repellat temporibus est molestiae praesentium. Ut fuga rerum et enim omnis ut dolore repudiandae. </p><p>Quo sint quia At laboriosam laudantium rem voluptatum galisum qui voluptas sint ut magnam voluptas rem accusantium omnis. Aut quae aspernatur ad sapiente quibusdam qui dolorem inventore sed odio illo qui consectetur nulla qui internos eius et natus enim? </p><p>Et officiis nesciunt sit dolores omnis vel dolore quia. Ea omnis aperiam est Quis aperiam vel consectetur voluptate aut doloribus internos et assumenda laborum et odit iusto.
        `,
        [],
        {
            colorRight_1: '#03733F',
            colorRight_2: '#365943',
            colorLeft_1: '#F2916D',
            colorLeft_2: '#BF4A3F',
        }
    )
    
] 
