import React from 'react'
import { MenuLateral } from '../components/MenuLateral'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { DataTableUsers } from '../components/DataTableUsers';
export const Usuarios = () => {
  return (
   <>
     <div className='flex'>
    <MenuLateral/>
    <div className='bg-[#eef9fd] w-full block'>


      <div className="content_users m-7">
        <div className="content_users_title">
          <h2 className='text-2xl font-semibold text-gray-700 font-sans'>Usuarios</h2>
          <p>Crea, administra y haz un seguimiento del rendimiento de los tus usuarios en un solo lugar.</p>
             
        </div>

        <div className="container_cont">
          
          <DataTableUsers/>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}