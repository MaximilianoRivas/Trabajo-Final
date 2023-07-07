import './Main.css'
import Form from '../Form/Form'

function Main(){

    return(
        <main>
            <section className="heros">
            <div className="eros">
            <p className='photograpy'>photography</p>
            <p className="toma">tomas jacobsen</p>
        </div>

        </section>

        <section className="presentacion">

        <div className="profesional1">
            <h1>profesional </h1>
            <h1>Photographer</h1>
        </div>
        
        <div className="profesional">

    <div className="parrafo"> 
        <p>Hi! My name is Tomas JACOBSEN.I´m a profesional Photographer based in Norway. Photographing  Scandinavian nature is my passion and i want to share it with the world.</p>

        </div>
        <div >
           <img className='fotoco' src="public/persona.jpg"/>
        </div>
        
    </div>
    
    </section>

    <section id='Best Works' className="best">
        <h2 className="work">Best Works</h2>

        <div className="bestwork">
            <div>
               
           <img className='flecha' src="public/flecha.svg"/>
    </div>

        <div className="best1">
            
        <img className='aurora' src="public/aurora.jpg"/>
        <p className="parrafo1">Nature</p>
        <p className="parrafito"> 01</p>
    </div>

    <div className="best2">

    <img className='montaña' src="public/casitamontaña.jpg"/>
    <p className="parrafo1">Architecture </p>
    <p className="parrafitos">02</p>
    </div>

    <div className="best3">
    <img className='naranja' src="public/naranja.jpg" />
    <p className="parrafo2">Travel</p>
    </div>

    </div>
    
        
    </section>

    <section id='Video' className="video">

<div className="imagenes1">
    <h1 className="titulo">video production</h1>
    <div className="player">
    <img className="play3d" src="public/play.png"/>
    
    <div className="maxi1">
        <p className="maxi1">oslo</p>
    </div>

    <div className="oslo1">
    <img src="public/location.png"/>
    <i>Norway</i>
   
</div>
    
</div>
<div className='vide'>
    <img className="played" src="public/play.png"/>
     <img className='casa' src="public/casamontaña.jpg"/>
     <img className='centro' src="public/centrico.jpg" />
    </div>

    </div>

</section>

<section id='Service' className="servi">

<div className="precios">
    <h1 className="h11">Service</h1>
    
    <div className="clases">
        <div className="clase1">
            
        <p className="yes">Working as travel Photographer has taken me aroud the globe, shooting editorial assignments and working with some of the aleadingagencies.
            I am always open to new collaborations and ready to previde professional quality services.
        </p>
        
     <ul className="ah">
        <li className="oh"> photography  250e </li>
        <li className="oho">video 400e</li>
        <li className="ohi" >production 600e</li>
     </ul>
       
    </div>

</div>
</div>

</section>
<section id='Awards' className="award">
    <h1 className='awar'>Awards</h1>
    <div className="award1">
        <p className="textos1">Some of my photographs hace received high professional awards. I am very proud of these works and constantly move forward in search if new achievements </p>
        <img className='personas2' src="public/personamontaña.jpg"/>
        <img className='personas2' src="public/montañagua.jpg"/>
        
    </div>

</section>

<section id='Contact' className="lunes">

    <h2 className="lunes1">contact</h2>

    

    <div className="martes1">
    

        <div className="miercoles">

            <img className="hol3" src="public/mensaje.png"/>
            <p className="hello11">hello@tjacovsen.com</p>
            
            <img className="hol11"  src="public/phone.png" />
            <p className="hello22">+47 997 876 34 54</p>
            
        </div>

        <Form/>

       
    </div>
    <div className="redes">
        <img src="public/yotube.png"/> 

       <img src="public/facebook.svg"/>

       <img src="public/twitter.png"/>
        
    </div>
    </section>


        </main>


    )
        
}
export default Main
