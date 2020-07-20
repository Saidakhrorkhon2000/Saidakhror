import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'

export default function Orders() {
  return (
    <MainLAyout>
      <Head>
        
      </Head>

      <main >
      <div className="homeContainer">
        
      <h3 className="rowTop">Orders</h3>
      <div className="tableBox">
      <div className="delTop">
      <div className="table-responsive rowTop">
                <table className="table">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Paid</th>
                        <th>Receiver</th>
                        <th>Mobile</th>
                        <th>Date</th>
                        <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        <input className="formControl" type="text" id="text-input"/>
                        </td>
                        <td>
                        <select className="custom-select">
                        <option >Ready</option>
                        <option >Not Ready</option>
                    </select>
                        </td>
                        <td>
                        <select className="custom-select">
                        <option >Yes</option>
                        <option >No</option>
                    </select>
                        </td>
                        <td>
                        <input className="formControl" type="text" id="text-input"/>
                        </td>
                        <td>
                        <input className="formControl" type="text" id="text-input"/>
                        </td>
                        <td>
                        <input className="formControl " type="date" id="example-date-input"/>
                        </td>
                        <td>
                        <input className="formControl form" type="text" id="text-input"/>
                        </td>
                    
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
        
       .table-responsive{
         padding-right:30px;
       }
        td ,th{
          width:15%;
            border-top:none;
            border-left:2px solid white;
            border-bottom:2px solid #dee2e6;
            
        }

      `}</style>
    </MainLAyout>
  )
}
