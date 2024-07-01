void main(){
 

}

  final Map<String,dynamic> mapaCats={
  'id':[1,2,3],
  'categoria':['Dance','Ropa','Comida'], 
  };

  final Map <String, dynamic> mapaProds={
    'id':[1,2,3],
    'idcat':[1,2,3],
    'nomProd':['Iphone','Camisa Nike','Tacos']
  };

class imagen{
  int id;
  String url;

imagen({required this.id, this.url='blank_url'});
@override
String toString() {
  return """
Id_Imagen: $id  
URL_Imagen: $url
""";
}
}

class Producto{
  int id;
  String nombre;
  String descripcion;
  double precio;
  Producto(this.nombre,this.descripcion,this.id,this.precio);

  ProductoCat(nombre){


  }  

}



class categoria{
  int id=0;
  String nombre='';
  Map<String,dynamic> _data;

  categoria(this._data);

  String categoriacheck(idcat){
     id = _data['id'].indexOf(idcat);

    if (id != -1 && id < _data['cat'].length) {
      nombre= _data['cat'][id];
    } else {
      nombre='cat not found';
    }
    return nombre;
  }
  
  

  

  
}
