{exp:ala_headers:cors}

{!-- 
	It's worth noting that EE's native caching doesn't seem to play well with CORS (at least in our 
	tests so far); additionally if you're going to use CE Cache, make sure the ala_headers:cors tag 
	is outside the CE Cache tag. 
--}

<!doctype html>

<html lang="en">

<head>

	<meta charset="utf-8">

	<link rel="stylesheet" href="embedded.css">

	<base target="_parent">

</head>

<body>

{exp:comment:entries dynamic="no" comment_id="{segment_2}"}

	<div id="embedded-comment">
	
		{if avatar}<img src="{avatar_url}" alt="" />{/if}
		
		<h1>{name} commented on {title}</h1>
		
		<p><time>{comment_date format="%F %d, %Y"}</time></p>
		
		{exp:strip_html keep='b|em|a|i|blockquote'}{comment}{/exp:strip_html}
		
		<p><a href="">Read the Full Article</a></p>
		
	</div>
	
{/exp:comment:entries}

</body>

</html>
