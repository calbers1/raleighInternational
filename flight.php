<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>flight</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <?php
    echo '<br /><br /><br /><div class="row">
			<div class="column-4"></div>
			<div class="column-2">
				<div class="card">
                    <h1>Thank you, ' . $_POST["fName"] . '. We will send ticket confirmation to your email.</h1>
                    <h5>You will now be redirected to the home page.</h5>
        	</div 
        	</div 
        <div class="column-4"></div>
        </div>';
    header("Refresh: 5; url=index.html");
    ?>
</body>

</html>