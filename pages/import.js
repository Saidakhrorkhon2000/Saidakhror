import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'

export default function Import() {
  return (
    <MainLAyout>
      <Head>
     
      </Head>

    <main >
        <div className="homeContainer">
        <h1 className="settingHead rowTop">Import</h1>
        <div className="tableBox"> 
            <div className="delTop">
            <div className="row rowTop">  
                <div className="col-sm-3 settingText">File</div>
                <div className="col-md-6 mb-3 ">2332.docx</div>
            </div>
            <div className="row rowTop">  
                <div className="col-sm-3 settingText">Status</div>
                <div className="col-md-6 mb-3">Done</div>
            </div>
            <div className="row rowTop">  
                <div className="col-sm-3 settingText">Error</div>
                <div className="col-md-6 mb-3 incorrect">
                    Incorrect filetype
                    </div>
            </div>
            <div className="row rowTop">  
                <div className="col-sm-3 settingText">List of costs</div>
                <form>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" for="customFile">Choose file</label>
                </div>
                </form>
            </div>
            <div >  
            <div className="row rowTop">
            <button type="button" className="col-sm-1 btn btn-primary">Reload</button>
            </div>
            <div className="documentation">
            <h3 className="settingHead rowTop">Documentation</h3>
            
                <ul className='docLinks'>
                    <li >
                        <a className="docLink">There is some link</a>
                    </li>
                    <li >
                        <a className="docLink">Another link</a>
                    </li>
                </ul>
                
                
                
            </div>
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
    .incorrect {
        background-color: #f2dede;
    }
  
    .homeContainer {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color:white; 
      }
    .settingText{
        font-weight:600;
        font-size:16px;
        margin-top:auto;
        margin-bottom:auto; 
    }
    td,th{
        border-top:none;
        border-left:2px solid white;
        border-bottom:2px solid #dee2e6;
        width:15%;
    }
    .documentation{
        display : flex;
        flex-direction:column;
    }
    .docLinks{
        margin-left:30px;
    }
    ul{
        list-style-type:none;
    }
    .docLink{
        margin-top:10px;
        text-decoration:underline;
        font-size:20px;
        color: #F26536;
        cursor: pointer;
        transition:text-decoration .1s linear;
    }
    .docLink:hover{
        text-decoration:none; 
        color:red;
    }
      `}</style>
    </MainLAyout>
  )
}