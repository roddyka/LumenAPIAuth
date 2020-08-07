<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
      private $product;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Product $product)
    {
        //
        $this->product = $product;
    }

    public function index(){
          return $this->product->paginate(10);
    }

    public function show($product){
        return $this->product->findOrFail($product);
    }

    public function store(Request $request){
        $this->product->create($request->all());

        //mensagem de retorno
        return response()->json(['data'=>['message'=>'Produto criado com sucesso!']]);
    }

    public function update($product, Request $request){
        $product = $this->product->find($product);
        $product->update($request->all());

        return response()->json(['data'=>['message'=>'Produto atualizado com sucesso!']]);
    }
    public function destroy($product){
        $product = $this->product->find($product);
        $product->delete();

        return response()->json(['data'=>['message'=>'Produto deletado com sucesso!']]);
    }

    //
}