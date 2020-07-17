import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Router from 'next/router'

export default function Delivery() {

  return (
    <MainLAyout>
      <Head>
        
      </Head>

    <main >
        <div className="homeContainer">
        <h3 className="rowTop">Delivery</h3>

        <div className="tableBox">
            <div className="delTop">
            <Link href={'/create'}><a type="button" className="btn btn-top btn-primary">
            <i className="fas fa-plus"></i>
                Add
                </a></Link>
            </div>
            <div className="delTop">
            <div className="table-responsive  rowTop">
                <table className="table ">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Active</th>
                        <th>Min Order</th>
                        <th>Cost</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        <Link href={'/create'}><a>
            <i className="fas fa-plus"></i>
                Express delivery
                </a></Link>
                            </td>
                        <td> Deliver</td>
                        <td>Yes</td>
                        <td>0 sum</td>
                        <td>0 sum</td>
                    
                        </tr>
                        <tr>
                        <td>
                        <Link href={'/create'}><a>
            <i className="fas fa-plus"></i>
                Takeaway
                </a></Link>
                            </td>
                        <td> Deliver</td>
                        <td>Yes</td>
                        <td>0 sum</td>
                        <td>0 sum</td>
                    
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
        width:15%;
    }

    .delTop{
    padding: 15px;
    border-radius: 0;
    background-color: #FFF;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
    }
   
    .btn-top{
        height: 36px;
        padding: 0 26px;
        margin: 6px 0;
        position: relative;
        color: #FFF;
        font-weight: 500;
        text-transform: uppercase;
        text-align:center;
        font-size: 14px;
      
    }
    .btn-top:hover {
        color:white;
    }
    .fas{
        font-family:FontAwesome;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        font-weight: 900;
        margin-top: 10px;
        margin-right:10px;
        margin-left:-5px;
    }
      `}</style>
    </MainLAyout>
  )
}
