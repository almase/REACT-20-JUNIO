import React from 'react'
import useGetFotos from '../Hooks/useGetPosts'
import Contenido from './Contenido';

function Post() {

    const resultado = useGetFotos('https://jsonplaceholder.typicode.com/posts');

    return (
        <div>
            <p className="display-2">LISTADO DE FOTOS</p>

            <table class="table  table-striped">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>titulo</td>
                        <td>imagen</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        resultado &&
                        resultado.map((item) => {
                            return (
                                <>
                                    <Contenido  elemento={item} />

                                </>)

                        })
                    }
                </tbody>
            </table>

            <button className="btn btn-primary">ACEPTAR</button>
        </div>
    )
}

export default Post