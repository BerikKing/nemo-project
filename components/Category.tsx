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
