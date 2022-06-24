import React from 'react'
import { createContext ,useState} from 'react'
import Componente1 from './Componente1';
import Componente2 from './Componente2';
const UsuarioContext = createContext();

function ProbarContext() {
    const [usuario, setusuario] = useState("alberto");

    return (
        <div>ProbarContext
            <UsuarioContext.Provider value={usuario}>
                <Componente1 />
            </UsuarioContext.Provider>
        </div>
    )
}

export default ProbarContext
export {UsuarioContext}