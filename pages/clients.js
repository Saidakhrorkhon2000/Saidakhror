import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'

export default function Clients() {
  return (
    <MainLAyout>
      <Head>
        
      </Head>

    <main >
        <div className="homeContainer">
        <h3 className="rowTop">Clients</h3>
        
        <div className="tableBox"> 
        <div className="delTop">
            <div className="table-responsive  rowTop">
                <table className="table ">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                        <th>Рассылка</th>
                        <th>Первое обращение</th>
                        <th>Последнее обращение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    
                        </tr>
                        <tr>
                        <td colspan="7"> Not Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </main>

      

      <style jsx>{`
       
    .rowTop{
        margin-top:20px;
        margin-left:20px;
        
    }
    tr{
        border-bottom:2px solid #dee2e6;
    }
    td ,th{
        border-top:none;
        border-left:2px solid white;
        border-bottom:2px solid #dee2e6;
        
    }
   

      `}</style>
    </MainLAyout>
  )
}
