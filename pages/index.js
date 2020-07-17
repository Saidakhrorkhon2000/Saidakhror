import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'

export default function Settings() {
  return (
    <MainLAyout>
      <Head>
        
      </Head>

      <main>
     {/* main part settings */}
     <div className="homeContainer">
         <div className="tableBox">
         <div className="delTop">
                <div class="alert alert-success alert-dismissible">
              <button type="button" className="close" data-dismiss="alert">&times;</button>
              Saved
            </div>
                <h1 className="settingHead rowTop">Settings</h1>
                <div className="row rowTop">  
                    <div className="col-sm-3 settingText">Status</div>
                    <div class="col-md-6 mb-3">Active</div>
                </div>

                <div className="row rowTop">  
                    <div className="col-sm-3 settingText">Название</div>
                    <div className="col-md-6 mb-3">
                    <input className="form-control " type="text" placeholder="Default input"/>
                    </div>
                </div>

                
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Telegram-токен бота</div>
                    <div className="col-md-6 mb-3">
                    <input className="form-control" type="text" placeholder="Telegram-токен бота"/> 
                    </div> 
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Язык</div>
                    <div className="col-md-4 mb-3">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>English</option>
                            <option>French</option>
                            <option>Russian</option>
                            <option>Uzbek</option>
                            <option>Japan</option>
                        </select>  
                        </div> 
                </div>
                <div className="row rowTop">  
                    <div className="col-sm-3 settingText">Описание</div>
                    <div className="col-md-8 mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="row rowTop">  
                    <div className="col-sm-3 settingText">Приветствие</div>
                    <div className="col-md-8 mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Welcome!"></textarea>
                </div>
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Договор публичной оферты</div>
                    <div className="col-md-6 mb-3">
                    <input className="form-control " type="text" placeholder="Договор публичной оферты"/>  
                </div>
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Валюта магазина</div>
                    <div className="col-md-4 mb-3">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Sum</option>
                            <option>EUR</option>
                        </select>   
                        </div>
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Тема</div>
                    <div className="col-md-4 mb-3">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Magazin</option>
                            <option>Food</option>
                            <option>Delivery</option>
                        </select>   
                        </div>
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Часовой пояс</div>
                    
                        <div class="col-md-4 mb-3">
                        <select class="custom-select" id="validationTooltip04" required>
                          <option >Choose...</option>
                          <option>...</option>
                        </select>
                        
                      </div>
                </div>

                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Телефон</div>
                    <div className="col-md-6 mb-3">
                    
                    <input className="form-control " type="text" placeholder="Ссылка"/>  
                    
                    </div>
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Ссылка</div>
                    <div className="col-md-6 mb-3">
                    <input className="form-control " type="text" placeholder="Ссылка"/>  
                </div>
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Оператор в Телеграм</div>
                    <div className="col-md-6 mb-3">
                    <input className="form-control " type="text" placeholder="Оператор в Телеграм"/>  
                </div>
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Минимальная сумма заказа</div>
                    <div className="col-md-6 mb-3">
                    <input className="form-control " type="text" placeholder="30.000 sum"/>  
                </div>
                </div>s
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Товаров на странице</div>
                    <div className="col-md-4 mb-3">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>5</option>
                            <option>15</option>
                            <option>12</option>
                            <option>11</option>
                        </select>  
                        </div> 
                </div>
                <div className="row rowTop">
                    <div className="col-sm-3 settingText">Товаров на странице</div>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                          
                          </div>
                   
                </div>
                </div>
            </div>
            </div>
      </main>

      

      <style jsx>{`
      

        // main part settings 
        .homeContainer {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
         
            
          }
        .settingHead{
            
            font-size:40px;
            font-weight:400;
        }
        .rowTop{
            margin-top:20px;
            
        }
        .settingText{
            font-weight:600;
            font-size:16px;
            margin-top:auto;
            margin-bottom:auto; 
        }
      `}</style>
    </MainLAyout>
  )
}
