import React from "react";

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
                                            <label className="label-text">microUSB</label>
                                        </div>
                                        <div className="USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">USB-C</label>
                                        </div>
                                        <div className="USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">USB-C</label>
                                        </div>
                                        <div className="USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Type-C</label>
                                        </div>
                                    </div>   
                                </div>

                                {/* Емкость аккумулятора */}
                                <div className="BatteryCapacity ChargingConnector">
                                    <div className="BCTitle CCTitle">Емкость аккумулятора</div>
                                    <div className="BCinput CCinput">
                                        <div className="Battery USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">5020 mA-ч</label>
                                        </div>
                                        <div className="Battery USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">4820 mA-ч</label>
                                        </div>
                                        <div className="Battery USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">4520 mA-ч</label>
                                        </div>
                                        <div className="Battery USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">4500 mA-ч</label>
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
                                            <label className="label-text">MIUI 14 на базе Android 13</label>
                                        </div>
                                        <div className="Android USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">MIUI 13 на базе Android 12</label>
                                        </div>
                                        <div className="Android USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Android 12</label>
                                        </div>
                                        <div className="Android USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">MIUI 12.5 на базе Android 11</label>
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
                                            <label className="label-text">Mali-G52</label>
                                        </div>
                                        <div className="Processor USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Qualcomm® FastConnect™ 7800</label>
                                        </div>
                                        <div className="Processor USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Qualcomm Adreno GPU</label>
                                        </div>
                                        <div className="Processor USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Mali-G76</label>
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
                                            <label className="label-text">3 ГБ</label>
                                        </div>
                                        <div className="RAMMamory USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">6 ГБ</label>
                                        </div>
                                        <div className="RAMMamory USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">4 ГБ</label>
                                        </div>
                                        <div className="RAMMamory USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">2 ГБ</label>
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
                                            <label className="label-text">64 ГБ</label>
                                        </div>
                                        <div className="memoryType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">512 ГБ</label>
                                        </div>
                                        <div className="memoryType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">256 ГБ</label>
                                        </div>
                                        <div className="memoryType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">32 ГБ</label>
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
                                            <label className="label-text">6.36"</label>
                                        </div>
                                        <div className="ScreenzDiagonalSize USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">6.73"</label>
                                        </div>
                                        <div className="ScreenzDiagonalSize USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">6.28"</label>
                                        </div>
                                        <div className="ScreenzDiagonalSize USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">6.71"</label>
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
                                            <label className="label-text">13 Мп</label>
                                        </div>
                                        <div className="Front-cameraMP USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">16 Мп</label>
                                        </div>
                                        <div className="Front-cameraMP USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">8 Мп</label>
                                        </div>
                                        <div className="Front-cameraMP USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">5 Мп</label>
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
                                            <label className="label-text">пластик</label>
                                        </div>
                                        <div className="MaterialCase USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">пластик, стекло, металл</label>
                                        </div>
                                        <div className="MaterialCase USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">пластик, нейлон, металл</label>
                                        </div>
                                        <div className="MaterialCase USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">пластик, стекло</label>
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
                                            <label className="label-text">nano-SIM, гибридная</label>
                                        </div>
                                        <div className="SIMCardType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text"></label>
                                        </div>
                                        <div className="SIMCardType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">nano-SIM</label>
                                        </div>
                                        <div className="SIMCardType USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">micro-SIM</label>
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
                                            <label className="label-text">Xiaomi Москва ТРЦ Павелецкая Плаза</label>
                                        </div>
                                        <div className="Store-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Xiaomi Москва Авеню Юго-Западная</label>
                                        </div>
                                        <div className="Store-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Xiaomi Москва Город Косино</label>
                                        </div>
                                        <div className="Store-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Xiaomi Москва Небо</label>
                                        </div>
                                    </div> 
                                </div>

                                <div className="installmentPlan ChargingConnector">
                                    <div className="installmentPlanTitle CCTitle">Доступен в рассрочку</div>
                                    <div className="installmentPlaninput CCinput">
                                        <div className="installmentPlan-name USB">
                                            <input type="checkbox" name="checbox"/>
                                            <label className="label-text">Да</label>
                                        </div>
                                    </div> 
                                </div>

                                <button className="sitebar_show_more">Показать</button>
                                <div className="sitebar_reset">Сбросить</div>

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
