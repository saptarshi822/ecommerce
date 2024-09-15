export default function removeBrackets(str){
    str = str.replaceAll("[\"", "").replaceAll("\"]","");
    return str;
  }