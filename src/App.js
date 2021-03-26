import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drop from './components/DropDown/DropDown'

import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import imgExample from './assets/beats-headphones.png'

import Slider from './components/Slider/Slider'

import { ReactComponent as Logo } from '../src/assets/Brand.svg'
import { ReactComponent as Home } from '../src/assets/home-icon.svg'
import { ReactComponent as ArrowDown } from '../src/assets/chevron-down-icon.svg'
import { ReactComponent as Email } from '../src/assets/mail-icon.svg'
import { ReactComponent as Message } from '../src/assets/message-square-icon.svg'
import { ReactComponent as Check } from '../src/assets/check-square-icon.svg'
import { ReactComponent as Calendar } from '../src/assets/calendar-icon.svg'
import { ReactComponent as Star } from '../src/assets/star.svg'
import { ReactComponent as Bell } from '../src/assets/bell.svg'
import { ReactComponent as Search } from '../src/assets/search.svg'
import { ReactComponent as ChevronsRight } from '../src/assets/chevrons-right.svg'
import { ReactComponent as Settings } from '../src/assets/settings.svg'
import { ReactComponent as FiveStars } from '../src/assets/5-star.svg'
import { ReactComponent as FourStars } from '../src/assets/4-star.svg'
import { ReactComponent as ThreeStars } from '../src/assets/3-star.svg'
import { ReactComponent as ChevronDown } from '../src/assets/chevron-down.svg'
import { ReactComponent as Grid } from '../src/assets/grid.svg'
import { ReactComponent as List } from '../src/assets/list.svg'
import { ReactComponent as StarWhite } from '../src/assets/star-white.svg'
import { ReactComponent as Heart } from '../src/assets/heart.svg'
import { ReactComponent as ShoppingBag } from '../src/assets/shopping-bag.svg'


import userImg from '../src/assets/user.png'

import './App.css';


