import React from 'react';

export const Message = ({ resp }) => {
  const { status, message } = resp;
  const clsNm =
    status === 'success' ? 'alert alert-success' : 'alert alert-danger';
  return message ? <div className={clsNm}>{message} </div> : '';
};

export const Spinner = () => {
  return (
    <div class='d-flex justify-content-center text-primary fs-1 '>
      <div
        class='spinner-border'
        role='status'
        style={{ width: '5rem', height: '5rem' }}
      >
        <span class='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};
