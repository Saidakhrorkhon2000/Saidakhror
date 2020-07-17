import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

export default function MainLAyout({children}) {
    
 
   
  return (


    <div className="acontainer">
        <Head>
            <title>Create Next App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            
        </Head>

        
        <div class="sidebar">
          <div className="logo"><a href="#home">Logo</a></div>
          <div className="sidebarText"><Link href={'/index'}><a>Settings</a></Link></div>
         <div className="sidebarText">
          <Link href={'/orders'}><a>Orders</a></Link>
          <Link href={'/clients'}><a>Clients</a></Link>
          </div>
          <Link href={'/products'}><a>Products</a></Link>
          <Link href={'/import'}><a>Import</a></Link>
          <Link href={'/delivery'}><a>Delivery</a></Link>
          <Link href={'/promocodes'}><a>Promocodes</a></Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
  
        <main>
        {children}
        </main>
      
           


        <style jsx global>{`

            .acontainer {
            left:0;
            padding:0;
            margin:0;
            }
            
          .sidebarText{
            padding-top:15px;
            padding-bottom:15px;
          }
            .sidebar {
                margin: 0;
                padding: 0;
                width: 200px;
                background-color:#444;
                position: fixed;
                height: 100%;
                overflow: auto;
              }
              .sidebar a {
                display: block;
                height:25px;
                color: white;
                padding-left:10px;
                text-decoration: none;
              }
              .sidebar a:hover {
                background-color: #f1f1f1;
                color: black;
              }
              
              @media screen and (max-width: 700px) {
                .sidebar {
                  width: 100%;
                  height: auto;
                  position: relative;
                }
                .sidebar a {text-align: center;
                  float: none;
                  }
                div.homeContainer {margin-left: 0;}
              }
              
              @media screen and (max-width: 400px) {
                .sidebar a {
                  width:100%
                  text-align: center;
                  float: none;
                }
              }

           
        `}</style>

        <style jsx global>{`
        .delTop{
          padding: 15px;
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
          }
          .form-control, .custom-select{
            border:none;
            border-bottom:2px solid gray;
          }
          .form-control, .custom-select:focus{
            box-shadow: none;
          }
        .table-responsive{
          padding-right:30px;
        }
        .tableBox{
          display:block;
          height:auto;
          background-color:white;
          margin:15px;
          padding:20px;
          box-shadow:box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
                                 0 0px 2px 0 rgba(0, 0, 0, 0.12);
        }
               .homeContainer {
                min-height: 100vh;
                padding-left: 12.5rem ;
                display: flex;
                flex-direction: column;
                background-color:#E6E6E6; 
              }
              @media screen and (max-width: 700px){
              .homeContainer{
                padding-left:10px;
      
              }
              }
            html,
            body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
            box-sizing: border-box;
            }
        `}</style>
    </div>

  )
}