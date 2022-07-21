import React, { Component } from "react";
import axios from "axios";
import Switch from "react-switch";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Select from "react-select";
import { FormattedMessage } from "react-intl";

const intl=JSON.parse(localStorage.getItem('intl'))

class Commander1 extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="product-details spad">
            <div id="centrer" className="col-lg-12 col-md-6" style={{ minHeight: "250px" }}>
              <br></br>

              <h3><FormattedMessage id="step1_title"/></h3>
              <div className="shoping__checkout mt-2 pb-0">

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="product__details__pic">
                      <div className="product__details__pic__item mb-0">
                        <h6  > <FormattedMessage id="step1_recuperer_a_la_cooperative"/> {" "}
                          <Switch onChange={this.props.handleChange1} checked={this.props.data.check1} height={20} width={48} /></h6><br></br>
                        {this.props.data.occasion !== "aid" ?
                          <>  {/** <h6> Me faire livrer en point relais {" "}
                          <Switch onChange={this.props.handleChange2} checked={this.props.data.check2} height={20} width={48} /></h6><br></br>
                      */}
                            <h6> <FormattedMessage id="step1_a_domicile"/> {" "}
                              <Switch onChange={this.props.handleChange3} checked={this.props.data.check3} height={20} width={48} /></h6><br></br>
                          </> : <>  <h6> <FormattedMessage id="step1_livraison_standard"/>  {" "}
                            <Switch onChange={this.props.handleChange5} checked={this.props.data.check5} height={20} width={48} /></h6><br></br>
                            {this.props.data.check5 ?
                              <div className=" ml-3">
                                <div class="form-check">
                                  <input checked={this.props.data.standard === "domicile"} onChange={this.props.onPaiementChanged} class="form-check-input" type="radio" name="standard" value="domicile" id="domicile" />
                                  <label style={localStorage.getItem("lg")=='ar'?{"marginRight":"25px"}:{}} class="form-check-label" for="domicile">
                                  <FormattedMessage id="step1_a_domicile"/></label>
                                </div>
                                <div class="form-check">
                                  <input checked={this.props.data.standard === "point_relais"} onChange={this.props.onPaiementChanged} class="form-check-input" type="radio" name="standard" value="point_relais" id="point_relais" />
                                  <label style={localStorage.getItem("lg")=='ar'?{"marginRight":"25px"}:{}} class="form-check-label" for="point_relais">
                                    <FormattedMessage id="step1_livrer_en_point_relais"/></label>
                                </div>
                                <br></br>
                              </div> : null}
                            <h6> <FormattedMessage id="step1_livraison_vip"/>  {" "}
                              <Switch onChange={this.props.handleChange4} checked={this.props.data.check4} height={20} width={48} /></h6><br></br>

                          </>}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="checkout__form">
                      <form action="#"   name="commander">
                        {this.props.data.check2 || this.props.data.check3 || this.props.data.check1 ?
                          <>    <div className="col-lg-12  col-md-12 ">

                            {this.props.data.occasion === "aid" ? /*
                      <select id="date" name="date" onChange={this.props.onPaiementChanged}>

                        {(() => {
                          const options = [];

                          for (let i = 1; i <= this.props.data.avant_aid; i++) {
                            options.push(<option value={i+" jours avant"}>{i} jours avant </option>);
                          }

                          return options;
                        })()}

                      </select>*/null : <>
                                <i className="fa fa-calendar-o" aria-hidden="true">{" "}<FormattedMessage id="step1_date_livraisn"/> {" "}</i>
                                <br></br>
                                <input type="date" min={this.props.data.date_min} defaultValue={this.props.data.date} onChange={this.props.onPaiementChanged} id="date" name="date" />

                              </>}
                            {this.props.data.check1 ? <>
                              <h6 className={this.props.data.occasion === "aid"
                                ? "  mb-2"
                                : "mb-2 mt-3"}><i class="fa fa-home fa-lg"></i>   <b><FormattedMessage id="step1_cooperative"/> </b>{" " + this.props.data.cooperative.nom}</h6>
                              <h6 className="mb-2"><i class="fa fa-map-marker fa-lg"></i>   <b><FormattedMessage id="step1_adresse"/> :</b>{" " + this.props.data.cooperative.adresse} </h6>

                              <h6 className="my-2">  <i class="fa fa-map"></i> <b><FormattedMessage id="step1_ville"/> :</b>{" " + this.props.data.cooperative.ville}  </h6>
                            </> : null}
                          </div> </> : null}


                        <div className="  row col-lg-12 col-md-12">
                          {this.props.data.check2 || this.props.data.check3 || this.props.data.check4 || this.props.data.check5 ?
                            <div className="col-lg-6 col-md-6 mt-2">
                              <i className="fa fa-map-o " aria-hidden="true">{" "}<FormattedMessage id="step1_ville_de_livraison"/> {" "}</i>
                              <FormattedMessage id="step1_ville">
                          {(placeholder) => (
                            <Select
                            value={this.props.data.selectedOptionVille}
                            onChange={this.props.handleChangeVille}
                            options={this.props.data.optionsVille}
                            placeholder={placeholder}
                            name="selectedOptionVille" />
                          )}
                        </FormattedMessage>
                              
                            </div> : null}
                          {(this.props.data.check2 || (this.props.data.check5 && this.props.data.standard === "point_relais")) ? (this.props.data.entrée_ville===false ? <div className="col-lg-6 col-md-6 mt-2">
                            <i className="fa fa-map-marker" aria-hidden="true">{" "}<FormattedMessage id="step1_point_relais_livraison"/> {" "}</i>
                            <FormattedMessage id="step1_point_de_relais">
                          {(placeholder) => (
                            <Select
                            value={this.props.data.selectedOptionPoint}
                            onChange={this.props.handleChangePoint}
                            options={this.props.data.optionsPoint}
                            placeholder={placeholder} />
                          )}
                        </FormattedMessage>
                            
                          </div> : null) : null}
                          {(this.props.data.check2 || (this.props.data.check5 && this.props.data.standard === "point_relais")) && this.props.data.entrée_ville === true && this.props.data.selectedOptionVille !== "" ?
                            <h6 style={{ color: "#bb2124", marginTop: "4px" }}><FormattedMessage id="step1_message_point_relais"/></h6>
                            : null}
                          {this.props.data.check3 || this.props.data.check4 || (this.props.data.check5 && this.props.data.standard === "domicile") ? <div className="col-lg-6  col-md-6 mt-2">
                            <i className="fa fa-map-marker " aria-hidden="true">{" "} <FormattedMessage id="step1_adresse"/> {" "}</i>
                            <br></br>
                            <FormattedMessage id="step1_adresse">
                          {(placeholder) => (
                            <textarea 
                            defaultValue={this.props.data.adresse} 
                            onChange={this.props.onPaiementChanged} 
                            className="w-100 h-75" name="adresse" 
                            placeholder={placeholder} />
                          )}
                        </FormattedMessage>
                            
                            </div>
                            : null}
                        </div>
                      </form>
                    </div>
                  </div>
              
                </div>





              </div>    {this.props.data.occasion === "aid" ?
                    <h6 style={{ color: "#bb2124",marginBottom:"10px"  }}>
                      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}<FormattedMessage id="step1_message_livraison"/></h6>
                    : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Commander1;
