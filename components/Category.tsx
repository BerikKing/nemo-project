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
                            </div>
                        </div>
                        <div className="products"></div>
                    </div>
                    

                    {/* end container */}
                </div>
            </div>
        </>
    );
};
export default Category;
