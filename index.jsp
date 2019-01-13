<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%-- <%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%> --%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<!--
<spring:url value="/resources/sample.js" var="SampleJs" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="${SampleJs}"></script>
-->

<script type="text/javascript"  src="<c:url value="/resources/sample.js" />"></script>

<title>Insert title here</title>


</head>
<body onload="myfunc()">
	${msg}
	<input type="button" onclick="add()" value="Click" />

</body>
</html>
