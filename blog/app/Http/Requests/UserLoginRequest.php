<?php 
namespace App\Http\Requests;

use Urameshibr\Requests\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exception\HttpResponseException;

class UserLoginRequest extends FormRequest{
      public function authorize(){
            return true;
      }

      public function rules(){
            return [
                  "email"=>"required|email",
                  "password"=>"required|min:8"
            ];
      }

      public function message(){
            return [
                  
                  'email.required' => 'email field is required',
                  'email.email' => 'please enter a valid email',
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