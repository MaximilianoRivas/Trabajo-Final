import React, { useState } from 'react';
import emailjs from "emailjs-com";
import './Form.css'



function Form() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [correoError, setCorreoError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validarCorreo(correo)) {
      setCorreoError('Por favor, introduce un correo electrónico válido');
      return;
    }

    // Construir el contenido del correo electrónico
    /*const contenidoCorreo = `Nombre: ${nombre}\nCorreo electrónico: ${correo}\nMensaje: ${mensaje}`;*/
    await emailjs.sendForm('service_4g6jrq4','template_jm09aun', e.target,'BLr1vcFxmCjJeF0ly')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});

    // Abrir el cliente de correo predeterminado con los datos prellenados
    /*location.href = `mailto:tucorreo@gmail.com?subject=Formulario de contacto&body=${encodeURIComponent(
      contenidoCorreo
    )}`*/

    // Resetear los campos del formulario
    setNombre('');
    setCorreo('');
    setAsunto('');
    setMensaje('');
    setCorreoError('');
    setEnviado(true);
  };

  const validarCorreo = (correo) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  };

  return (
    <div className='vamos'>
    
    
      <form className='okey' onSubmit={handleSubmit}>

        <label  htmlFor="nombre">Nombre</label>
        <input 
          type="text"
          id="from_name"
          name='from_name'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        /><br />

        <label  htmlFor="correo" type="email">Email</label>
        
        <input 
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        {correoError && <span style={{ color: 'red' }}>{correoError}</span>}
        <br />
        <label htmlFor="asunto">Asunto</label>
          <input
           type="asunto"
           id='asunto'
           value={asunto}
           onChange={(e) => setAsunto(e.target.value)}
           required
          
           />
           <br />

        <label htmlFor="mensaje"></label>
        
        <textarea 
          id="message"
          name='message'
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea><br />

        <button className='enviar' type="submit">Send</button>
      </form>
    
  </div>
  );
}

export default Form;