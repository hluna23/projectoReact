import React, { useState} from "react";
import { useEffect } from "react";


const CrudForm = ({addContacto, editContacto, editData}) => {

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    id: null
  })

  useEffect(() => {
   if (editData !== null){
    setFormData(editData)
   }else{
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      id: null
    })
   }
  }, [editData])

 
 
 const handleSubmit =(e) => {
  e.preventDefault();
 
  if (formData.nome !== '' && formData.telefone !== '' && formData.email !== '') {
  if (editData !== null){
    editContacto(formData)
  }else{
      formData.id = Date.now()
    addContacto(formData)
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      id: null
    })
  }
    }else{
      alert('Por favor agrega um nome, um telefone e um email.')
    }
  }
 

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
 }
 
 return<>
    <form className="formulario" onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input className='inserir' id='nome' type="text" name='nome' onChange={handleChange} value={formData.nome} /> 
      <label htmlFor="telefone">Telefone</label>
      <input className='inserir' id='telefone' type="text" name='telefone' onChange={handleChange} value={formData.telefone}/>
      <label htmlFor="email">Email</label>
      <input className='inserir' id='email' type="text" name='email' onChange={handleChange} value={formData.email}/>
      <input id="boton1" type="submit" value="Enviar" />
      <input id="boton" type="reset" value="Cancelar" />
   </form>
  
  
  </>
} 
export default CrudForm