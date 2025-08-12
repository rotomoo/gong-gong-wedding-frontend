import React, { useState } from 'react';
import { CreditCardIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

function PaymentModal({ service, paymentInfo, onClose, onConfirm }) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (!service) return null;

  const serviceName = service.proposerName || service.name;

  const handlePayment = () => {
    onConfirm(paymentMethod, paymentInfo.amount);
  }

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-2xl mb-4">{paymentInfo.title}</h3>
        <div className="divider"></div>
        <div className="space-y-4">
          <p><span className="font-semibold">서비스:</span> {serviceName}</p>
          <p><span className="font-semibold">총 금액:</span> {paymentInfo.totalPrice.toLocaleString()}원</p>
          {paymentInfo.depositPaid > 0 && (
            <p className="text-gray-500"><span className="font-semibold">기결제 계약금:</span> -{paymentInfo.depositPaid.toLocaleString()}원</p>
          )}
          <p className="text-primary font-bold text-lg"><span className="font-semibold">결제할 금액:</span> {paymentInfo.amount.toLocaleString()}원</p>
        </div>
        <div className="divider">결제 수단 선택</div>
        <div className="flex flex-col gap-4">
          <div 
            className={`p-4 border-2 rounded-lg cursor-pointer ${paymentMethod === 'card' ? 'border-primary bg-primary/10' : 'border-base-300'}`}
            onClick={() => setPaymentMethod('card')}
          >
            <div className="flex items-center">
              <CreditCardIcon className="h-6 w-6 mr-3 text-primary"/>
              <span className="font-semibold">신용카드</span>
            </div>
          </div>
          <div 
            className={`p-4 border-2 rounded-lg cursor-pointer ${paymentMethod === 'local' ? 'border-primary bg-primary/10' : 'border-base-300'}`}
            onClick={() => setPaymentMethod('local')}
          >
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-6 w-6 mr-3 text-green-500"/>
              <div>
                <span className="font-semibold">지역화폐 (예: 서울사랑상품권)</span>
                <p className="text-xs text-gray-500">민생회복 소비쿠폰도 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-action mt-6">
          <button onClick={handlePayment} className="btn btn-primary w-full">{paymentInfo.amount.toLocaleString()}원 결제하기</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
