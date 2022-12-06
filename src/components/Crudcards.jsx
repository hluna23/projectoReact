import React from "react";
import Busto from "./img/busto.png"


const Crudcards = ({ contactos, setEditData, deleteContacto }) => {
  return<>
  <h2>Contactos</h2>
  
        {
          contactos.length === 0 ? <span>No tem informação</span>
          : contactos.map((contacto, index) => {
          return <div className="contac">
                  <div className="card">  
                    <img className='busto' src={Busto} alt=""/>
                    <div className="infocards" key={index}>
                      <span id="info" className="nome">Nome: {contacto.nome}</span>
                      <span id="info" className="telefone">Telefone: {contacto.telefone}</span>
                      <span id="info" className="email">Email: {contacto.email}</span>
                    </div>
                    <div className="botomcards">
                      <button className="btn" onClick={() => setEditData(contacto)}>Editar</button>
                      <button className="btn1" onClick={() => deleteContacto(contacto.id)}>Eliminar</button>
                    </div>
                  </div>
                </div>
          } )
        } 
   
  
  </>
}
export default Crudcards