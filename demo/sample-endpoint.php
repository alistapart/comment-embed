<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8"> 
	<link rel="stylesheet" href="../dist/comment-embed.min.css"> 
</head>
<body>
	<h1><?php
	$id = $_REQUEST[ "id"];

	if( $id == 1 ):
?>

	<div class="ala-embedded-comment" id="comment">
		<a href="#" class="commenter-avatar" target="_parent">
			<img src="http://d.alistapart.com/_made/pix/authors/uploads/photo_126389_60_60_c1.jpg" class="commenter-avatar" alt="" width="60" height="60">
		</a>
		<a class="commenter-name" href="#" target="_parent">Tim Murtaugh</a>
		<a class="comment-meta" href="http://alistapart.com/comments/a-list-apart-relaunches-new-features-new-design#333649" target="_parent">5:03 pm on January 25, 2013</a>
		
		<p>The “v5” redirect bug has been knocked down!</p>
	</div>
<?php endif; ?>

<?php
	if( $id == 2 ):
?></h1>
	<div class="ala-embedded-comment" id="comment">
		<a href="#" class="commenter-avatar" target="_parent">
			<img src="http://d.alistapart.com/_made/pix/authors/uploads/photo_116023_60_60_c1.jpg" width="60" height="60">
		</a>
		<a class="commenter-name" href="#" target="_parent">Jeffrey Zeldman</a>
		<a class="comment-meta" href="http://alistapart.com/comments/a-list-apart-relaunches-new-features-new-design#333649" target="_parent">5:03 pm on January 25, 2013</a>
		
		<p><a href="http://alistapart.com/comments/a-list-apart-relaunches-new-features-new-design#333704" target="_parent">Christine Zoltok said</a>:</p>

		<blockquote>
		I second the request for an article-only RSS feed.
		</blockquote>

		<p>On our <a href="http://alistapart.com/about/rss" target="_parent"><span class="caps">RSS</span></a> page, you can now choose between a firehose feed (all <span class="caps">ALA</span> content) and a feed containing only articles and columns. Enjoy! :)</p>
		
		<p><a href="http://alistapart.com/comments/a-list-apart-relaunches-new-features-new-design#333699" target="_parent">Richard Fink said</a>:</p>

		<blockquote>a point-by-point rundown of why the choices you’ve made were made, would be right on point and very helpful to your readers</blockquote>

		<p>I agree, and we plan to address select decisions in a series of brief blog posts, such as this one <a href="http://alistapart.com/blog/post/on-alt-text">on alt text</a>.</p>
	</div>
<?php endif; ?>
</body>
</html>