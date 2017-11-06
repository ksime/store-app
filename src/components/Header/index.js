import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './ulmart-logo.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const Header = () => (
  <Wrapper>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
    <ListWrapper>
      <div>Санкт-Петербург</div>
    </ListWrapper>
    <ListWrapper>
      <div>8 800 555 35 35 Круглосуточно</div>
    </ListWrapper>
    <Link to="/help/current/contacts">
      <ListWrapper>Адреса и контакты</ListWrapper>
    </Link>
    <Link to="help/current/how_to_order">
      <ListWrapper>Заказ</ListWrapper>
    </Link>
    <Link to="/help/current/how_to_pay">
      <ListWrapper>Оплата</ListWrapper>
    </Link>
    <Link to="/help/current/how_to_recieve">
      <ListWrapper>Получение</ListWrapper>
    </Link>
    <Link to="/help/current/how_to_return">
      <ListWrapper>Гарантия и возврат</ListWrapper>
    </Link>
  </Wrapper>
);

export default Header;
