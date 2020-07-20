import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Router from 'next/router'

export default function Posts() {

  return (
    <MainLAyout>
      <Head>
        
      </Head>

    <main >
        <div className="homeContainer">
        <h3 className="rowTop">Posts</h3>
                
        <div className="tableBox"> 
            <div className="delTop">
            <Link href={'/createPost'}><a type="button" className="btn btn-top btn-primary">
            <i className="fas fa-plus"></i>
                Add
                </a></Link>
            </div>
            <div className="delTop">
            <div className="table-responsive rowTop">
                <table className="table">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Posted</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Delivered</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        <input className="formControl" type="text" id="text-input"/>
                        </td>
                        <td>
                        <select className="custom-select">
                        <option >Yes</option>
                        <option >No</option>
                    </select>
                        </td>
                        <td>
                        <select className="custom-select">
                        <option >Type 1</option>
                        <option >Type 2</option>
                    </select>
                        </td>
                        <td>
                        <input className="formControl " type="date" id="example-date-input"/>
                        </td>
                       
                        <td>
                        <input className="formControl" type="text" id="text-input"/>
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
    tr{
        border-bottom:2px solid #dee2e6;
    }
    td ,th{
        border-top:none;
        border-left:2px solid white;
        border-bottom:2px solid #dee2e6;
        
    }

    .delTop{
    margin: 10px;
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
