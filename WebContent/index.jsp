<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" %>

    <!DOCTYPE html>
<!--[if lt IE 7 ]><html class="no-js ie ie6" lang="en"><![endif]-->
<!--[if IE 7 ]><html class="no-js ie ie7" lang="en"><![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie8" lang="en"><![endif]-->
<!--[if IE 9 ]><html class="no-js ie ie9" lang="en"><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta http-equiv="Cache-control" content="no-cache"/>
<title>APL.com | Tracking</title>
<!-- Favicon and apple touch icons-->
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico"/>
<link rel="icon apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png" />
<link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
<link rel="stylesheet" type="text/css" href="css/custom.css"/>
<!--[if IE]>
<![endif]-->
<script type="text/javascript" src="js/global.js"></script>
<script type="text/javascript">

</script>
</head>

<body >

	<main>
		<!-- header -->
		<header class="header login_header">
			<!-- .logo -->
			<div class="logo login_logo">
				<a href="javascript:void(0);" class="ripple">
                    <figure><img src="images/logo.png" alt="APL Logo" title="APL Logo" /></figure>
                </a>
			</div>
		</header>
		<!-- /header -->
		
		<!-- .main_container -->
		<section class="main_container">
			<div class="container">
				<div class="login taC">
					<h1 class="blue_h1">Welcome to <span>APL Tracking</span></h1>
					<div class="login_form mT40">
						<form id="main-form" class="main-form" name="main-form" method="post" action="trackNo">
							<div class="pTB20 posRel">
								<input type="text" name="trackNumber" id="container_number" placeholder="Enter the container number" autofocus="" required/>
								
								<span id="error" class="errorMsg">Enter valid container number..</span>
							</div>
							<div class="pTB20">
								<input type="submit" class="ripple submit"  required="required" name="Track" value="Track"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<!-- /.main_container -->
		<div class="clearfix"></div>
		<!-- .footer -->
		<footer class="footer">
			<p>Copyright &copy; 2017 APL Limited. All rights reserved.</p>
		</footer>
		<!-- /.footer -->
	</main>
<script type="text/javascript">

</script>
</body>
</html>
    