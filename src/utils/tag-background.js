const TagBackground = (tag) => {
    let bgColor;
    switch(tag) {
      case `learning environment`:
        bgColor = `#E57373`
        break;
      case `analytics`:
        bgColor = `#F06292`
        break;
      case `instructional strategy`:
        bgColor = `#CE93D8`
        break;
      case `performance support`:
        bgColor = `#B39DDB`
        break;
      case `memory`:
        bgColor = `#9FA8DA`
        break;
      case `cognition`:
        bgColor = `#2196F3`
        break;
      case `assessment`:
        bgColor = `#039BE5`
        break;
      case `practice`:
        bgColor = `#00ACC1`
        break;
      case `media`:
        bgColor = `#4DB6AC`
        break;
      case `higher ed`:
        bgColor = `#4CAF50`
        break;
      case `corporate`:
        bgColor = `#8BC34A`
        break;
      case `k-12`:
        bgColor = `#FFEB3B`
        break;
      case `technology`:
        bgColor = `#FF9800`
        break;
      default:
        bgColor = `#BCAAA4`
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
      boxShadow: `none`,
      whiteSpace: `nowrap`,
      marginBottom: `0.6rem`
    };
  }

  export default TagBackground