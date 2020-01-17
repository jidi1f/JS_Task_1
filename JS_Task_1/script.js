window.onload = function() {
   
   let i, j, n, m, ti, tj , count, temp;

   n = this.prompt("Vvedite kol stolbcov");
   m = this.prompt("Vvedite strock strock");
 
   var mas = [];

   for ( i = 0; i < m; i++){
      mas[i] = [];
      for ( j = 0; j < n; j++){
         mas[i][j] = 0;
   }}

   masFill(mas)
   masView(mas);
   
function masFill(mas){
 
 for (count = 1, i = 0, j = -1, tj = 1, ti = 0; count <= m*n; count++) {

   i += ti; j += tj;

   if (i < 0 || j < 0 || i == m || j == n || mas[i][j] != 0) {

       i -= ti; j -= tj;
 
       count--;

       temp = ti;
       ti = tj;
       tj = -temp;

       continue;
   }
   mas[i][j] = count;
 }
}

function masView(mas) {
   let rows = '';
 
   for(i = 0; i < mas.length; i++) {
     let cells = '';
 
     for(j = 0; j < mas[i].length; j++) {
       cells += '<div class="cell">' + mas[i][j] + '</div>';
     }
 
     rows += '<div class="row">' + cells + '</div>';
   }
 
   document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="container">' + rows + '</div>');
 }

}  

        
    
   
