import {
  Pile, Result, Container, SubmitButton, TablePart1,
  TablePart2, TablePart3, TablePart4, Titulo
} from './styles';
import React, { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';
import Cards from '../Cards'



function Main() {

  let clickD = 0;

  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pile1, setPile1] = useState([]);
  const [pile2, setPile2] = useState([]);
  const [pile3, setPile3] = useState([]);
  const [click, setClick] = useState(clickD);
  const [result, setResult] = useState(clickD);


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setClick(0);

    async function submit() {
      setLoading(true);


      try {

        const response = await api.get();
        setArray(response.data.cards);

      } catch (error) {


      } finally {

        setLoading(false);

      }

    }

    submit();

  }, []);

  useEffect(() => {
    localStorage.setItem('deck', JSON.stringify(array));

    setPiles(array);

  }, [array]);

  function setPiles(valueArray) {

    const arrayPile1 = [];
    const arrayPile2 = [];
    const arrayPile3 = [];

    valueArray.map((value, index) => {
      if (index % 3 === 0) {
        return arrayPile1.push(value)
      }
      if ((index - 1) % 3 === 0) {
        return arrayPile2.push(value)

      }
      return arrayPile3.push(value)

    })

    setPile1(arrayPile1)
    setPile2(arrayPile2)
    setPile3(arrayPile3)

  }


  function handlerStack(e) {

    setClick(1);
    let newArray = [];

    if (e === 1) {

      newArray = [...pile2, ...pile1, ...pile3]

      setPiles(newArray)

    }

    else if (e === 2) {

      newArray = [...pile3, ...pile2, ...pile1]
      setPiles(newArray)

    }

    else if (e === 3) {

      newArray = [...pile2, ...pile3, ...pile1]

      setPiles(newArray)

    }


    if (click === 1) {
      setClick(2)
    }
    else if (click === 2) {
      setClick(3)
      setResult(newArray[10]);

    }

  }


  if (click === 3) {

    return (

      <>
        <Titulo>Magic Trick</Titulo>

        <TablePart1>
          <TablePart2>
            <TablePart3>
              <TablePart4>

                <Cards />

                <Result>
                  <h1>A sua carta é</h1>
                  <li key={result.code}>
                    <ul>
                      <img src={result.image} />

                    </ul>
                  </li>
                  <button onClick={handleSubmit}>Tentar Novamente</button>

                </Result>
              </TablePart4>
            </TablePart3>
          </TablePart2>
        </TablePart1>
      </>


    )

  }


  return (
    <>
      <Titulo>Magic Trick</Titulo>
      <TablePart1>
        <TablePart2>
          <TablePart3>
            <TablePart4>
              <Cards />

              {array.length > 0 && loading === false && <Container>

                <Pile onClick={() => { handlerStack(1) }}>

                  {pile1.map((item, index) => {
                    return (

                      <li key={index}>
                        <ul>
                          <img className='card' src={item.image} />

                        </ul>
                      </li>

                    )
                  })}

                </Pile>

                <Pile onClick={() => { handlerStack(2) }}>
                  {pile2.map((item, index) => {
                    return (

                      <li key={index}>
                        <ul>
                          <img className='card' src={item.image} />

                        </ul>
                      </li>

                    )
                  })}
                </Pile>
                <Pile onClick={() => { handlerStack(3) }}>
                  {pile3.map((item, index) => {
                    return (

                      <li key={index}>
                        <ul>
                          <img className='card' src={item.image} />

                        </ul>
                      </li>

                    )
                  })}
                </Pile>

              </Container>}

              {array.length === 0 &&
                <SubmitButton onClick={handleSubmit}>Começar</SubmitButton>
              }
            </TablePart4>
          </TablePart3>
        </TablePart2>
      </TablePart1>

    </>
  );
}

export default Main;
