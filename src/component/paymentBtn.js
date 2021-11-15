import React, {  useEffect,useState,Fragment } from "react";
import EndPoints from '../Screens/utils/apiEndPoints';
import { apiCall } from '../Screens/utils/httpClient';
import { useHistory } from 'react-router-dom';
import { GlobalSpinnerContext } from '../component/Context/GlobalSpinnerContext'
import { usePaystackPayment } from 'react-paystack';

const PaypalButton = ({ paymentData,email,subscription}) => {
    const { setIsLoading } = React.useContext(GlobalSpinnerContext)
    const [Couponcode, setCouponcode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');
    const [couponDays,setCoupondays]=useState(0);
    const [couponamount,setCouponamount]=useState(0);
    const [finalamount,setFinalAmount]=useState(paymentData.plan_price);
    const [userdata, setUserdata] = useState({});
       const history = useHistory();
    const config = {
        reference: (new Date()).getTime(),
        email: email,
        amount: paymentData.plan_price*100,
       // publicKey: 'pk_test_d0cdc5815eadbaa257a866dd4f9478722c3d9f05',
        publicKey: 'pk_live_46b7ccf8af71c7bde0c74e8b788d5499b3706020',
        
    };
    useEffect(() => {
       
        return () => {
        }
    }, [])
    async function paymentDone(params) {
        setIsLoading(true)
        var today = ("0" + new Date().getDate()).slice(-2) + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + new Date().getFullYear()
        try {
            const val = {
                'plan_id': paymentData.id,
                'transaction_id': params.transaction,
                'payment_date': today,
                'amount': finalamount,
                'payment_detail': JSON.stringify(params),
                'order_id': params.reference,
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

    const getMonthlySubscription = async ()=>
    {
        setIsLoading(true);
        try {
            const params = {
                'plan_id': paymentData.id,
                'email': email,
                'amount':finalamount,
                'paystrack_plan_id': paymentData.paystrack_plan_id,
            }
            const { data } = await apiCall('post', EndPoints.CREATESUBSCRIPTION, params)
            if (data.status === 200) {
                await localStorage.setItem('access_code',data.data.data.access_code);
                await localStorage.setItem('reference',data.data.data.reference);
                window.open(
                    data.data.data.authorization_url,
                   // '_blank' // <- This is what makes it open in a new window.
                );
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

    async function getProfile() {
        try {
            const { data } = await apiCall('post', EndPoints.GETUSERPROFILE)
            if (data.status === 200) {
                const userdata = data.data
                setUserdata(userdata);
                await localStorage.setItem('payment', userdata.plan_status);
                await localStorage.setItem('AuthData', JSON.stringify(userdata));
                await localStorage.setItem('userprofileimg', userdata.profile);
                setIsLoading(false)
                window.location.reload();
            } else {
                alert(JSON.stringify(data))
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    const onSuccess = (reference) => {
         console.log("reference",reference);
        paymentDone(reference)
    };

    const onClose = () => {
        console.log('closed')
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
           setsuccessMessage("Valid Coupon");
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

    const PaystackHookExample = () => 
    {
        const initializePayment = usePaystackPayment(config);
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
            {/* {
                subscription ?   */}
                <div className="sign__group">
                <a
                    style={{ color: "#11BFBE",cursor: "pointer"}}
                    onClick={() => getMonthlySubscription()}
                    className="price__btn">Choose Plan</a>
                </div>:
                <div className="sign__group">      
            {/* <a
                 style={{ color: "#11BFBE",cursor: "pointer" }}
                 onClick={() => {
                 initializePayment(onSuccess, onClose)
                 }}
                className="price__btn">Choose Plan</a> */}
            </div>

            {/* } */}
            
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
        </div>
    );
}


export default PaypalButton;