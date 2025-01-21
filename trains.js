// let que1_opt=document.getElementById("que1_opt")
// console.log(que1_opt);

// let que1_opt_children=que1_opt.children
// console.log(que1_opt_children)

// let que2_opt=document.getElementById("que2_opt").children;
// let result=true;


// function validation(){
//    for(let i=0;i<4;i++)
//       {
//         if(que1_opt_children[i].getAttribute('id')=="trueAns"){
//          result=true;
//          let trueAns=document.getElementById('trueAns');
//          trueAns.style.backgroundColor="blue";
//          console.log("hello");
//          break;
//         }
//         else
//         {
//          result=false;
//          trueAns.style.backgroundColor="green";

//         }
//       }

   
// }

// let answer=document.getElementsByClassName('solution');
 let count=true;

//  let explainationBox=document.createElement("div");
//  explainationBox.classList.add("explanation");

 
 let solve1=document.getElementsByClassName("solve1");
 let solve2=document.getElementsByClassName("solve2");
 let solve3=document.getElementById("solve3");
 let solve4=document.getElementById("solve4");
 let solve5=document.getElementById("solve5");


function explaination(){
let ansDiv=document.createElement("div");
ansDiv.classList.add("ansDiv");
 explainationBox.appendChild(ansDiv);
let ansHead=document.createElement("h2");
ansHead.classList.add("ansHead");
ansHead.innerHTML="Answer: ";
ansDiv.appendChild(ansHead);
  let span=document.createElement("span");
  ansHead.appendChild(span);
  span.classList.add("correctOpt");
  span.innerHTML="Option1";
  // ansDiv end

  let expDiv=document.createElement("div");
   explainationBox.appendChild(expDiv);
   let expHead=document.createElement("h2");
   expDiv.appendChild(expHead);
   expHead.classList.add("expHead");
   expHead.innerHTML="Explaination: ";

   let para=document.createElement("p");
   expDiv.appendChild(para);
   para.classList.add("para");
   para.innerHTML="lorem50lsdkjflasdjfjjjhdfjhfdjl;ff;gjdhffdjfdfdjhfjfjfhdjhfjhfjhdjhdjhdjfdjhdfffdjhfdjhfkdrjhk"
   
  exit();
}
let b1=0;
let b2=0;
function solution(clicked)
{  
  
  // if(count)
  //   {
  let explainationBox=document.createElement("div");
  explainationBox.classList.add("explanation");
      console.log(explainationBox);
       console.log(clicked);
       if((clicked=="btn1")&&(b1==0)){
       solve1.appendChild(explainationBox);
        b1=1;
        console.log("append btn1")
        }
        else if((clicked=="btn2")&&(b2==0)){
          solve2.appendChild(explainationBox);
          b2=1;
          console.log("append btn 2")
        }
          else if(clicked=="btn3"){
            solve3.appendChild(explainationBox);
          }
        else if(clicked=="btn4"){
          solve4.appendChild(explainationBox);
        }
       
        else if(clicked=="btn5"){
          solve5.appendChild(explainationBox);
        }
          // count=false;

          // explaination();
      // function calling
    // }
    // else
    // {
      else if((clicked=="btn1")&&(b1==1)){
        console.log("removed 1")

        solve1.removeChild(explainationBox);
        b1=0;
        console.log("removed 1")
         }
         else if((clicked=="btn2")&&(b2==1)){
           solve2.removeChild(explainationBox);
           b2=0;
           console.log("removed 2")
         }
         else if(clicked=="btn3"){
           solve3.removeChild(explainationBox);
         }
         else if(clicked=="btn4"){
           solve4.removeChild(explainationBox);
         }
         else{
           solve5.removeChild(explainationBox);
         }
      //  count=true;
      
    // }    
}



// explaination definition
