import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CatalogList = [
  {
    path: 'tourism_goods',
    text: 'Спорт и туризм',
  },
  {
    path: 'odezda_i_obuv_1',
    text: 'Одежда и обувь',
  },
  {
    path: 'auto',
    text: 'Автотовары и запчасти',
  },
  {
    path: 'detskie_tovari_1',
    text: 'Детские товары',
  },
  {
    path: 'country_house_diy',
    text: 'Дом, дача и ремонт',
  },
  {
    path: 'mobiles_gps_mp3',
    text: 'Смартфоны и гаджеты',
  },
  {
    path: 'planseti_i_igrovie_pristavki_1',
    text: 'Планшеты и игровые приставки',
  },
  {
    path: 'bitovaya_tehnika_1',
    text: 'Бытовая техника',
  },
  {
    path: 'cameras',
    text: 'Фото и видеокамеры',
  },
  {
    path: 'tv_audio_video',
    text: 'ТВ, Аудио, Видео',
  },
  {
    path: 'computers_notebooks',
    text: 'Компьютеры и ноутбуки',
  },
  {
    path: 'hardware',
    text: 'Комплектующие для пк',
  },
  {
    path: 'office_networks',
    text: 'Офисная техника, канцелярия',
  },
  {
    path: 'parfumeria_i_kosmetika_1',
    text: 'Парфюмерия и косметика',
  },
  {
    path: 'krasota_i_zdorov_e_1',
    text: 'Красота и здоровье',
  },
  {
    path: 'zootovary_1',
    text: 'Зоотовары',
  },
  {
    path: 'utuning',
    text: 'Услуги и сервисы',
  },
];

const Wrapper = styled.div`
  width: 250px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;

const Catalog = () => (
  <Wrapper>
    <div>Каталог товаров</div>
    <div>
      {CatalogList.map(catalogItem => (
        <Link to={catalogItem.path}>
          <div>{catalogItem.text}</div>
        </Link>
      ))}
    </div>
  </Wrapper>
);

export default Catalog;
