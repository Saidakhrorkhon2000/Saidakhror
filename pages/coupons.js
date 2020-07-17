import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'

export default function Coupons() {

  return (
    <MainLAyout>
      <Head>
        
      </Head>

    <main >
        <div className="homeContainer">
            
            <form className="tableBox">
            
            <div className="createForm">
              <label>Name</label>
              <input className="form-control aForm " type="text" placeholder="Default input"/>
          <p className="form-text text-muted">От типа доставки зависит процесс заказа</p>
            </div>
            
            <div className="createForm">
              <label>Code</label>
              <input className="form-control aForm " type="text" placeholder="Default input"/>
          <p className="form-text text-muted">Отображается пользователю</p>
            </div>

            <div className="createForm">
              <label>Active</label>
              <select className="custom-select">
                        <option >Yes</option>
                        <option >No</option>
                    </select>
          <p class="form-text text-muted">Будет добавено к сумме заказа</p>
            </div>

            <h3> Conditions</h3>
            <div className="createForm">
              <label>Minimum cost</label>
              <input className="form-control aForm " type="text" placeholder="Default input"/>
          <p className="form-text text-muted">Доставка будет доступна клиенту начиная с этой суммы</p>
            </div>

            <div className="createForm">
              <label>Num of coupons</label>
              <textarea className="form-control aForm" placeholder='1'></textarea> 
          <p className="form-text text-muted">Отображается пользователю</p>
            </div>
            <div className="createForm">
              <label>Num of coupons per customer</label>
              <textarea className="form-control aForm" placeholder='1'></textarea> 
          <p className="form-text text-muted">Отображается пользователю</p>
            </div>
            <h3> Coupon</h3>
            <div className="createForm">
              <label>Coupon</label>
              <select className="custom-select">
                        <option >%</option>
                        <option >money</option>
                    </select>
            </div>
            <div className="createForm">
              <label>Amount</label>
              <textarea class="form-control aForm" placeholder='0'></textarea> 
          <p className="form-text text-muted">Отображается пользователю</p>
            </div>
            <div className="createForm">
              <label>Active until</label>
              <select className="custom-select">
                        <option >1</option>
                        <option >2</option>
                    </select>
          
                </div>
                <div className="createForm">
          <button type="submit" className="btn btn-primary btn-lg">Save</button>
          <button type="reset" className="btn btn-light btn-lg">Back</button>
          </div>
            
            
           
            </form>
            
            
            
            
        </div>
    </main>

      

      <style jsx>{`
       
    .rowTop{
        margin-top:20px;
        
    }
    .btn{
      width:150px;
      margin-left:15px;
    }
   .createForm{
     margin:10px;
   }
   .aForm{
     border:none;
     border-bottom:1px solid gray;
   }
   

      `}</style>
    </MainLAyout>
  )
}
