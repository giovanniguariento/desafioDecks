import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;


  img.card{
    width: 100px; 
  }

  @media screen and (max-width: 1290px){

    flex-direction: row;
    gap: 10px;
    img.card{
    width: 67px; 
  }
  }


`;


export const Pile = styled.div`


  width: 783px;
  height: 158px;
  background: rgba(196, 196, 196, 0.4);
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;



  @media screen and (max-width: 1290px){

  width: 100px;
  height: 750px;
  background: rgba(196, 196, 196, 0.4);
  border-radius: 27px;
  flex-direction: column;

    
    }
`


export const Result = styled.div`
margin-top: 14px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

button{

width: 338px;
height: 66px;

border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
background: none;
margin-top: 74px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;

color: #FFFFFF;

}

h1{
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;

margin-bottom: 32px;

color: #FFFFFF;
}

@media screen and (max-width: 1290px){

img{
  width: 100px;
}

button{

width: 250px;
height: 50px;

border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
background: none;
margin-top: 74px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 29px;

color: #FFFFFF;

}

  
  }


`


export const SubmitButton = styled.button`
width: 338px;
height: 66px;
background: #02BB36;
border-radius: 8px;
color: white;
border: none;
font-style: normal;
font-size: 24px;
align-items: center;
text-align: center;
z-index: 99;


`;


export const TablePart1= styled.div`
width: 1268px;
height: 766px;
left: 86px;
top: 129px;
margin-top: 40px;
margin-bottom: 40px;

background: linear-gradient(180deg, rgba(54, 59, 103, 0.9) 0%, rgba(51, 57, 101, 0.9) 100%);
border-radius: 512px;

display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 1290px){
  width: 500px;
  height: 900px;

}



`
export const TablePart2= styled.div`
width: 1169px;
height: 680px;
left: 135px;
top: 159px;

background: radial-gradient(50% 50% at 50% 50%, #343B68 0%, #3E4577 100%);
border: 1px solid rgba(255, 255, 255, 0.1);
box-sizing: border-box;
border-radius: 512px;

display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 1290px){
  
  background: none;
border: none;

}

`
export const TablePart3= styled.div`

width: 898px;
height: 543px;
left: 271px;
top: 240px;

border: 2px solid rgba(255, 255, 255, 0.15);
box-sizing: border-box;
border-radius: 512px;

display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 1290px){
  
  background: none;
border: none;

}



`

export const TablePart4= styled.div`

width: 870px;
height: 526px;
left: 285px;
top: 249px;

border: 2px solid rgba(255, 255, 255, 0.15);
box-sizing: border-box;
border-radius: 512px;

display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 1290px){
  width: 400px;
  height: 800px;

}

`


export const Titulo= styled.h1`
font-family: Andada Pro;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 56px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;

margin-top: 24px;

color: #FFFFFF;
`

export const Bg1= styled.img`

@media screen and (max-width: 1920px){
  
position: absolute; 
left: 62%; /* posiciona a 90px para a esquerda */ 
top: 80px; /* posiciona a 70px para baixo */

}

@media screen and (max-width: 1400px){
  
  position: absolute; 
  left: 70%; /* posiciona a 90px para a esquerda */ 
  top: 80px; /* posiciona a 70px para baixo */
  
  }

`

export const Bg2= styled.img`

@media screen and (max-width: 1920px){
  
position: absolute; 
left: 60%; /* posiciona a 90px para a esquerda */ 
top: 90px; /* posiciona a 70px para baixo */

}

@media screen and (max-width: 1290px){
  
  position: absolute; 
  left: 68%; /* posiciona a 90px para a esquerda */ 
  top: 90px; /* posiciona a 70px para baixo */
  
  }

`