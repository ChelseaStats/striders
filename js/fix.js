$('#siteData').DataTable( { 
ajax : {{ site.data.fixtures | jsonify }},
columns: [
        { data: 0 },
        { data: 2 },
        { data: 3 },
        { data: 4 }
]} );         
</script>
