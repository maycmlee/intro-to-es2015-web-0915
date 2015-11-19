class Programmer{
  constructor(name, language = "Ruby"){
    this.name = name;
    this.language = language;
    }

    evangelize(){
      return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
    }
}

function addJavaScript(language){
  var newlanguage = [];
  newlanguage.push(language);
  newlanguage.push("JavaScript");
  var merged = [].concat.apply([], newlanguage);
  return merged;
  //return language + "Javascript"
}

export default Programmer;
export var bestLanguages = ['Ruby', 'Elixir'];
export {addJavaScript};
