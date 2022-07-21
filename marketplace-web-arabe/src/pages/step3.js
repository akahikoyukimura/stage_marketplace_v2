import React, { Component } from "react";


import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const intl=JSON.parse(localStorage.getItem('intl'))
class Commander3 extends Component {
  constructor(props) {
    super(props);
  }


  render() {


    return (
      <div>
        <div className="container">
          <div className="product-details spad">
            {this.props.validation()[0]  ? (<div id="centrer" className="col-lg-12 col-md-6">
              <br></br>
              <h3><FormattedMessage id="multistep_moyens_de_paiement"/>:</h3>
              <div className="shoping__checkout mt-2 pb-0">

                <div className="form-check">
                  <input checked={this.props.data.paiement == "virement"} onChange={this.props.onPaiementChanged} className="form-check-input" type="radio" name="paiement" id="virement" value="virement" />
                  <label style={localStorage.getItem("lg")=='ar'?{"marginRight":"25px"}:{}} className="form-check-label" htmlFor="virement">
                    <b> <FormattedMessage id="step2_virement_bancaire"/></b>
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input checked={this.props.data.paiement == "transfert"} onChange={this.props.onPaiementChanged} className="form-check-input" type="radio" name="paiement" id="transfert" value="transfert" />
                  <label style={localStorage.getItem("lg")=='ar'?{"marginRight":"25px"}:{}} className="form-check-label" htmlFor="transfert">
                    <b><FormattedMessage id="step3_par_agence"/></b>
                  </label>
                </div>
              </div>
              <span><small><FormattedMessage id="step3_frais_transport"/></small></span>
              <br></br>
              <div className="form-check mt-5">
                <input id="monCheck" checked={this.props.data.checked} className="form-check-input" type="checkbox" value="" id="condition" onChange={this.props.onChangecheck} />
                <label style={localStorage.getItem("lg")=='ar'?{"marginRight":"25px"}:{}} className="form-check-label" htmlFor="condition">
                  <FormattedMessage id="step3_accepte"/>
  </label>
              </div>
            </div>
            ) : null}
          </div>{console.log(this.props.data.Commande)}
          {this.props.data.checked && this.props.data.paiement != null ? <Link
            to={{
              pathname: "/AlerteCommande",
              state: {
                id: this.props.data.Commande,
              },
            }}
          >
            {" "}
            <a
              style={{ borderColor: 'black' }}
              id=""
              className={localStorage.getItem("lg")=="ar"?"primary-btn float-left text-white":"primary-btn float-right text-white"}
              disabled
            >
              <FormattedMessage id="step3_valider"/>
                        </a>{" "}
          </Link> : null}
        </div>
      </div>
    );
  }
}

export default Commander3;
