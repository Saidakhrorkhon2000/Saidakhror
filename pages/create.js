import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'

export default function Create() {

  return (
    <MainLAyout>
      <Head>
        
      </Head>

    <main >
        <div className="homeContainer">
            
            <form className="tableBox">
            <div className="createForm">
              <label>Type</label>
            <select className="custom-select aForm">
            <option >Delivery</option>
            <option >Takeaway</option>
          </select>
          <p className="form-text text-muted">От типа доставки зависит процесс заказа</p>
            </div>
            <div className="createForm">
              <label>Name</label>
              <input className="form-control aForm " type="text" placeholder="Default input"/>
          
          <p className="form-text text-muted">Отображается пользователю</p>
            </div>
            <div className="createForm">
              <label>Cost</label>
              <input className="form-control aForm " type="text" placeholder="Default input"/>
          
          <p className="form-text text-muted">Будет добавено к сумме заказа</p>
            </div>
            
            <div className="createForm">
              <label>Minimum cost</label>
              <input className="form-control aForm " type="text" placeholder="Default input"/>
          
          <p className="form-text text-muted">Доставка будет доступна клиенту начиная с этой суммы</p>
            </div>
            <div className="createForm">
              <label>Tarif</label>
              <textarea class="form-control aForm" ></textarea>
          
          <p className="form-text text-muted">Отображается пользователю</p>
            </div>

            <div className="createForm">
              <label>Запрашивать поля</label>
              <div class="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />Олувчи
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />Телефон
                  </label>
                </div>
                <div class="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />Манзил
                  </label>
              </div>
              <div class="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />Вақт
                  </label>
              </div>
              <div className="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" className="form-check-input" />Шарҳ
                  </label>
              </div>
          
          <p className="form-text text-muted">Отображается пользователю</p>
            </div>

            
            
            <div className="createForm">
              <label>Фаол</label>
            <select className="custom-select aForm">
            <option >Ha</option>
            <option >Yo'q</option>
          </select>
          <p className="form-text text-muted">От типа доставки зависит процесс заказа</p>
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
