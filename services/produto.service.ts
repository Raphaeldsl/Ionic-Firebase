import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'; //Faz a importacao do angular firesstore
import { Produto } from '../models/Produto'; //faz a importacao da classe entidade do produto
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private afs: AngularFirestore) { } //Instacia na varivael affs o angular firestore

  //metdo para salvar novos produtos no firebase
  //recebe uma instacia da classe Produto
  salvar(produto: Produto){
    //considere a colleton com uma especie de tabelas de produtos
    //metodo add recebe o objeto que sera salvo
    //{... var} Faz a descontrucao para que o fire base salve apenas os atributos
    return this.afs.collection('produtos').add({...produto});
  }

  //busca todos os produtoa armazenados
  buscarProdutos(){
    return this.afs.collection('produtos').snapshotChanges();
  }
  buscarPorId(id:string){
    //metodo doc()  faz referencia a apenas um documento(registro) do banco
    return this.afs.collection('produtos').doc(id).valueChanges();
  }
  //alterar um registro do banco
  alterar(produto : Produto){
    return this.afs.collection('produtos').doc(produto.id).update({...produto});
  }
  //deleta um registro do banco
  deletar(id:string){
    return this.afs.doc('produtos/' + id).delete();
  }

}
