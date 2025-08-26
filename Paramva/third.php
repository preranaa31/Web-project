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
    $usn=$_REQUEST['usn'];
    $branch=$_REQUEST['branch'];
    $sem=$_REQUEST['sem'];
    $clgname=$_REQUEST['clgname'];
    $email=$_REQUEST['email'];
    $phno=$_REQUEST['phno'];
    $eventname=$_REQUEST['eventname'];
   
    $query="insert into student values('$name','$usn','$branch','$sem','$clgname','$email','$phno','$eventname')";
    $result=mysqli_query($dbh,$query)or die(mysqli_error($dbh));
    echo "data inserted successfully!!!";
    $var=mysqli_query($dbh,"SELECT * FROM student");
    echo"<table border='1'>";
    echo"<tr> <th>name</th> <th>usn</th> <th>branch</th> <th>sem</th> <th>clgname</th> <th>email</th> <th>phno</th> <th>event</th> </tr>";
    while($arr=mysqli_fetch_row($var))
    {
        echo"
        <tr>
        <td>$arr[0]</td> <td>$arr[1]</td> <td>$arr[2]</td> <td>$arr[3]</td> <td>$arr[4]</td> <td>$arr[5]</td> <td>$arr[6]</td> <td>$arr[7]</td> </tr>";
    }
    echo"</table>";  
    mysqli_close($dbh); 
    ?><br>
    </h3>
    <a href="index.html"><button>click here to go to home page</a></button><br>
    <br>

    
</body>
</html>