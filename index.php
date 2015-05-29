<!DOCTYPE html>
<html>
	<head>
		<title>Test</title>
		<script src="jquery-1.9.1.min.js"></script>		
		<script src="jquery.metalPagination.js"></script>	
		<style type="text/css">
		.a{
			padding : 5px;
			height : 50px;
			width : 100px;
			border : 1px solid red;
		}
		</style>
	</head>
<body>
<div id="first">
	<div class="a">a<span>kk</span></div>
	<div class="a">b</div>
	<div class="a">a<span>kk</span></div>
	<div class="a">b</div>
	<div class="a">b</div>
</div>



<script>
	$(function(){
		$('#first').metalPagination();
	});
</script>
</body>
</html>