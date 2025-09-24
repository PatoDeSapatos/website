import "./landing-page.css";

function LandingPage() {
    return(
        <>
            <div id='fb-root'></div>
            <video autoPlay loop id='bg_video'>
            <source src='img/content/cover_video.mp4' type='video/mp4'></source>
            </video>

            <div id='header'>

            <img id='header_logo' src='./img/header_logo.png'></img>
            <div className='nav_links'>
                <a href='#about'>Sobre</a>
                <a href='#projects'>Projetos</a>
                <a href='#wiki'>Wiki</a>
                <a href='#media'>Notícias</a>
            </div>
            </div>

            <div id='cover'>
            <img src='./img/content/cover_logo.png' className='cover_logo'></img>
            </div>

            <div id='about'>
            <div className='whitespace'></div>

            <div id="about_text">
                <h2><span className='title'>Mais que apenas programação</span></h2>

                <p>O Gamux é um grupo de pesquisa e desenvolvimento de jogos organizado por estudantes, com sede na Unicamp. Nosso objetivo é prover suporte à comunidade de desenvolvedores e à cultura de jogos nas universidades da região de Campinas, participando de projetos, realizando pesquisas e sediando eventos relacionadas à área, como Game Jams. </p>
            </div>

            <div className='whitespace'></div>
            
            <div id="about_items">
                <div>
                <figure><img src='img/about/projetos.png'></img> </figure>
                <h3>PROJETOS</h3>
                <p>Realização de projetos relacionados ao desenvolvimento de jogos digitais.</p>
                </div>

                <div>
                <figure><img src='img/about/pesquisas.png'></img> </figure>
                <h3>PESQUISAS</h3>
                <p>Relacionando novas tecnologias aplicadas a jogos e suas possíveis implicações para a sociedade.</p>
                </div>

                <div>
                <figure><img src='img/about/eventos.png'></img></figure>
                <h3>EVENTOS</h3>
                <p>Organização de Game Jams, palestras e workshops relacionados ao desenvolvimento de jogos.</p>
                </div>
            </div>
            </div>

            <div id='projects'>
            <div className='whitespace'></div>

            <h2>PROJETOS</h2>

            <div className='flex_container'>
                <a href='https://moraguma.itch.io/gamutoware' target='_blank'>
                <div className='flex_child'>
                    <img src='img/project_icon/gamutoware.png'></img>
                    Gamutoware
                </div>
                </a>

                <a href='https://moraguma.itch.io/candle-prick' target='_blank'>
                <div className='flex_child'>
                    <img src='img/project_icon/candle-prick.png'></img>
                    Candle Prick
                </div>
                </a>

                <a href='https://www.facebook.com/play.jumongo' target='_blank'>
                <div className='flex_child'>
                    <img src='img/project_icon/jumongo.jpg'></img>
                    Jumongo
                </div>
                </a>
            </div>
            <a className="flex_child" href='https://gamux.itch.io/' target='_blank'><button className="dark">Lista Completa</button></a>

            <div className='whitespace'></div>
            </div>

            <div id='wiki' className="info_panel">
            <div className="info_item">
                <h1>Já pensou em criar seu próprio jogo?</h1>
                <p>Na nossa Wiki, temos vários tutorias para aqueles interessados no desenvolvimento de jogos!</p>
                <p>Ah, e não é necessário saber programar!</p>
                
                <a href='https://github.com/GamuxUnicamp/Gamux-Wiki/wiki' target='_blank'>
                <button>Conheça a wiki</button>
                </a>
            </div>

            <div>
                <img src='img/content/processor.png' height='300px'></img>
            </div>
            </div>

            <div id='calendar' className="info_panel">
            <div>
                <img src='img/content/controller.png' height='300px'></img>
            </div>

            <div className="info_item">
                <h1>Quer se tornar um desenvolvedor?</h1>
                <p>Então converse conosco!</p>
                <p>Na Unicamp, temos reuniões todas as terça-feiras as 18h no Instituto de Computação.</p>
            </div>
            </div>

            <div id='media' className="info_panel">
                <div>
                <h1>Está interessado?</h1>
                <p>Acompanhe nossas redes sociais!</p>
                <p>Fique por dentro de palestras, eventos, game jams e muito mais.</p>
                </div>

                <div>
                <a href='https://www.facebook.com/Gamuxa/'><button>Gamux</button></a>
                </div>
            </div>


            <div id='footer'>
                <a href='https://www.facebook.com/Gamux/' target='_blank'>
                <img src='img/social/facebook.png' height='24px'></img>
                </a>
                
                <a href='https://chat.whatsapp.com/Ka089OBeg2X8td9pfSTxfA' target='_blank'>
                <img src='img/social/whatsapp.png' height='38px'></img>
                </a>
        
                <div>
                contact@gamux.com.br
                </div>

                <div>
                Gamux <span>©</span> 2018
                </div>
            </div>
        </>
    )
}

export default LandingPage