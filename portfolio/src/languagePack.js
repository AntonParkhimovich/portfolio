export let languagePack={
    ru:{
        navigation:{
            home:'домой',
            about:'обо мне',
            portfolio:'портфолио',
            contact:'свяжитесь со мной'
        },
        helloSection:{
            title:'Привет!Меня зовут Антон Пархимович',
            subtitle:'Я начинающий Front-end разработчик'
        },
        about:{
            title:'Обо мне',
            description:'Меня зовут Антон, мне 24 года, проживаю в городе Минске. Мечтаю стать Full-stack разработчиком, поэтому начать решил с Frontend. Люблю созадавать красивые, и функциональные веб приложения.'
        },
        portfolio:{
            title: 'Мои проекты',
            youtube:{
                title:'Приложение по поиску видео на ютуб',
                description:"Приложение для поиска видео на ютубе, реализованное на  React, с использованием Youtube API, загрузка видео происходит асинхронно, каждый раз при переходе на новую страницу.Реализованно с использованием  react router, и redux"
            },
            weatheAppReact: {
                title:'Приложение погоды',
                description:'Приложение для просмотра погды, с импользованием стороннего API из дополнительного функционала возможность просмотра истории поиска, и определение погоды при помощи текущей геопозиции'
            },
            taxi:{
                title:"Лэндинг для подключения к Яндекс такси",
                description:"Лэндинг с возможностью расчета прибыли при работе с данным автопарком, и формой обратной связи, отправляющей данные в Телеграмм при помощи API телеграмма"
            }
        },
        contactMe:{
            title: 'Свяжитесь со мной',
            form:{
                name: 'Имя:',
                email:'Почта:',
                company:'Компания:',
                message:'Cooбщение:',
                submit:'Отправить'
            }
        }
    },
    en:{
        navigation:{
            home:'home',
            about:'about',
            portfolio:'portfolio',
            contact: 'contact me'
        },
        helloSection:{
            title:'Hi!My name is Anton Parkhimovich',
            subtitle: 'I`m Junior Front-end developer'
        },
        about:{
            title:'About',
            description:'My name is Anton, I am 24 years old, I live in the city of Minsk. My dream is to become a Full-stack developer, so I decided to start with Frontend. I love creating beautiful, functional web applications.'
        },
        portfolio:{
            title: 'Protfolio',
            youtube:{
                title: 'YouTube Video Search Application',
                description: "An application for finding videos on YouTube, implemented in React, using the Youtube API, the video is loaded asynchronously, every time you switch to a new page. Implemented using a react-router, and redux"
            },
            weatheAppReact: {
                title: 'Weather App',
                description: 'Application for viewing the weather, using a third-party API from additional functionality, the ability to view the search history, and determine the weather using the current geolocation'
            },
            taxi:{
                title: "Landing page for connecting to Yandex taxi",
                description: "Landing page with the ability to calculate profit when working with this fleet, and a feedback form that sends data to Telegram using the Telegram API"
            }
        },
        contactMe:{
            title: 'Contact Me',
            form:{
                name: 'Name:',
                email:'Email:',
                company:'Company:',
                message:'Message:',
                submit:'Send'
            }
        }

    }
}