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
        <div className="centreItem">
            <h3>Ваш тарифный план: Персональный</h3>
            <p className="tarifInfo space"> Ограничения тарифа:</p>
            <p className="tarifInfo">
                Количество активных товаров: 20<br/>
                Подпись botobot: Да<br/>
                HTTP-уведомления: Нет<br/>
                Доступ к API: Нет
            </p>
        </div>
        <div className="tabContainer">            
            <table class="table table-striped">
                <tbody>
                <tr>
                    <td>Стартап</td>
                    <td>30 дней</td>
                    <td>640 ₽</td>
                    <td><button type="button" class="btn btn-success">Оплатить</button></td>
                </tr>
                <tr>
                    <td>Стартап</td>
                    <td>30 дней</td>
                    <td>640 ₽</td>
                    <td><button type="button" class="btn btn-success">Оплатить</button></td>
                </tr>
                <tr>
                    <td>Стартап</td>
                    <td>30 дней</td>
                    <td>640 ₽</td>
                    <td><button type="button" class="btn btn-success">Оплатить</button></td>
                </tr>
                <tr>
                    <td>Стартап</td>
                    <td>30 дней</td>
                    <td>640 ₽</td>
                    <td><button type="button" class="btn btn-success">Оплатить</button></td>
                </tr>
                <tr>
                    <td>Стартап</td>
                    <td>30 дней</td>
                    <td>640 ₽</td>
                    <td><button type="button" class="btn btn-success">Оплатить</button></td>
                </tr>
                <tr>
                    <td>Стартап</td>
                    <td>30 дней</td>
                    <td>640 ₽</td>
                    <td><button type="button" class="btn btn-success">Оплатить</button></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="tarifCards">
            <div className="card tarifCard">
            <h3>Персональный</h3>
                <h5>бесплатно</h5>
                <strong>Ограничения тарифа:</strong>
                <ul>
                    <li>Количество активных товаров:<b>20</b></li>
                    <li>Подпись botobot:<b>+</b></li>
                    <li>HTTP-уведомления: <b>-</b></li>
                    <li>Доступ к API: <b>-</b></li>
                </ul>
            </div>
            <div className="card tarifCard">
            <h3>Стартап</h3>
                <h5>640 ₽/месяц<br/>480 ₽/месяц (при оплате за год)</h5>
                <strong>Ограничения тарифа:</strong>
                <ul>
                    <li>Количество активных товаров:<b>200</b></li>
                    <li>Подпись botobot:<b>-</b></li>
                    <li>HTTP-уведомления: <b>-</b></li>
                    <li>Доступ к API: <b>-</b></li>
                </ul>
            </div>
            <div className="card tarifCard">
            <h3>Бизнес</h3>
                <h5>1720 ₽/месяц<br/>
                    1290 ₽/месяц (при оплате за год)
                </h5>
                <strong>Ограничения тарифа:</strong>
                <ul>
                    <li>Количество активных товаров:<b>5000</b></li>
                    <li>Подпись botobot:<b>-</b></li>
                    <li>HTTP-уведомления: <b>+</b></li>
                    <li>Доступ к API: <b>+</b></li>
                </ul>
            </div>
            <div className="tarifCard card ">
            <h3>Безлимитный</h3>
                <h5>5760 ₽/месяц<br/>
                    4320 ₽/месяц (при оплате за год)
                </h5>
                <strong>Ограничения тарифа:</strong>
                <ul>
                    <li>Количество активных товаров:<b>Без ограничений</b></li>
                    <li>Подпись botobot:<b>+</b></li>
                    <li>HTTP-уведомления: <b>-</b></li>
                    <li>Доступ к API: <b>-</b></li>
                </ul>
            </div>


        </div>

    </div>
</div>
</main>

      

      <style jsx>{`
      .centreItem, td,.tarifCard{
          text-align:center;
      }
      td{
          vertical-align:middle;
          padding:8px;
          border:none;
      }
      .tabContainer{
        height:auto;
        background-color:white;
        border:1px solid #dee2e6;
        margin:15px;
        padding:20px;
        box-shadow:box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
                               0 0px 2px 0 rgba(0, 0, 0, 0.12);

      }
      .tarifCards{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .tarifCard{
        border: 2px solid #f89331;
        margin: 15px 10px;
        flex-basis: 240px;
        padding: 10px;
        line-height:1.5;
      }
      @media only screen and (max-width: 1030px)
        .tarifCard {
        min-width: calc(50% - 30px);
        }
   
      .space{
          margin-bottom:10px;
      }
      .tarifInfo{
        font-size: 16px;
        line-height: 150%;
        font-weight:500;
      }
      ul{
          list-style:none;
          margin-left:-35px;
      }
      `}</style>
    </MainLAyout>
  )
}
