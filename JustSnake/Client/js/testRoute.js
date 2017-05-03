function testRoute() {

    alert("loading test route...");

    let root = $( "#container" );
    root.empty();
    
    root.append("test route");

    // root.append(`
    //     <div class="form-group">
    //         <label for="email">Email:</label>
    //         <input type="email" class="form-control" id="email" placeholder="Enter email">
    //     </div>
    //                     <div class="form-group">
    //                         <label for="pwd">Password:</label>
    //                         <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    //                     </div>
    //                     <div class="checkbox">
    //                         <label><input type="checkbox"> Remember me</label>
    //                     </div>

    //                     </form>
    //                     <div class="modal-footer">
    //                         <button type="button" class="btn btn-default" data-dismiss="modal">Log-In</button>
    //     </div>
    // `);
}

// function readTextFile(file){
//             var rawFile = new XMLHttpRequest();
//             rawFile.open("GET", file, false);
//             rawFile.onreadystatechange = function ()
//             {
//                 if(rawFile.readyState === 4)
//                 {
//                     if(rawFile.status === 200 || rawFile.status == 0)
//                     {
//                         var allText = rawFile.responseText;
//                         alert(allText);
//                     }
//                 }
//             }
//             rawFile.send(null);
//         }

export { testRoute }