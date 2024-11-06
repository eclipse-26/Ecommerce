import { HiOutlineXMark } from "react-icons/hi2"
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const ProductDetail = () =>{

    const { ProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);

    return(
        <aside 
        className={`
        ${ProductDetailOpen ? 'flex' : 'hidden'}
        w-[360px] h-[calc(100%-100px)] flex-col fixed right-2 bottom-2 bg-white border rounded-lg p-4
        `}
        >
            <div className="flex justify-between">
                <h2 className=" font-semibold">
                    Details
                </h2>
                <button onClick={()=>closeProductDetail()}>
                    <HiOutlineXMark />
                </button>
            </div>
        {ProductDetailOpen ?     
        <div className="py-2">
            <figure className="relative rounded-xl overflow-hidden">
                <img src={productToShow.image_url} alt={productToShow.name} />
                <span className='absolute bottom-2 left-2 bg-white/60 rounded-lg text-black text-xs p-2 shadow-md'>{productToShow.category}</span>
            </figure>
            <div className="py-2 flex flex-col gap-2">
                <h3 className="font-semibold">{productToShow.name}</h3>
                <div className='flex items-center justify-between'>
                    <span className='text-lg font-bold'>${productToShow.price}</span>
                    <span>{productToShow.rating}/5</span>
                </div>
                <span className='py-1 px-2 bg-green-200 text-green-700 font-semibold text-xs w-fit rounded-xl'>{productToShow.in_stock ? "Disponible" : "Agotado"}</span>
                <h4 className='text-sm font-semibold'>Características</h4>
                <table className='product__detail__features__table'>
                    <tbody>
                        <tr>
                            <td>
                                Marca
                            </td>
                            <td>
                                {productToShow.brand}
                            </td>
                        </tr>
                        { productToShow.features.switch_type ?
                        <tr>
                            <td>
                                Color
                            </td>
                            <td>
                                {productToShow.features.switch_type}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.rgb_lighting ?
                        <tr>
                            <td>
                                Luces RGB
                            </td>
                            <td>
                                Sí
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.connectivity ?
                        <tr>
                            <td>
                                Contectividad
                            </td>
                            <td>
                                {productToShow.features.connectivity}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.buttons ?
                        <tr>
                            <td>
                                Botones
                            </td>
                            <td>
                                {productToShow.features.buttons}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.battery_life ?
                        <tr>
                            <td>
                                Duración de carga
                            </td>
                            <td>
                                {productToShow.features.battery_life}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.microphone ?
                        <tr>
                            <td>
                                Microfono
                            </td>
                            <td>
                                {productToShow.features.microphone}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.surround_sound ?
                        <tr>
                            <td>
                                Sonido
                            </td>
                            <td>
                                {productToShow.features.surround_sound}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.compatibility ?
                        <tr>
                            <td>
                                Compatibilidad
                            </td>
                            <td>
                                {productToShow.features.compatibility}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.dpi ?
                        <tr>
                            <td>
                                DPI
                            </td>
                            <td>
                                {productToShow.features.dpi}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.weight ?
                        <tr>
                            <td>
                                Peso
                            </td>
                            <td>
                                {productToShow.features.weight}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.resolution ?
                        <tr>
                            <td>
                                Resolución
                            </td>
                            <td>
                                {productToShow.features.resolution}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.refresh_rate ?
                        <tr>
                            <td>
                                Taza de refresco
                            </td>
                            <td>
                                {productToShow.features.refresh_rate}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.panel_type ?
                        <tr>
                            <td>
                                Tipo de panel
                            </td>
                            <td>
                                {productToShow.features.panel_type}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.material ?
                        <tr>
                            <td>
                                Material
                            </td>
                            <td>
                                {productToShow.features.material}
                            </td>
                        </tr>
                        :
                        null
                        }
                        { productToShow.features.reclining_angle ?
                        <tr>
                            <td>
                                Angulo de inclinación
                            </td>
                            <td>
                                {productToShow.features.reclining_angle}
                            </td>
                        </tr>
                        :
                        null
                        }
                    </tbody>
                </table>
            </div>
        </div>
        :
            null
        }
        </aside>
    )
}

export default ProductDetail