<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "hyundai.UserDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="hyundai.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />
<%
  
        UserDAO userDAO = new UserDAO();
        int result = userDAO.signin( userDTO.getUser_id(), userDTO.getUser_pw() );
        if(result==1){
            session.setAttribute("user_id", userDTO.getUser_id());
        } 
%>
{"아이디": "<%=userDTO.getUser_id()%>","case": <%=result%>}