function App() {
  return (

    <section className="App">
      <div className="menu-vertical-section">
        <div className="menu-vertical">

          <Logo className="menu-vertical-logo" />

          <div className="area-selection">
            <div>
              <Home className="area-selection-home" />
              <h3>Área do cliente</h3>
            </div>
            <ArrowDown />
          </div>

          <div className="menu-vertical-apps">
            <h3 className="menu-vertical-apps-title">APPS</h3>

            <ul className="list-apps">
              <li><Email /> <h5>Email</h5></li>
              <li><Message /> <h5>Conversar</h5></li>
              <li><Check /> <h5>Todo</h5></li>
              <li><Calendar /> <h5>Calendário</h5></li>
            </ul>
          </div>


        </div>
      </div>

      <div className="dashboard">

        <div className="dashboard-navbar">
          <div className="dashboard-navbar-icons">
            <Check />
            <Message />
            <Email />
            <Calendar />
            <Star />

          </div>

          <div className="dashboard-navbar-infos">
            <Bell />
            <Search />

            <div className="dashboard-navbar-infos-user">
              <div >
                <h3>Maria Elza</h3>
                <h5>Cliente VIP</h5>
              </div>
              <img src={userImg} alt="User" />
            </div>
          </div>

        </div>

        <div className="bread-crumbs">

          <div className="bread-crumbs-title">
            <div className="bread-crumbs-title-div">
              <h3>Resultados</h3>
            </div>
            <div className="bread-crumbs-icons" >
              <Home />
              <ChevronsRight />
              <h5>Cursos</h5>
            </div>
          </div>

          <div className="bread-crumbs-settings">
            <Settings />
          </div>
        </div>

        <div className="sub-section-shop">


          <div className="subscribers-card-section">

            <div>
              <h3 className="subscribers-card-title">Filtros</h3>

              <div className="subscribers-card">
                <div className="subscribers-card-prices">
                  <h3 className="subscribers-card-prices-title">Preços</h3>

                  <FormGroup check>
                    <Label className="filter-prices" check>
                      <Input type="radio" name="radio1" />{' '}R$ 10
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-prices" check>
                      <Input type="radio" name="radio1" />{' '}R$ 10 - R$ 100
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-prices" check>
                      <Input type="radio" name="radio1" />{' '}R$ 100 - R$ 500
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-prices" check>
                      <Input type="radio" name="radio1" />{' '}R$ 500
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-prices" check>
                      <Input type="radio" name="radio1" />{' '}Todos
                      </Label>
                  </FormGroup>

                </div>

                <div>
                  <Slider />
                </div>

                <div className="subscribers-card-prices">
                  <h3 className="subscribers-card-prices-title">Categorias</h3>

                  <FormGroup check>
                    <Label className="filter-categories-label" check>
                      <div className="filter-categories">
                        <Input type="checkbox" name="radio1" />{' '}
                        <p>Érico Rocha</p>
                      </div>
                      <p>1920</p>
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-categories-label" check>
                      <div className="filter-categories">
                        <Input type="checkbox" name="radio1" />{' '}
                        <p>Desafio 6 em 7</p>
                      </div>
                      <p>1820</p>
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-categories-label" check>
                      <div className="filter-categories">
                        <Input type="checkbox" name="radio1" />{' '}
                        <p>Fórmula de lançamento</p>
                      </div>
                      <p>462</p>
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-categories-label" check>
                      <div className="filter-categories">
                        <Input type="checkbox" name="radio1" />{' '}
                        <p>Audios</p>
                      </div>
                      <p>120</p>
                    </Label>
                  </FormGroup>

                </div>

                <div className="subscribers-card-avaliation">
                  <h3 className="subscribers-card-prices-title">Avaliações</h3>

                  <FormGroup check>
                    <Label className="filter-categories-label" check>
                      <div className="filter-categories-star">
                        <FiveStars />
                      </div>
                      <p>8500</p>
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-categories-label" check>
                      <div className="filter-categories-star">
                        <FourStars />
                      </div>
                      <p>3250</p>
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="filter-categories-label" check>
                      <div className="filter-categories-star">
                        <ThreeStars />
                      </div>
                      <p>1120</p>
                    </Label>
                  </FormGroup>

                </div>
                <div className="sub-section-clean">
                  <button className="sub-section-clean-filter">LIMPAR FILTROS</button>
                </div>


              </div>
            </div>
          </div>

          <div className="section-result">

            <div className="section-result-options">
              <h3>200 resultados encontrados</h3>

              <div className="result-buttons">
                <button className="section-result-button">
                  <p>Listagem</p>
                  <ChevronDown />
                </button>

                <button className="section-result-button-mini">
                  <Grid />
                </button>

                <button className="section-result-button-mini">
                  <List />
                </button>
              </div>

            </div>
            <div className="submit-search">
              <input type="text" className="input-result" placeholder="Buscar"></input>
              <button className="submit-lente">
                <Search />
              </button>
            </div>

            <div className="product-section">
              <img src={imgExample} />
              <div className="product-section-description">
                <h3 className="product-section-description-title">FÓRMULA DE LANÇAMENTO</h3>
                <p className="product-section-description-autor">Por <b>Érico Rocha</b></p>
                <p className="product-section-description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                
                </p>
              </div>
              <div className="product-section-buttons">
                <div className="product-section-stars">
                  <div><h3>3.4</h3><StarWhite /></div>
                </div>

                <h3 className="product-section-value">R$ 2500</h3>

                <button className="product-section-button-heart">
                  <Heart />
                  <h3>AMEI</h3>
                </button>
                <button className="product-section-button-shopping"><ShoppingBag /> <h3>COMPRAR</h3> </button>
              </div>
            </div>

            <div className="product-section">
              <img src={imgExample} />
              <div className="product-section-description">
                <h3 className="product-section-description-title">FÓRMULA DE LANÇAMENTO</h3>
                <p className="product-section-description-autor">Por <b>Érico Rocha</b></p>
                <p className="product-section-description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="product-section-buttons">
                <div className="product-section-stars">
                  <div><h3>3.4</h3><StarWhite /></div>
                </div>

                <h3 className="product-section-value">R$ 2500</h3>

                <button className="product-section-button-heart">
                  <Heart />
                  <h3>AMEI</h3>
                </button>
                <button className="product-section-button-shopping"><ShoppingBag /> <h3>COMPRAR</h3> </button>
              </div>
            </div>

            <div className="product-section">
              <img src={imgExample} />
              <div className="product-section-description">
                <h3 className="product-section-description-title">FÓRMULA DE LANÇAMENTO</h3>
                <p className="product-section-description-autor">Por <b>Érico Rocha</b></p>
                <p className="product-section-description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="product-section-buttons">
                <div className="product-section-stars">
                  <div><h3>3.4</h3><StarWhite /></div>
                </div>

                <h3 className="product-section-value">R$ 2500</h3>

                <button className="product-section-button-heart">
                  <Heart />
                  <h3>AMEI</h3>
                </button>
                <button className="product-section-button-shopping"><ShoppingBag /> <h3>COMPRAR</h3> </button>
              </div>
            </div>

            <div className="product-section">
              <img src={imgExample} />
              <div className="product-section-description">
                <h3 className="product-section-description-title">FÓRMULA DE LANÇAMENTO</h3>
                <p className="product-section-description-autor">Por <b>Érico Rocha</b></p>
                <p className="product-section-description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="product-section-buttons">
                <div className="product-section-stars">
                  <div><h3>3.4</h3><StarWhite /></div>
                </div>

                <h3 className="product-section-value">R$ 2500</h3>

                <button className="product-section-button-heart">
                  <Heart />
                  <h3>AMEI</h3>
                </button>
                <button className="product-section-button-shopping"><ShoppingBag /> <h3>COMPRAR</h3> </button>
              </div>
            </div>

            <div className="product-section">
              <img src={imgExample} />
              <div className="product-section-description">
                <h3 className="product-section-description-title">FÓRMULA DE LANÇAMENTO</h3>
                <p className="product-section-description-autor">Por <b>Érico Rocha</b></p>
                <p className="product-section-description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="product-section-buttons">
                <div className="product-section-stars">
                  <div><h3>3.4</h3><StarWhite /></div>
                </div>

                <h3 className="product-section-value">R$ 2500</h3>

                <button className="product-section-button-heart">
                  <Heart />
                  <h3>AMEI</h3>
                </button>
                <button className="product-section-button-shopping"><ShoppingBag /> <h3>COMPRAR</h3> </button>
              </div>
            </div>

          </div>



        </div>

      </div>

    </section >

  );
}

export default App;
