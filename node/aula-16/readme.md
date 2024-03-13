# injecting content in view:
- in the index.ejs use the tag "<=% varname %>" or "<-% varname %>" to render from homeController.
- the "=" in <=% varname %> has the function of escaping characters, example: "'" or "/".
- the '-' in <-% varname %> not escaping the characters. USE THIS IF WANT SEND HTML CODE!
- flux control tag <% %> (if, for)
- comment <%# comment %>
- include <%- include('path/file');  %>
# example of flux control:
<% if (condition) { %>
    <%= code %>
<% } else { %>
    <%= code %>
<% } %>