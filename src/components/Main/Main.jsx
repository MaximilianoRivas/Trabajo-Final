import './Main.css'
import Form from '../Form/Form'

function Main(){

    return(
        <main>
            <section className="heros">
            <div className="eros">
            <p className='photograpy'>fotografía</p>
            <p className="toma">Maxi Rivas</p>
        </div>

        </section>

        <section className="presentacion">

        <div className="profesional1">
            <h1>profesional</h1>
            <h1>fotógrafo</h1>
        </div>
        
        <div className="profesional">

    <div className="parrafo"> 
        <p>Hola, soy Maxi Rivas, fotógrafo profesional residente en Argentina. Fotografiar la naturaleza escandinava es mi pasión y quiero compartirla con el mundo.</p>

        </div>
        <div >
           <img className='fotoco' src="public/persona.jpg"/>
        </div>
        
    </div>
    
    </section>

    <section id='Hacerca de' className="best">
        <h2 className="work">Hacerca de</h2>

        <div className="bestwork">
            <div>
               
           <img className='flecha' src="public/flecha.svg"/>
    </div>

        <div className="best1">
            
        <img className='aurora' src="public/aurora.jpg"/>
        <p className="parrafo1">Naturaleza</p>
        <p className="parrafito"> 01</p>
    </div>

    <div className="best2">

    <img className='montaña' src="public/casitamontaña.jpg"/>
    <p className="parrafo1">Arquitectura </p>
    <p className="parrafitos">02</p>
    </div>

    <div className="best3">
    <img className='naranja' src="public/naranja.jpg" />
    <p className="parrafo2">Viaje</p>
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

<section id='Servicio' className="servi">

<div className="precios">
    <h1 className="h11">Servicio</h1>
    
    <div className="clases">
        <div className="clase1">
            
        <p className="yes">Mi trabajo como fotógrafo de viajes me ha llevado por todo el mundo, realizando encargos editoriales y trabajando con algunas de las principales agencias.
 Siempre estoy abierto a nuevas colaboraciones y dispuesto a ofrecer servicios profesionales de calidad.
        </p>
        
     <ul className="ah">
        <li className="oh"> Fotografia  $250 </li>
        <li className="oho">video $400</li>
        <li className="ohi" >producción $600</li>
     </ul>
       
    </div>

</div>
</div>

</section>
<section id='Premios' className="award">
    <h1 className='awar'>Premios</h1>
    <div className="award1">
        <p className="textos1">Algunas de mis fotografías han recibido importantes premios profesionales. Estoy muy orgulloso de estos trabajos y avanzo constantemente en busca de nuevos logros. </p>
        <img className='personas2' src="public/personamontaña.jpg"/>
        <img className='personas2' src="public/montañagua.jpg"/>
        
    </div>

</section>

<section id='Contacto' className="lunes">

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
