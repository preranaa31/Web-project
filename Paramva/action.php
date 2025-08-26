<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body bgcolor="yellow">
<h3 style="color:red"align="center">
 <?php
    echo"welcome to php\n";
    $dbh=mysqli_connect('localhost','root','') or die(mysqli_error($dbh));
    mysqli_select_db($dbh,'paramva')or die(mysqli_error($dbh));
    $name=$_REQUEST['name'];
    $password=$_REQUEST['password'];
    $id=$_REQUEST['id'];
    $query="insert into login values('$name','$password','$id')";
    $result=mysqli_query($dbh,$query)or die(mysqli_error($dbh));
    echo "data inserted successfully!!!";
    $var=mysqli_query($dbh,"SELECT * FROM  login ");
    echo"<table border='1'>";
    echo"<tr> <th>name</th> <th>password</th> <th>id</th> </tr>";
    while($arr=mysqli_fetch_row($var))
    {
        echo"
        <tr>
        <td>$arr[0]</td> <td>$arr[1]</td> <td>$arr[2]</td> </tr>";
    }
    echo"</table>";  
    mysqli_close($dbh); 
    ?><br>
    </h3>
    <a href="index.html"><button>click here to go to home page</a></button><br>
    <br>

    
</body>
</html>