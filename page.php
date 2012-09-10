<?php

	//This file handles pages
	
	/*
		//Go to page
			loadPage("eat");
			loadPage("play");
			loadPage("learn");
			loadPage("people");
			loadPage("others");
	*/

	//Get page type
	$page = (isset($_GET['page'])) ? $_GET['page'] : 'home';
	
	if ($page == 'home'){ ?>
		<ul class="rmenuItem">
			<li id="learn" data-btngrp="2" data-state="1" class="btns"><img src="img/home/learning1.png" alt="learn"/></li>
			<li id="eat" data-btngrp="2" data-state="1" class="btns"><img src="img/home/eating1.png" alt="eat"/></li>
			<li id="play" data-btngrp="2" data-state="1" class="btns"><img src="img/home/playing1.png" alt="play"/></li>
			<li id="people" data-btngrp="2" data-state="1" class="btns"><img src="img/home/people1.png" alt="people"/></li>
			<li id="others" data-btngrp="2" data-state="1" class="btns"><img src="img/home/others1.png" alt="others"/></li>
		</ul>
<?php } else if ($page == 'learn'){ ?>
		<ul class="rmenuItem">
			<li id="animals" data-btngrp="2" data-state="1" class="btns"><img src="img/learn/animals1.png" alt="learn"/></li>
			<li id="body" data-btngrp="2" data-state="1" class="btns"><img src="img/learn/body1.png" alt="eat"/></li>
			<li id="books" data-btngrp="2" data-state="1" class="btns"><img src="img/learn/books1.png" alt="play"/></li>
			<li id="colors" data-btngrp="2" data-state="1" class="btns"><img src="img/learn/colors1.png" alt="people"/></li>
			<li id="homeObjects" data-btngrp="2" data-state="1" class="btns"><img src="img/learn/homeObjects1.png" alt="others"/></li>
			<li id="shapes" data-btngrp="2" data-state="1" class="btns"><img src="img/learn/shape1.png" alt="people"/></li>
			<li id="stationary" data-btngrp="2" data-state="1" class="btns"><img src="img/learn/stationary1.png" alt="others"/></li>
		</ul>
<?php } else if ($page == 'eat'){ ?>
		<ul class="rmenuItem">
			<li id="addon" data-btngrp="2" data-state="1" class="btns"><img src="img/eat/addon1.png" alt="addon"/></li>
			<li id="beverage" data-btngrp="2" data-state="1" class="btns"><img src="img/eat/beverages1.png" alt="beverage"/></li>
			<li id="breakfast" data-btngrp="2" data-state="1" class="btns"><img src="img/eat/breakfast1.png" alt="breakfast"/></li>
			<li id="cutlery" data-btngrp="2" data-state="1" class="btns"><img src="img/eat/cutlery1.png" alt="cutlery"/></li>
			<li id="dinner" data-btngrp="2" data-state="1" class="btns"><img src="img/eat/dinner1.png" alt="dinner"/></li>
			<li id="fruits" data-btngrp="2" data-state="1" class="btns"><img src="img/eat/fruits1.png" alt="fruits"/></li>
			<li id="lunch" data-btngrp="2" data-state="1" class="btns"><img src="img/eat/lunch1.png" alt="lunch"/></li>
			<li id="snack" data-btngrp="2" data-state="1" class="btns"><img src="img/eat/snack1.png" alt="snack"/></li>
		</ul>
<?php } else if ($page == 'play'){ ?>
		<ul class="rmenuItem">
			<li id="music" data-btngrp="2" data-state="1" class="btns"><img src="img/play/music1.png" alt="music"/></li>
			<li id="outdoor" data-btngrp="2" data-state="1" class="btns"><img src="img/play/outdoor1.png" alt="outdoor"/></li>
			<li id="puzzle" data-btngrp="2" data-state="1" class="btns"><img src="img/play/puzzles1.png" alt="puzzle"/></li>
			<li id="toy" data-btngrp="2" data-state="1" class="btns"><img src="img/play/toy1.png" alt="toy"/></li>
			<li id="tv" data-btngrp="2" data-state="1" class="btns"><img src="img/play/tv1.png" alt="tv"/></li>
			<li id="videogames" data-btngrp="2" data-state="1" class="btns"><img src="img/play/videogames1.png" alt="videogames"/></li>
		</ul>
<?php } else if ($page == 'people'){ ?>
		<ul class="rmenuItem">
			<li id="brother" data-btngrp="2" data-state="1" class="btns"><img src="img/people/brother1.png" alt="brother"/></li>
			<li id="dad" data-btngrp="2" data-state="1" class="btns"><img src="img/people/dad1.png" alt="dad"/></li>
			<li id="doctor" data-btngrp="2" data-state="1" class="btns"><img src="img/people/doctor1.png" alt="doctor"/></li>
			<li id="friend" data-btngrp="2" data-state="1" class="btns"><img src="img/people/friends1.png" alt="friends"/></li>
			<li id="mom" data-btngrp="2" data-state="1" class="btns"><img src="img/people/mom1.png" alt="mom"/></li>
			<li id="nurse" data-btngrp="2" data-state="1" class="btns"><img src="img/people/nurse1.png" alt="nurse"/></li>
			<li id="sister" data-btngrp="2" data-state="1" class="btns"><img src="img/people/sister1.png" alt="sister"/></li>
			<li id="teacher" data-btngrp="2" data-state="1" class="btns"><img src="img/people/teacher1.png" alt="teacher"/></li>
		</ul>
<?php } else if ($page == 'others'){ ?>
		<ul class="rmenuItem">
			<li id="clock" data-btngrp="2" data-state="1" class="btns"><img src="img/other/clock1.png" alt="clock"/></li>
			<li id="cloth" data-btngrp="2" data-state="1" class="btns"><img src="img/other/cloth1.png" alt="cloth"/></li>
			<li id="emergency" data-btngrp="2" data-state="1" class="btns"><img src="img/other/emergency1.png" alt="emergency"/></li>
			<li id="hygiene" data-btngrp="2" data-state="1" class="btns"><img src="img/other/hygiene1.png" alt="hygiene"/></li>
			<li id="school" data-btngrp="2" data-state="1" class="btns"><img src="img/other/school1.png" alt="school"/></li>
			<li id="sleep" data-btngrp="2" data-state="1" class="btns"><img src="img/other/sleep1.png" alt="sleep"/></li>
		</ul>
<?php } else if ($page == 'home'){ ?>
		<ul class="rmenuItem">
			<li id="learn" data-btngrp="2" data-state="1" class="btns"><img src="img/home/learning1.png" alt="learn"/></li>
			<li id="eat" data-btngrp="2" data-state="1" class="btns"><img src="img/home/eating1.png" alt="eat"/></li>
			<li id="play" data-btngrp="2" data-state="1" class="btns"><img src="img/home/playing1.png" alt="play"/></li>
			<li id="people" data-btngrp="2" data-state="1" class="btns"><img src="img/home/people1.png" alt="people"/></li>
			<li id="others" data-btngrp="2" data-state="1" class="btns"><img src="img/home/others1.png" alt="others"/></li>
		</ul>
<?php } else if ($page == 'home'){ ?>
		<ul class="rmenuItem">
			<li id="learn" data-btngrp="2" data-state="1" class="btns"><img src="img/home/learning1.png" alt="learn"/></li>
			<li id="eat" data-btngrp="2" data-state="1" class="btns"><img src="img/home/eating1.png" alt="eat"/></li>
			<li id="play" data-btngrp="2" data-state="1" class="btns"><img src="img/home/playing1.png" alt="play"/></li>
			<li id="people" data-btngrp="2" data-state="1" class="btns"><img src="img/home/people1.png" alt="people"/></li>
			<li id="others" data-btngrp="2" data-state="1" class="btns"><img src="img/home/others1.png" alt="others"/></li>
		</ul>
<?php } else if ($page == 'home'){ ?>
		<ul class="rmenuItem">
			<li id="learn" data-btngrp="2" data-state="1" class="btns"><img src="img/home/learning1.png" alt="learn"/></li>
			<li id="eat" data-btngrp="2" data-state="1" class="btns"><img src="img/home/eating1.png" alt="eat"/></li>
			<li id="play" data-btngrp="2" data-state="1" class="btns"><img src="img/home/playing1.png" alt="play"/></li>
			<li id="people" data-btngrp="2" data-state="1" class="btns"><img src="img/home/people1.png" alt="people"/></li>
			<li id="others" data-btngrp="2" data-state="1" class="btns"><img src="img/home/others1.png" alt="others"/></li>
		</ul>
<?php } ?>