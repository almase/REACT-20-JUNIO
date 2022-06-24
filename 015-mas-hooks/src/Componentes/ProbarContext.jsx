import React from 'react'
import { createContext ,useState} from 'react'
import Componente2 from './Componente2';
const UsuarioContext = createContext();

function ProbarContext() {
    const [usuario, setusuario] = useState("alberto");

    return (
        <div>ProbarContext
            <UsuarioContext.Provider value={usuario}>
                <Componente2 />
            </UsuarioContext.Provider>
        </div>
    )
}

export default ProbarContext
export {UsuarioContext}