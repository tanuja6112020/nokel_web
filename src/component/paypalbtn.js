import React, { Fragment, useEffect, useState } from "react";
import EndPoints from '../Screens/utils/apiEndPoints';
import { apiCall } from '../Screens/utils/httpClient';
import { GlobalSpinnerContext } from '../component/Context/GlobalSpinnerContext'
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import './modal.css';
import { useHistory } from 'react-router-dom';
const PaypalButton = ({ paymentData, selectedCurrency }) => {
    const [visiblemodal, setVisibleModel] = useState(false);
    const [orderID, setOrderID] = useState(false);
    const { setIsLoading } = React.useContext(GlobalSpinnerContext);
    const [Couponcode, setCouponcode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');
    const [couponDays,setCoupondays]=useState(0);
    const [couponamount,setCouponamount]=useState(0);
    const [finalamount,setFinalAmount]=useState(paymentData.plan_price);
    const history = useHistory();
    


    
    async function paymentDone(params) {
        setIsLoading(true);
        try {
            const val = {
                'plan_id': paymentData.id,
                'transaction_id': params.id,
                'payment_date': params.create_time,
                'amount': finalamount,
                'payment_detail': JSON.stringify(params),
                'order_id': params.id,
                'coupon_days':couponDays,
                "coupon_code":Couponcode,
            }
            const { data } = await apiCall('post', EndPoints.PAYMENT, val)
            if (data.status === 200) {

                await localStorage.setItem('payment', 1);
                getProfile()
                history.push('/myprofile');

            } else if (data.status === 201) {
                setIsLoading(false)
            }
            else if (data.status === 401) {
                setIsLoading(false)

            }
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    async function getProfile() {
        try {
            const { data } = await apiCall('post', EndPoints.GETUSERPROFILE)
            if (data.status === 200) {
                const userdata = data.data
                await localStorage.setItem('payment', userdata.plan_status);
                await localStorage.setItem('AuthData', JSON.stringify(userdata));
                await localStorage.setItem('userprofileimg', userdata.profile);
                setIsLoading(false)
                window.location.reload();
            } else {
                setIsLoading(false)
            }

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    function createOrder(data, actions) {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: finalamount,
                        },
                    },
                ],
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    }

    function onApprove(data, actions) {
        return actions.order
            .get()
            .then((orderID) => {
                return actions.order.capture().then(function () {
                    paymentDone(orderID);
                });
            });
    }

   async function handleCoupon()
    {
      try{
        const datas = {
          'coupon_code': Couponcode,
        }      
        const {data}= await apiCall('post', EndPoints.APPLYCOUPON, datas);
        if (data.status === 200)
        {
           setErrorMessage("");
           setsuccessMessage("Coupon valid");
           setCoupondays(data.data.days_benefit);
           setCouponamount(data.data.price_benefit);
           var amount = (finalamount-data.data.price_benefit)
           setFinalAmount(amount);
           

        } else if (data.status === 201) 
        {
            setsuccessMessage("");
            setErrorMessage(data.message)
            setCoupondays(0);
            setCouponamount(0);
            
        }
      }catch(error)
      { 
        console.log("error",error);
      }
      
    }

    const getfreemembership = async()=>
    {
        setIsLoading(true);
        try {
            const val = {
                'plan_id': paymentData.id,
               
            }
            const { data } = await apiCall('post', EndPoints.PAYMENT, val)
            console.log("data",data)
            if (data.status === 200) {
                await localStorage.setItem('payment', 1);
                history.push('/myprofile');
                getProfile()

            } else if (data.status === 201) {
                setIsLoading(false)
            }
            else if (data.status === 401) {
                setIsLoading(false)

            }
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
            
    }

    const PaystackHookExample = () => {

        return (
             <Fragment>
            <div className="sign__group" style={{marginTop:20}}>
                <input
                    type="text"
                    name="Couponcode"
                    className="sign__input"
                    value={Couponcode}
                    placeholder="Coupon code(Optional)"
                    onChange={(event) => setCouponcode(event.target.value)} />

                <a                  
                 style={{ color: "#11BFBE",cursor: "pointer" }}
                 onClick={() => handleCoupon()}
                 
              
                className="price__btn">Apply Coupon</a>

                <div className="errorTxt" style={{color:'red'}}>
                    {errorMessage}
                </div>
                <div className="errorTxt" style={{color:'green'}}>
                    {successMessage}
                </div>
            </div>
            {
                 paymentData.id ===0 ?                
                <div className="sign__group">
                <a
                    style={{ color: "#11BFBE",cursor: "pointer"}}
                
                    onClick={() => getfreemembership()}
                    className="price__btn">Choose Plan</a>
                </div>:
                <div className="sign__group">
                <a
                    style={{ color: "#11BFBE",cursor: "pointer"}}
                
                    onClick={() => setVisibleModel(true)}
                    className="price__btn">Choose Plan</a>
                </div>

            }
          </Fragment>
        );

    };

    return (
        <div
            style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}>
            <PaystackHookExample

            />
            {visiblemodal ?
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setVisibleModel(false)}>&times;</span>
                        <label className="d-block" style={{ color: "white" }}>Amount: {selectedCurrency} {finalamount}</label>
                          <PayPalScriptProvider options={{ "client-id": "AT4EfS2dlIaPC4mHIBWoZHIWg8fqaKJ0pyb63vVqz3PX33n3_fQQQWbXvcbDZfvaMnU-5WIJ4O7-QJbN",currency:selectedCurrency }} > 
                         {/* <PayPalScriptProvider options={{ "client-id": "Acsuy_NdIA6-zoQrBAIpTTgrAf8D5VVyc3l2kSdKsuza8fwwL7dE-w4FOY1zeon0FifliBwZqG88kWEF",currency:selectedCurrency }} > */}
                        <PayPalButtons createOrder={createOrder}
                            forceReRender={finalamount}
                            onApprove={onApprove}
                        />
                        </PayPalScriptProvider>
                    </div>
                </div> : null
            }

        </div>
    );
}


export default PaypalButton;