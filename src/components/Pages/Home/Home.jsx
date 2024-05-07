import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'

export const Home = () => {
  return (
    <>
    <Header>
    <section className='w-full h-full' >
    <div className='w-2/5 bg-gray-700  text-black text-2xl relative my-5'>
      <p  className='font-OpenSans'>
        <span>COMPRA UN JEAN</span>
       <div>
       <span>Y LLEVATE</span>
        <span>EL SEGUNDO </span>
       </div>
        <span>CON EL</span>
       <div>
       <span className='font-bold italic' >20</span>
      <div>
      <span>%</span>
        <span>DTO</span>
      </div>
       </div>
      <div>
      <span>DESCUENTOS POR UNA COMPRA</span>
      </div>
        <span>El descuento aplica en maximo 5 productos</span>
      </p>
    <button>COMPRA AQUI</button>
 
    </div>
    </section>
    </Header>
    <Main>
holi2
    </Main>
    </>
  )
}
