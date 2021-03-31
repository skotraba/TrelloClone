import React, {useContext} from 'react';

import { CardMedia, Card, CardActionArea, CardContent } from '@material-ui/core';

import dataApi from '../../dataApi';

// import Plant from '../../assets/bgImages/OrangePlant.jpeg';

export default function NavbarThemeItem(props) {

  const {changeBg} = useContext(dataApi);


  const cardHandler = () => {
    changeBg(props.index)
  }

  return (
    <div className="navbarItem">
      <Card onClick={cardHandler}>
        <CardActionArea>
          <CardMedia 
          className="navbarItem__media"
          image={props.image}
          title="Image">
          <CardContent >
            <div className="navbarItem__content"></div>
          </CardContent>  
          </CardMedia>
        </CardActionArea>
        
      </Card>
     
    </div>
  );
}
