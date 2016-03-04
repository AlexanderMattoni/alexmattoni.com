<?php
$description = 'Alex Mattoni, CTO of Petrichor';

if(isset($_POST['submit-message'])) {
	if(empty($_POST['hp_address'])) {
		ob_start();
		foreach($_POST as $k => $v) {
			if(empty($v)) {
				continue;
			}
			$k = strip_tags($k);
			$v = strip_tags($v);
			echo "{$k}: {$v}\n\n";
		}
		$msg = ob_get_clean();

		mail('amattoni@petrichor.io', 'Contact Message from ' . $_POST['name'], $msg);

		header('Location: ?thanks');
		exit();
	}
}
?>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/" lang="en">

	<head>

		<!-- Basic -->
		<title>Alex Mattoni &bull; Toledo, OH</title>
		<meta name="description" content="" />


		<!-- Technical Meta Data -->
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="cleartype" content="on">


		<!-- Both Humans and Robots are Welcome! -->
		<link type="text/plain" rel="author" href="humans.txt" />
		<meta name="robots" content="index, follow" />


		<!-- Shortcut Icon -->
		<link rel="shortcut icon" type="image/x-icon" href="resources/img/meta/shortcut/shortcut-32x32.png" />
		<link rel="icon" sizes="196x196" href="resources/img/meta/shortcut/shortcut-196x196.png">


		<!-- Open Graph Protocol -->
		<meta property="og:title" content="Alex Mattoni" />
		<meta property="og:site_name" content="Alex Mattoni" />
		<meta property="og:description" content="<?=$description?>" />
		<meta property="og:image" content="resources/img/meta/open-graph/og-600x600.png" />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="en_US" />


		<!-- Twitter Cards Markup -->
		<meta property="twitter:card" content="summary" />
		<meta property="twitter:title" content="Alex Mattoni" />
		<meta property="twitter:description" content="<?=$description?>" />
		<meta property="twitter:site" content="@alexmattoni" />
		<meta property="twitter:site:id" content="14553071" />


		<!-- Stylesheets -->
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Raleway:400,300,700" />
		<link rel="stylesheet" href="http://limestone.io/trunk/css/import.css">
		<link rel="stylesheet" href="resources/css/global/import.css">
		<link rel="stylesheet" href="resources/css/global-elements/import.css">

	</head>

	<body>
		<header class="masthead" role="banner">
			<nav class="main-navigation" role="navigation">
				<a class="branding" href="/">Alex Mattoni</a>
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#current">Current</a>
					</li>
					<li>
						<a href="#past">Past</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="https://www.facebook.com/amattoni">
							<i class="fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/alexmattoni">
							<i class="fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://instagram.com/alexandermattoni/">
							<i class="fa-instagram"></i>
						</a>
					</li>
				</ul>
			</nav>
		</header>
		<section class="hero">
			<div class="content row">
				<?php if(!isset($_GET['thanks'])) { ?>
					<div class="col-4">
						<img class="profile round" src="resources/img/content/profile.jpg" alt="Alex Mattoni" />
					</div>
					<div class="col-8 summary">
						<div class="name">
							Alex Mattoni
						</div>
						<div class="descriptors">
							Systems Developer &bull; World Traveler
						</div>
					</div>
				<?php } else { ?>
					<h1 class="title">Thanks for getting in touch. I'll get back to you ASAP!</h1>
				<?php } ?>
			</div>
			<div id="gradient"></div>
			<div id="stars"></div>

		</section>
		<main role="main">
			<section id="about" class="container">
				<header class="section-header">
					<h2>About</h2>
				</header>
				<div class="row align-center">
					<div class="col-4">
						<img class="profile round" src="resources/img/content/awesome.jpg" alt="Alex Mattoni" />
					</div>
					<div class="col-7 offset-1">
						<h2 class="sub-line">I'm Alex Mattoni</h2>
						<p>
							<strong>And I'm out to change the world.</strong> Ever since childhood, I've been fascinated with computers
							hardware, technology, and the future. I build video games and electronics in my spare time,
							study Japanese, and help to bring about another technological revolution at my job at <a href="http://petrichor.io">Petrichor</a>.
						</p>
						<p>
							Someday, I want to travel into space. I think it is our destiny to spread out among the stars, and I think the ultimate end goal
							would be to die on another planet. The wonder and awe that the universe puts in me is ineffable. It is my driving motivation for
							everything I do. I am hoping that someday soon I'll be able to develop software and robotics that travel among the stars, so that
							even if I don't make it, a piece of my ingenuity will live on into eternity.
						</p>
						<p>
							We have to start small though, and so I spend whatever free time I can get travelling. I'll get up some photos soon of some of the places I go.
						</p>
					</div>
				</div>
			</section>
			<section id="current" class="container">
				<header class="section-header">
					<h2>Current</h2>
				</header>
				<div class="row align-center">
					<div class="col-3 offset-1">
						<img class="profile" src="resources/img/content/petrichor-symbol.svg" alt="Petrichor" />
					</div>
					<div class="col-8 first">
						<h2 class="sub-line">CTO at <a href="http://petrichor.io">Petrichor</a> (Oct 2013 - Present)</h2>
						<p>
							The world around us is changing at an incredible rate. We have available to us technologies that people couldn't
							have even dreamed of 50 years ago. <strong>But it is just the start.</strong> I'm helping build things now that will
							push us ahead even further.
						</p>
						<p>
							Automation, machine learning, robotics...things are moving fast. Humanity will need help bringing these things to fruition,
							and at Petrichor we turn <strong>the sci-fi</strong> into <strong>the reality</strong>.
						</p>
						<p>
							We can't do this alone. I'm on the lookout for talented and ambitious engineers who share the same ideology.
							If you're excited about automation tech and want to be on the front lines, I'd love to hear from you.						</p>
					</div>
				</div>
			</section>
			<section id="past" class="container">
				<header class="section-header">
					<h2>Past</h2>
				</header>
				<div class="row justify-center">
					<div class="col-5 txt-center">
						<img class="profile small" src="resources/img/content/ut-logo.jpg" alt="University of Toledo" />
						<h3>University of Toledo</h3>
						<p>
							I come from humble beginnings, and kickstarted my education at the University of Toledo. However,
							my drive for creating new tech and impatience with university bureaucracy meant I had to leave
							to pursue my passions. That doesn't mean I didn't learn a lot while I was there! I studied
							Electrical Engineering and Computer Sciences, along with minoring in Japanese.
						</p>
					</div>
					<div class="col-5 offset-1 txt-center">
						<img class="profile small" src="resources/img/content/japan.jpg" alt="Japan" />
						<h3>Living in Japan</h3>
						<p>
							Ah, Japan. I couldn't wait to get out and explore the world. While at the University of Toledo, I studied abroad
							in Nagoya at Aichi Daigaku for a year. I made great friends and had the time of my life. I've continued with my studies
							and am constantly working to improve my language skills.
						</p>
					</div>
				</div>
			</section>
			<section id="contact" class="container">
				<header class="section-header">
					<h2>Contact</h2>
				</header>
				<form method="post" class="contact-form row justify-center">
					<div class="col-7">
						<p>
							<strong>Get in touch.</strong> I love meeting new people. Contact me if you're interested in a job, or you just want to get to know me.
						</p>
						<div class="txt-center">
							<ul class="social">
								<li>
									<a href="https://www.facebook.com/amattoni">
										<i class="fa-facebook"></i>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/alexmattoni">
										<i class="fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="https://instagram.com/alexandermattoni/">
										<i class="fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
						<p class="row">
							<label class="col-6">
								<input type="text" name="name" placeholder="Enter your name..." />
								Name
							</label>
							<label class="col-6">
								<input type="text" name="email" placeholder="e.g. email@domain.com" />
								Email
							</label>
						</p>
						<p class="row">
							<label class="col-6">
								<input type="text" name="twitter" placeholder="e.g. @twittername" />
								Twitter
							</label>
							<label class="col-6">
								<input type="text" name="phone" placeholder="e.g. 555-572-2810" />
								Phone
							</label>
						</p>
						<p>
							<label>
								<textarea name="message" placeholder="Enter your message..."></textarea>
								Message
							</label>
						</p>
						<button class="submit" name="submit-message" type="submit">
							Submit
						</button>
					</div>
				</form>
			</section>
		</main>
		<footer role="contentinfo">
			Copyright &copy; 2015, Alex Mattoni
		</footer>

        <script src="resources/js/mattoni.min.js"></script>
        <script src="resources/js/stars.min.js"></script>

	</body>

</html>

