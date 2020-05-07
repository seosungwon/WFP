<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
	<title></title>
	<!-- 공통 css -->
	<link rel="stylesheet" href="common/css/style.css">
	<link rel="stylesheet" href="common/css/materialize.css">
	<!-- //공통 css -->
</head>
<body>

<!-- 공통 : skip_nav -->
<ul class="skip">
	<li><a href="#skipCt">본문 바로가기</a></li>
	<li><a href="#gnb">대 메뉴 바로가기</a></li>
</ul>
<!-- //공통 : skip_nav -->

<!-- header -->
<div data-target="header" id="gnb" class="bd_bt">
	<!-- wd-inner -->
	<div class="wd-inner">
		<!-- box-info pc -->
		<!-- <div class="box-info">
			<span class="txt-1">Reliable digital banking wherever you go!</span>
			<a href="#none" class="common-btnType-4 waves-effect waves-light">My page</a>
			<a href="#none" class="common-btnType-5 waves-effect waves-light">Sign out</a>
		</div> -->
		<!-- //box-info pc -->
		<h1><a href="#none"><img src="common/images/logo/img_header_logo.png" alt=""></a></h1>
		<h1 class="main"><a href="#none"><img src="common/images/logo/img_header_logo.png" alt=""></a></h1>
		<!-- sub page title -->
		<!-- <h2>Title</h2> -->
		<!-- <a href="#none" class="btn-signIn">Sign in</a>
		<a href="#none" class="btn-home" title="home"></a> -->

		<!-- btn_Inquiry -->
		<div class="common-btnType-16">
			<a href="#INQUIRY" class="layer_open_pop btn_inquiry">Inquiry</a>
		</div>
		<!-- //btn_Inquiry -->

		<!-- box-gnb -->
		<div data-target="box-gnb">
			<!-- inner -->
			<div class="inner">
				<!-- box-login -->
				<div class="box-login mlogo">
					<a href="#none"><img src="common/images/logo/img_header_logo_color.png" alt=""></a>
				</div>
				<!-- //box-login -->
				<!-- nav -->
				<nav data-target="nav">
					<ul>
						<li>
							<a href="#none" data-index="1"><span>Loans</span></a>
							<ul >
								<li>
									<a href="#none" data-d2Index="1">Personal Loan</a>
									<a href="#none" data-d2Index="2">Salary Loan</a>
									<a href="#none" data-d2Index="3">Business Loan</a>
									<a href="#none" data-d2Index="4">Auto Loan</a>
									<!-- <a href="#none" data-d2Index="5">Truck Loan</a> -->
								</li>
							</ul>
						</li>
						<li>
							<a href="#none" data-index="2">FAQs</a>
						</li>
						<li>
							<a href="#none" data-index="3"><span>About Us</span></a>
							<ul>
								<li>
									<a href="#none" data-d2Index="1">Our Story</a>
									<a href="#none" data-d2Index="2">Welcome Group Info</a>
									<a href="#none" data-d2Index="3">Branch</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#none" data-index="4">Blog</a>
						</li>
					</ul>
				</nav>
				<!-- <nav data-target="nav">
					<ul>
						<li>
							<a href="#none" data-index="1">Loans</a>
							<ul>
								<li>
									<a href="#none" data-d2Index="1">Personal Loan</a>
									<a href="#none" data-d2Index="2">Salary Loan</a>
									<a href="#none" data-d2Index="3">Business Loan</a>
									<a href="#none" data-d2Index="4">Auto Loan</a>
									<a href="#none" data-d2Index="5">Truck Loan</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#none" data-index="2"><span>FAQs</span></a>
						</li>
						<li>
							<a href="#none" data-index="3">Anout Us</a>
							<ul>
								<li>
									<a href="#none" data-d2Index="1">Saving Account</a>
									<a href="#none" data-d2Inde    x="2">Checking Account</a>
									<a href="#none" data-d2Index="3">Time Deposit</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#none" data-index="4"><span>Blog</span></a>
						</li>

					</ul>
				</nav> -->
				<!-- //nav -->
				<!-- <p class="btn-login"><a href="#none">SIGN OUT</a></p> -->
				<!-- <p class="btn-myPage"><a href="#none" class="common-btnType-2 type-2 waves-effect waves-light">MY PAGE</a></p> -->
			</div>
			<!-- //inner -->
			<div class="dim"></div>

			<!-- sub-location -->
			<div class="sub-location">
				<div class="inner">
					<!-- Savings -->
					<ul data-d1Index="1">
						<li data-d2Index="1">
							<a href="#none">Savings Acoount</a>
						</li>
						<li data-d2Index="2">
							<a href="#none">Checking Account</a>
						</li>
						<li data-d2Index="3">
							<a href="#none">Time Deposit</a>
						</li>
					</ul>
					<!-- //Savings -->
					<!-- Loans -->
					<ul data-d1Index="2">
						<li data-d2Index="1">
							<a href="#none">Salary Loan</a>
						</li>
						<li data-d2Index="2">
							<a href="#none">Personal Loan</a>
						</li>
						<li data-d2Index="3">
							<a href="#none">Business Loan</a>
						</li>
						<li data-d2Index="4">
							<a href="#none">Auto Loan</a>
						</li>
						<!-- <li data-d2Index="5">
							<a href="#none">Truck Loan</a>
						</li> -->
					</ul>
					<!-- //Loans -->
				</div>
			</div>
			<!-- //sub-location -->
		</div>
		<!-- //box-gnb -->
	</div>
	<!-- //wd-inner -->
</div>
<!-- //header -->

<!-- gnb open button -->
<a href="#none" data-target="gnb-button" style="display:none;">
	<p class="gap"><span></span><span></span><span></span></p>
</a>
<!-- <div data-target="gnb-button-dim"></div> -->
<!-- //gnb open button -->

<!-- prev button -->
<a href="#none" data-button="btn-prev" class="sel">
	<p class="gap"><span></span><span></span><span></span></p>
</a>
<!-- <div data-target="gnb-button-dim"></div> -->
<!-- //prev button -->

