const TagBackground = (tag) => {
    let bgColor;
    switch(tag) {
      case `learning environment`:
        bgColor = `#D50000`
        break;
      case `learning science`:
        bgColor = `#C51162`
        break;
      case `myth busting`:
        bgColor = `#AA00FF`
        break;
      case `performance support`:
        bgColor = `#6200EA`
        break;
      case `memory`:
        bgColor = `#304FFE`
        break;
      case `cognition`:
        bgColor = `#2962FF`
        break;
      case `evaluation`:
        bgColor = `#0091EA`
        break;
      case `learning culture`:
        bgColor = `#00B8D4`
        break;
      case `media`:
        bgColor = `#00BFA5`
        break;
      case `academia`:
        bgColor = `#00C853`
        break;
      case `corporate`:
        bgColor = `#4DD17`
        break;
      case `k12`:
        bgColor = `#AEEA00`
        break;
      case `technology`:
        bgColor = `#DD2C00`
        break;
      default:
        bgColor = `#263238`
    }
    return { 
      padding: `0.4rem`,
      marginRight: `0.5rem`,
      textTransform: `uppercase`,
      borderRadius: `5%`,
      fontSize: `0.7rem`,
      fontWeight: `bold`,
      background: bgColor,
      color: `#000000`,
      boxShadow: `none`
    };
  }

  export default TagBackground