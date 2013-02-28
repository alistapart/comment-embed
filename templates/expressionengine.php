{exp:ala_headers:cors}

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
	
		{if avatar_url != ""}<img src="{avatar_url}" alt="" />{/if}
		
		<h1>{name} commented on {title}</h1>
		
		<p><time>{comment_date format="%F %d, %Y"}</time></p>
		
		{exp:strip_html keep='b|em|a|i|blockquote'}{comment}{/exp:strip_html}
		
		<p><a href="">Read the Full Article</a></p>
		
	</div>
	
{/exp:comment:entries}

</body>

</html>
