<?php 
namespace App\Http\Requests;

use Urameshibr\Requests\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exception\HttpResponseException;

class UserRegisterRequest extends FormRequest{
      public function authorize(){
            return true;
      }

      public function rules(){
            return [
                  "name"=>"required",
                  "email"=>"required|email|unique:users",
                  "password"=>"required|min:8"
            ];
      }

      public function message(){
            return [
                  'name.required' => 'name field is required',
                  'email.required' => 'email field is required',
                  'email.email' => 'please enter a valid email',
                  'email.unique:users'=>'this user exists already',
                  'password.min'=>'password must be eight characters and above',
                  'password'=>'required'
              ];
      }

      public function fieldValidation(Validator $validator){
            throw new HttpResponseException(response()->json([
                  "success"=>false,
                  "error"=>$validator->errors(),
                  "message"=>"one or more fields are required"
            ],422));
      }
}