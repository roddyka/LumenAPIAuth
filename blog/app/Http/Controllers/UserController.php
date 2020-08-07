<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Http\Services\UtilityService;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\UserLoginRequest;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;


class UserController extends Controller
{
    //
    protected $user;
    protected $UtilityService;


    public function __construct(){
        $this->middleware("auth:user",["except"=>["login","register"]]);
        $this->user = new User;
        $this->UtilityService = new UtilityService;
    }

    public function register(UserRegisterRequest $request){
 
        $password_hash = $this->UtilityService->hash_password($request->password);
      
        $this->user->createUser($request, $password_hash);
        $success_message = "registration complete";
        return $this->UtilityService->is200Response($success_message);
    }

    public function login(UserLoginRequest $request){
        $credentials = $request->only(["email", "password"]);
        if(!$token=Auth::guard("user")->attempt($credentials)){
            $responseMessage = "invalid username or password";
            return $this->UtilityService->is422Response($responseMessage);
        }
        return $this->respondWithToken($token);
    }

    public function viewProfile(){
        $responseMessage = "user Profile";
        $data = Auth::guard("user")->user();
       return $this->UtilityService->is200ResponseWithData($responseMessage, $data);
    }

    public function logUserOutAction(){
        Auth::guard("user")->logout();
        $responseMessage = "Sucessfuly Logged Out";
        return $this->UtilityService->is200Response($responseMessage);
    }

    public function logout(){
        try{
            $this->logUserOutAction();
        }catch(TokenExpiredException $e){
            $responseMessage = "token has alreary been invalitaded";
            $this->tokenExpirationException($responseMessage);
        }
    }

    public function tokenExpirationException($responseMessage){
        return $this->UtilityService->is422Response($responseMessage);
    }


    public function refreshTokenAction(){
        return Auth::guard("user")->refresh();
    }

    public function refreshToken(){
        try{
            return $this->respondWithToken($this->refreshTokenAction());
            
        }catch(tokenExpirationException $ex){
            $responseMessage = "Token refresh Failed";
            return $this->tokenExpirationException($responseMessage);
        }
    }
}