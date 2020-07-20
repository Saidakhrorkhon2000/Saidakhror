import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'

export default function Products() {
  return (
    <MainLAyout>
      <Head>
        
      </Head>

    <main >
        <div className="homeContainer">
            <h3 className="rowTop">Products</h3>
            <div className="tableBox"> 
            <div className="delTop">
            <div className="table-responsive table rowTop">
                <table className="table ">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Cost</th>
                        </tr>
                        <tr>
                        <td><input className="formControl" type="text" id="text-input"/></td>
                        <td><input className="formControl" type="text" id="text-input"/></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                        <td colSpan='4'>Nothing was found</td>
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
    td,th{
        border-top:none;
        border-left:2px solid white;
        border-bottom:2px solid #dee2e6;
        width:15%;
    }
   

      `}</style>
    </MainLAyout>
  )
}
