import './Banner.scss'

function Banner({title = "", urlBackground = ""}) {

    const bannerStyle = urlBackground ? {backgroundImage: `url(${urlBackground})`} : {};

    return ( 
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
     );
}

export default Banner;