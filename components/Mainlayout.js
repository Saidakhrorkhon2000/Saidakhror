import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

export default function MainLAyout({children}) {
   
  return (

<>
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
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            
        </Head>

        
        <div className="sidebar"id="mySidebar">
        
          <div className="sliderLogo">Logo</div>
          <Link href={'/index'}><a>Settings</a></Link>
         
          <Link href={'/orders'}><a>Orders</a></Link>
          <Link href={'/clients'}><a>Clients</a></Link>
          
          <Link href={'/products'}><a>Products</a></Link>
          <Link href={'/import'}><a>Import</a></Link>
          <Link href={'/delivery'}><a>Delivery</a></Link>
          <Link href={'/promocodes'}><a>Promocodes</a></Link>
          <Link href={'/posts'}><a>Posts</a></Link>
          <Link href={'/payments'}><a>Payments</a></Link>
          <Link href={'/integration'}><a>Integration</a></Link>
          <Link href={'/sources'}><a>Sources</a></Link>
          <Link href={'/tarif'}><a>Tarif</a></Link>
        </div>
        
        <main id='main'>
        <div className="navHeader">
          <h2>Settings</h2>
          </div>
        {children}
        </main>   
          
    </div>
</>
  )
}