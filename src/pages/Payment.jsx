import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Payment = () => {
  const [tradeInfo, setTradeInfo] = useState({
    id: '',
    merchantId: '',
    tradeInfo: '',
    tradeSha: '',
    version: '',
  });
  const { orderId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/api/newebpay/payment/${orderId}`, {
          credentials: 'include',
          mode: 'cors',
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Login failed.');
        console.log(data.data);
        setTradeInfo(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [orderId]);

  return (
    <>
      <div className='flex h-screen w-full flex-col items-center justify-center'>
        <h1>頁面跳轉中，請稍等</h1>
        <h3>訂單號碼 : {tradeInfo.MerchantOrderNo}</h3>

        <form name='Spgateway' className='flex flex-col' action={tradeInfo.PayGateWay} method='post'>
          <input type='text' name='MerchantID' value={tradeInfo.MerchantID} placeholder='MerchantID' />
          <input type='text' name='TradeInfo' value={tradeInfo.TradeInfo} placeholder='TradeInfo' />
          <input type='text' name='TradeSha' value={tradeInfo.TradeSha} placeholder='TradeSha' />
          <input type='text' name='Version' value={tradeInfo.Version} placeholder='Version' />
          <input type='text' name='MerchantOrderNo' value={tradeInfo.MerchantOrderNo} />
          <input type='text' name='Amt' value={tradeInfo.Amt} />
          <input type='text' name='ItemDesc' value={tradeInfo.ItemDesc} />
          <input type='text' name='TimeStamp' value={tradeInfo.TimeStamp} />
          <input type='text' name='Email' value={tradeInfo.Email} />
          <input type='text' name='NotifyUrl' value={tradeInfo.NotifyURL} />
          <input type='text' name='ReturnUrl' value={tradeInfo.ReturnURL} />
          <input type='text' name='ClientBackURL' value={tradeInfo.ClientBackURL} />
          <button type='submit' className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'>
            Payment
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
