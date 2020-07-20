import Head from 'next/head'
import MainLAyout from '../components/Mainlayout'

export default function CreatePost() {

  return (
      
    <MainLAyout>
      <Head>
          
     
      </Head>

    <main >
        
       <div className="homeContainer">
         <div className="tableBox">
            <div className="delTop">
                    <div class="alert alert-success alert-dismissible">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                Saved
                </div>
                    <h1 className="settingHead rowTop">Add Post</h1>
                
                    <div className="row rowTop">  
                        <div className="col-sm-3 settingText">Active</div>
                        <div className="btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-light active">
                                <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
                            </label>
                            <label className="btn btn-light">
                                <input type="radio" name="options" id="option2" autocomplete="off"/> No
                            </label>
                        </div>
                    </div>

                    <div className="row rowTop">  
                        <div className="col-sm-3 settingText">Title</div>
                        <div className="col-md-6 mb-3">
                        <input className="formControl " type="text" placeholder="Title of the post"/>
                        </div>
                    </div>

                    
                    <div className="row rowTop">
                        <div className="col-sm-3 settingText">Body</div>
                        <div className="col-md-6 mb-3">
                        <textarea className="formControl" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div> 
                    </div>
                    <div className="row rowTop">
                        <div className="col-sm-3 settingText">File</div>
                        <form>
                            
                            <div className="file col-md-6 mb-3">
                                <input type="file" id="customFile" className="file-input"/>
                            </div>
                        </form>
                    </div>

                    <div className="row rowTop">  
                        <div className="col-sm-3 settingText">Date to publish</div>
                        <div className="col-md-8 mb-3">
                        <input className="formControl " type="date" id="example-date-input"/>
                        </div>
                       
                    </div>
                    <div className="row rowTop">  
                        <div className="col-sm-3 settingText">Date to publish</div>
                        <div className="col-md-8 mb-3">
                        <input className="formControl " type="date" id="example-date-input"/>
                        </div>
                       
                    </div>
                    <div className="saveSend col-md-8 mb-3">
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="button" className="btn btn-warning lg">Save and Send</button>
                    <button type="button" className="btn btn-warning">Send</button>
                    </div>
                    </div>
                   
                </div>
            </div>
    </main>

      

      <style jsx>{`
       
    .rowTop{
        margin-top:20px;
        
    }
    .saveSend{
        margin-left:23%;
    }
    .btn{
      width:80px;
    }
    .btn:first-child{
        margin-left:15px;
    }
    .btn-warning, .btn-success{
        color:white;
        margin:5px;
    }
    .lg{
        width:150px;
    }
   .createForm{
     margin:10px;
   }
  
   
   

      `}</style>
    </MainLAyout>
  )
}
