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
           
            <div className="row rowTop">  
                <div className="col-sm-3 settingText ">Статус</div>
                <div className="col-md-6 mb-3 settingText">активен</div>
            </div>

            <div className="row rowTop">  
                <div className="col-sm-3 settingText">Включен</div>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-dark active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
                    </label>
                    <label className="btn btn-dark ">
                    <input type="radio" name="options" id="option2" autocomplete="off"/> No
                    </label>
                </div>
            </div>    
            <div className="row rowTop">  
                <div className="col-sm-3 settingText">Название</div>
                <div className="col-md-6 mb-3">
                    <input className="formControl" type="text" placeholder=""/>
                    <span className="focus-input100"></span>
                </div>
            </div>


            <div className="row rowTop">
                <div className="col-sm-3 settingText">Telegram-токен бота</div>
                <div className="col-md-6 mb-3">
                    <input className="formControl" type="text" placeholder=""/> 
                    <span className="focus-input100"></span>
                </div> 
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Язык</div>
                <div className="col-md-4 mb-3">
                    <select className="formControl" id="exampleFormControlSelect1">
                        <option className="selectDark">English</option>
                        <option className="selectDark">French</option>
                        <option className="selectDark">Russian</option>
                        <option className="selectDark">Uzbek</option>
                        <option className="selectDark">Japan</option>
                    </select>
                    
                </div> 
            </div>

            <div className="row rowTop">  
                <div className="col-sm-3 settingText">Описание</div>
                <div className="col-md-8 mb-3">
                    <textarea className="formControl" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <span className="focus-input100 mt"></span>  
                </div>
            </div>

            <div className="row rowTop">  
                <div className="col-sm-3 settingText">Приветствие</div>
                <div className="col-md-8 mb-3">
                    <textarea className="formControl" id="exampleFormControlTextarea1" rows="3" placeholder=""></textarea>
                    <span className="focus-input100 mt"></span>  
                </div>
            </div>
            <div className="row rowTop">
                <div className="col-sm-3 settingText">Договор публичной оферты</div>
                <div className="col-md-6 mb-3">
                    <input className="formControl " type="text" placeholder=""/> 
                    <span className="focus-input100"></span>   
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Валюта магазина</div>
                <div className="col-md-4 mb-3">
                    <select className="formControl" id="exampleFormControlSelect1">
                        <option className="selectDark">Sum</option>
                        <option className="selectDark">EUR</option>
                    </select>   
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Тема</div>
                <div className="col-md-4 mb-3">
                    <select className="formControl" id="exampleFormControlSelect1">
                        <option className="selectDark">Magazin</option>
                        <option className="selectDark">Food</option>
                        <option className="selectDark">Delivery</option>
                    </select>   
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Часовой пояс</div>
                <div class="col-md-4 mb-3">
                <select className="formControl">
                        <option className="selectDark">UK</option>
                        <option className="selectDark">Food</option>
                        <option className="selectDark">Delivery</option>
                    </select>

                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Телефон</div>
                <div className="col-md-6 mb-3">
                    <input className="formControl " type="text" placeholder=""/> 
                    <span className="focus-input100"></span>   
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Ссылка</div>
                <div className="col-md-6 mb-3">
                    <input className="formControl " type="text" placeholder=""/> 
                    <span className="focus-input100"></span>   
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Оператор в Телеграм</div>
                <div className="col-md-6 mb-3">
                    <input className="formControl " type="text" placeholder=""/>  
                    <span className="focus-input100"></span>  
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Минимальная сумма заказа</div>
                <div className="col-md-6 mb-3">
                    <input className="formControl" type="text" placeholder=""/> 
                    <span className="focus-input100"></span>       
                </div>
               
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Товаров на странице</div>
                <div className="col-md-4 mb-3">
                    <select className="formControl" id="exampleFormControlSelect1">
                        <option className="selectDark" >1</option>
                        <option className="selectDark">5</option>
                        <option className="selectDark">15</option>
                        <option className="selectDark">12</option>
                        <option className="selectDark">11</option>
                    </select>  
                </div> 
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Группировать товары</div>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-dark active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
                    </label>
                    <label className="btn btn-dark">
                    <input type="radio" name="options" id="option2" autocomplete="off"/> No
                    </label>
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Заглушка для товаров без изображения  </div>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-dark active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
                    </label>
                    <label className="btn btn-dark">
                    <input type="radio" name="options" id="option2" autocomplete="off"/> No
                    </label>
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Принимать промокоды</div>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-dark active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
                    </label>
                    <label className="btn btn-dark">
                    <input type="radio" name="options" id="option2" autocomplete="off"/> No
                    </label>
                </div>
            </div>
            <div className="row rowTop">
                <div className="col-sm-3 settingText">Показывать число товаров в категории</div>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-dark active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
                    </label>
                    <label className="btn btn-dark">
                    <input type="radio" name="options" id="option2" autocomplete="off"/> No
                    </label>
                </div>
            </div>

            <div className="row rowTop">
                <div className="col-sm-3 settingText">Отправлять письма простым текстом</div>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-dark active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
                    </label>
                    <label className="btn btn-dark">
                    <input type="radio" name="options" id="option2" autocomplete="off"/> No
                    </label>
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
          

          .btn{
            width:80px;
            
          }
          
          .btn:first-child{
              margin-left:15px;
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
            color:rgba(255, 255, 255, 0.8);
        }
        
      `}</style>
    </MainLAyout>
  )
}
