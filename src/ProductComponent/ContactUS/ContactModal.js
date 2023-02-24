import React from 'react';

const ContactModal = () => {
    return (
        <div className='text-black my-15 mb-15'>
            {/* The button to open modal */}
{/* <label htmlFor="my-modal-4" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">

  <label className="modal-box relative" htmlFor="">
    <div className='grid justify-end'>
    <label htmlFor="my-modal-4" className="btn   btn-sm btn-circle ">✕</label>
    </div>

   
    <div>
        <div className='flex justify-between my-3 font-bold'> 
           <p> Mofassl</p>
           <p> 0036478374838</p>
        </div>
        <div className='flex justify-between my-3 font-bold'> 
           <p> Hafize</p>
           <p> 00364783738748</p>
        </div>
        <div className='flex justify-between my-3 font-bold'> 
           <p> Nor Alom</p>
           <p> 0036478787897</p>
        </div>
        <div className='flex justify-between my-3 font-bold'> 
           <p> Tojayel</p>
           <p> 0036473232323</p>
        </div>
        <div className='flex justify-between my-3 font-bold'> 
           <p>Tawhid Mia</p>
           <p> 0036478376565</p>
        </div>
        <div className='flex justify-between my-3 font-bold'> 
           <p> Tamzid Mia</p>
           <p> 0036478376565</p>
        </div>
    </div>
    <label htmlFor="my-modal-4" className="btn my-5 ">Close</label>
  </label>
</label>
        </div>
    );
};

export default ContactModal;