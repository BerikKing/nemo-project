import React from "react";
import ProductCard from '../components/ProductCard';

const products = [
    {
        id: 1,
        photo: "../images/Xiaomi13Pro.png",
        promo: "Акция",
        description: " Смартфон Xiaomi 13 Pro, 12+512 ГБ, Черный",
        price: "109 990 ₽" 
    },
    {
        id: 2,
        photo: "../images/RedmiNote11.png",
        promo: "Акция",
        description: "Описание продукта",
        price: "$10" 
    },
    {
        id: 3,
        photo: "../images/Xiaomi13Pro.png",
        promo: "Акция",
        description: "Описание продукта",
        price: "$10" 
    },
    {
        id: 4,
        photo: "../images/RedmiNote11.png",
        promo: "Акция",
        description: "Описание продукта",
        price: "$10" 
    },
]


const Category = () => {
    return (
        <>
            <div className="category">
                <div className="container">
                    <div className="hyper_link">
                        <div className="hyper_link_title">
                            Главная / Смартфоны
                        </div>
                    </div>
                    <div className="category_main_title">
                        <div className="category_main_title-first">
                            Смартфоны Xiaomi
                        </div>
                        <div className="category_main_title-count">- 174</div>
                    </div>
                    <div className="category_popular">
                        <div className="category_popular-left">
                            <div className="left left_redmi">Redmi</div>
                            <div className="left left_poco">POCO</div>
                            <div className="left left_xiaomi">Xiaomi</div>
                        </div>
                        <div className="category_popular-right">
                            <div className="right right-popular">Популярность</div>
                            <div className="right right-new">Новизна</div>
                            <div className="right right-price">Цена</div>
                        </div>
                    </div>
                    <div className="main_category">
                        <div className="sitebar">
                            <div className="sitebar-container">
                                <div className="sitebar-price">
                                Цена, ₽
                                </div>
                                <div className="sitebar_range">
                                    <button><span>от</span> 4990</button>
                                    <button><span>до</span> 109990</button>
                                </div>
                                <div className="sitebar-range">
                                    <input type="range" name="price" min="4990" max = "109990" />
                                </div>

                                {/* Разъем для зарядки */}
                                <div className="ChargingConnector">
                                    <div className="CCTitle">Разъем для зарядки</div>
                                    <div className="CCinput">
                                        <div className="USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">microUSB</div>
                                        </div>
                                        <div className="USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">USB-C</div>
                                        </div>
                                        <div className="USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">USB-C</div>
                                        </div>
                                        <div className="USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Type-C</div>
                                        </div>
                                    </div>   
                                </div>

                                {/* Емкость аккумулятора */}
                                <div className="BatteryCapacity ChargingConnector">
                                    <div className="BCTitle CCTitle">Емкость аккумулятора</div>
                                    <div className="BCinput CCinput">
                                        <div className="Battery USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">5020 mA-ч</div>
                                        </div>
                                        <div className="Battery USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">4820 mA-ч</div>
                                        </div>
                                        <div className="Battery USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">4520 mA-ч</div>
                                        </div>
                                        <div className="Battery USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">4500 mA-ч</div>
                                        </div>
                                        <div className="more">Показать все</div>
                                    </div>   
                                </div>

                                {/* Версия ОС */}
                                <div className="Version ChargingConnector">
                                    <div className="VTitle CCTitle">Версия ОС</div>
                                    <div className="VCinput CCinput">
                                        <div className="Android USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">MIUI 14 на базе Android 13</div>
                                        </div>
                                        <div className="Android USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">MIUI 13 на базе Android 12</div>
                                        </div>
                                        <div className="Android USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Android 12</div>
                                        </div>
                                        <div className="Android USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">MIUI 12.5 на базе Android 11</div>
                                        </div>
                                    </div>   
                                    <div className="more">Показать все</div>
                                </div>

                                {/* Видеопроцессор */}
                                <div className="VideoProcessor ChargingConnector">
                                    <div className="VPTitle CCTitle">Видеопроцессор</div>
                                    <div className="VPCinput CCinput">
                                        <div className="Processor USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Mali-G52</div>
                                        </div>
                                        <div className="Processor USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Qualcomm® FastConnect™ 7800</div>
                                        </div>
                                        <div className="Processor USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Qualcomm Adreno GPU</div>
                                        </div>
                                        <div className="Processor USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Mali-G76</div>
                                        </div>
                                        
                                    </div> 
                                    <div className="more">Показать все</div>  
                                </div>

                                {/* RAM */}

                                <div className="RAM ChargingConnector">
                                    <div className="RAMTitle CCTitle">Оперативная память</div>
                                    <div className="RAMCinput CCinput">
                                        <div className="RAMMamory USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">3 ГБ</div>
                                        </div>
                                        <div className="RAMMamory USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">6 ГБ</div>
                                        </div>
                                        <div className="RAMMamory USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">4 ГБ</div>
                                        </div>
                                        <div className="RAMMamory USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">2 ГБ</div>
                                        </div>
                                        
                                    </div> 
                                    <div className="more">Показать все</div>  
                                </div>

                            {/* memory */}
                                <div className="memory ChargingConnector">
                                    <div className="memoryTitle CCTitle">Встроенная память</div>
                                    <div className="memoryCinput CCinput">
                                        <div className="memoryType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">64 ГБ</div>
                                        </div>
                                        <div className="memoryType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">512 ГБ</div>
                                        </div>
                                        <div className="memoryType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">256 ГБ</div>
                                        </div>
                                        <div className="memoryType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">32 ГБ</div>
                                        </div>
                                        
                                    </div> 
                                    <div className="more">Показать все</div>  
                                </div>
                            {/* Диагональ экрана */}
                                <div className="ScreenzDiagonal ChargingConnector">
                                    <div className="ScreenzDiagonalTitle CCTitle">Диагональ экранаь</div>
                                    <div className="ScreenzDiagonalCinput CCinput">
                                        <div className="ScreenzDiagonalSize USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">6.36"</div>
                                        </div>
                                        <div className="ScreenzDiagonalSize USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">6.73"</div>
                                        </div>
                                        <div className="ScreenzDiagonalSize USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">6.28"</div>
                                        </div>
                                        <div className="ScreenzDiagonalSize USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">6.71"</div>
                                        </div>
                                        
                                    </div> 
                                    <div className="more">Показать все</div>  
                                </div>
                            {/* Front-camera */}
                                <div className="Front-camera ChargingConnector">
                                    <div className="Front-cameraTitle CCTitle">Фронтальная камера</div>
                                    <div className="Front-cameraCinput CCinput">
                                        <div className="Front-cameraMP USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">13 Мп</div>
                                        </div>
                                        <div className="Front-cameraMP USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">16 Мп</div>
                                        </div>
                                        <div className="Front-cameraMP USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">8 Мп</div>
                                        </div>
                                        <div className="Front-cameraMP USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">5 Мп</div>
                                        </div>
                                        
                                    </div> 
                                    <div className="more">Показать все</div>  
                                </div>

                                {/* Material */}

                                <div className="Material ChargingConnector">
                                    <div className="MaterialTitle CCTitle">Материал</div>
                                    <div className="MaterialCinput CCinput">
                                        <div className="MaterialCase USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">пластик</div>
                                        </div>
                                        <div className="MaterialCase USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">пластик, стекло, металл</div>
                                        </div>
                                        <div className="MaterialCase USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">пластик, нейлон, металл</div>
                                        </div>
                                        <div className="MaterialCase USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">пластик, стекло</div>
                                        </div>
                                        
                                    </div> 
                                    <div className="more">Показать все</div>  
                                </div>

                                {/* SIM card type */}

                                <div className="SIMCard ChargingConnector">
                                    <div className="SIMCardTitle CCTitle">Тип SIM-карты</div>
                                    <div className="SIMCardCinput CCinput">
                                        <div className="SIMCardType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">nano-SIM, гибридная</div>
                                        </div>
                                        <div className="SIMCardType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text"></div>
                                        </div>
                                        <div className="SIMCardType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">nano-SIM</div>
                                        </div>
                                        <div className="SIMCardType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">micro-SIM</div>
                                        </div>
                                    </div> 
                                </div>

                                {/* Color */}
                                <div className="Color ChargingConnector">
                                    <div className="ClorTitle CCTitle">Цвет</div>
                                    <div className="Clor_wrapper">
                                        <div className="Color_name color_ffffff">
                                        </div>
                                        <div className="Color_name color_E6E7E7">
                                        </div>
                                        <div className="Color_name color_FFD14A">
                                        </div>
                                        <div className="Color_name color_33A2A3">
                                        </div>
                                        <div className="Color_name color_46C5C5">
                                        </div>
                                        <div className="Color_name color_545454">
                                        </div>
                                        <div className="Color_name color_3D4345">
                                        </div>
                                        <div className="Color_name color_09A791">
                                        </div>
                                        <div className="Color_name color_000000">
                                        </div>
                                        <div className="Color_name color_E3F1FB">
                                        </div>
                                        
                                    </div> 
                                    <div className="more">Показать все</div>  
                                </div>


                                {/* Магазин */}
                                <div className="Store ChargingConnector">
                                    <div className="StoreTitle CCTitle">Магазин</div>
                                    <div className="Storeinput CCinput">
                                        <div className="Store-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Xiaomi Москва ТРЦ Павелецкая Плаза</div>
                                        </div>
                                        <div className="Store-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Xiaomi Москва Авеню Юго-Западная</div>
                                        </div>
                                        <div className="Store-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Xiaomi Москва Город Косино</div>
                                        </div>
                                        <div className="Store-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Xiaomi Москва Небо</div>
                                        </div>
                                    </div> 
                                </div>

                                <div className="installmentPlan ChargingConnector">
                                    <div className="installmentPlanTitle CCTitle">Доступен в рассрочку</div>
                                    <div className="installmentPlaninput CCinput">
                                        <div className="installmentPlan-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <div className="label-text">Да</div>
                                        </div>
                                    </div> 
                                </div>

                                <button className="sitebar_show_more">Показать</button>
                                <div className="sitebar_reset">Сбросить</div>

                            </div>
                        </div>
                        
                        <div className="products">

                            <div className="products_container">
                                {products.map((product) => (
                                    <ProductCard key = {product.id} {...product}/>
                                
                                ))}
                            </div>

                                
                        </div>
                        
                    </div>
                    

                    {/* end container */}
                </div>
            </div>
        </>
    );
};
export default Category;
