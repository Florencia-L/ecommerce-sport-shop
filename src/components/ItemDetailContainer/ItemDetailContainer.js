import React, {useEffect, useState} from 'react';
import calza from '../../assets/images/producto.jpg';
import ItemDetail from './ItemDetail';

let products = [
    {id:1, title:'Calza deportiva Scout', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1250, urlImg: calza },
    {id:2, title:'Calza deportiva PowerShot', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1380, urlImg: calza },
    {id:3, title:'Calza Minimal training', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1150, urlImg: calza },
    {id:4, title:'Calza Max Effort', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1420, urlImg: calza }
]

const getItems = () => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res(products[0]);
        }, 2000);
    });
}

function ItemDetailContainer({ items }) {
    let [item1, setItem1] = useState([]);

    useEffect( () => {
        console.log('Inicializada item container');
        getItems().then( res => {
            setItem1(res);
        })
    }, []);
    
    return  <>
    <div className="container mt-5 pt-5">
        <ItemDetail item={item1} />
    </div>
    </>
    }

export default ItemDetailContainer;