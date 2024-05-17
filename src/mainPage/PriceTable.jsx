import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "swiper/css";

export default function PriceTable(props) {
    const renderConcreteRow = (strength, tensile, prices) => (
        <tr key={strength}>
            <td className="compressive-strength"><div className="table-text-box">{strength}</div></td>
            <td className="tensile-strength"><div className="table-text-box">{tensile}</div></td>
            <td className="concrete-price-column">{prices.P1} ₴</td>
            <td className="concrete-price-column">{prices.P2} ₴</td>
            <td className="concrete-price-column">{prices.P3} ₴</td>
            <td className="concrete-price-column">{prices.P4} ₴</td>
        </tr>
    );

    const renderMortarConcreteRow = (strength, prices) => (
        <tr key={strength}>
            <td className="compressive-strength"><div className="table-text-box">{strength}</div></td>
            <td className="concrete-price-column">{prices['Осадка конуса 1-4']} ₴</td>
            <td className="concrete-price-column">{prices['Осадка конуса 8-10']} ₴</td>
        </tr>
    );

    const renderSandRow = (name, fraction, price) => (
        <tr key={fraction}>
            <td className="compressive-strength">{name}</td>
            <td className="concrete-price-column">{fraction}</td>
            <td className="concrete-price-column">{price} ₴</td>
        </tr>
    );
  return (
    <>
        <Swiper
            spaceBetween={30}
            pagination={{clickable: true}}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper">

            <SwiperSlide>
            <section className="table-container" id="priceTable">
                <p className="TableDescription">Бетон,  м<sup>3</sup></p>
                <table className="concrete-price-table">
                    <thead>
                        <tr>
                            <th className="compressive-strength">Міцність на стиск</th>
                            <th className="tensile-strength">Міцність на розтяг</th>
                            <th>Осадка конуса Р1</th>
                            <th>Осадка конуса Р2</th>
                            <th>Осадка конуса Р3</th>
                            <th>Осадка конуса Р4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderConcreteRow('M100', 'B7.5', props.data.Бетон.M100)}
                        {renderConcreteRow('M150', 'B10', props.data.Бетон.M150)}
                        {renderConcreteRow('M200', 'B15', props.data.Бетон.M200)}
                        {renderConcreteRow('M250', 'B20', props.data.Бетон.M250)}
                        {renderConcreteRow('M300', 'B25', props.data.Бетон.M300)}
                        {renderConcreteRow('M350', 'B25', props.data.Бетон.M350)}
                        {renderConcreteRow('M400', 'B30', props.data.Бетон.M400)}
                    </tbody>
                </table>
          </section>
            </SwiperSlide>
            <SwiperSlide>
            <section className="table-container">
                <p className="TableDescription">Розчин цементно-піщаний,  м<sup>3</sup></p>
                <table className="concrete-price-table">
                    <thead>
                        <tr>
                            <th className="compressive-strength">Міцність на стиск</th>
                            <th>Осадка конуса 1-4</th>
                            <th>Осадка конуса 8-10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderMortarConcreteRow('M50', props.data['Розчин цементно-піщаний'].M50)}
                        {renderMortarConcreteRow('M75', props.data['Розчин цементно-піщаний'].M75)}
                        {renderMortarConcreteRow('M100', props.data['Розчин цементно-піщаний'].M100)}
                        {renderMortarConcreteRow('M150', props.data['Розчин цементно-піщаний'].M150)}
                        {renderMortarConcreteRow('M200', props.data['Розчин цементно-піщаний'].M200)}
                    </tbody>
                </table>
        </section>
            </SwiperSlide>
            <SwiperSlide><section className="table-container">
                <p className="TableDescription">Щебінь та пісок,  м<sup>3</sup></p>
                <table className="concrete-price-table">
                    <thead>
                        <tr>
                            <th className="sandText">Тип</th>
                            <th>Фракція</th>
                            <th>Ціна</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderSandRow('щебінь гранітний', '5-20', props.data['Щебінь та пісок']['щебінь гранітний фракція 5-20'])}
                        {renderSandRow('щебінь гранітний', '20-40', props.data['Щебінь та пісок']['щебінь гранітний фракція 20-40'])}
                        {renderSandRow('пісок будівельний', '', props.data['Щебінь та пісок']['пісок будівельний'])}
                    </tbody>
                </table>
             </section></SwiperSlide>
      </Swiper>
    </>
  );
}