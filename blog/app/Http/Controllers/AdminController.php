<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Admin;
use App\Http\Services\UtilityService;
use App\Http\Requests\AdminRegisterRequest;
use App\Http\Requests\AdminLoginRequest;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;


class AdminController extends Controller
{
    protected $admin;
    protected $UtilityService;

    public function __construct(){
        $this->middleware("auth:admin",["except"=>["login","register"]]);
        $this->admin = new Admin;
        $this->UtilityService = new UtilityService;
    }


    public function login(AdminLoginRequest $request){
        $credentials = $request->only(["email", "password"]);

        if(!$token=Auth::guard("admin")->attempt($credentials)){
            $responseMessage = "invalid username or password";
            return $this->UtilityService->is422Response($responseMessage);
        }
        return $this->respondWithToken($token);
    }

    public function register(AdminRegisterRequest $request){
    
        $password_hash = $this->UtilityService->hash_password($request->password);
    
        $this->admin->createAdmin($request, $password_hash);

        $success_message = "registration complete";
        return $this->UtilityService->is200Response($success_message);
    }

    public function viewProfile(){
        $responseMessage = "admin Profile";
        $data = Auth::guard("admin")->user();
       return $this->UtilityService->is200ResponseWithData($responseMessage, $data);
    }

    public function logAdminOutAction(){
        Auth::guard("admin")->logout();
        $responseMessage = "Sucessfuly Logged Out";
        return $this->UtilityService->is200Response($responseMessage);
    }

    public function logout(){
        try{
            $this->logAdminOutAction();
        }catch(TokenExpiredException $e){
            $responseMessage = "token has alreary been invalitaded";
            $this->tokenExpirationException($responseMessage);
        }
    }

    public function tokenExpirationException($responseMessage){
        return $this->UtilityService->is422Response($responseMessage);
    }

    public function refreshTokenAction(){
        return Auth::guard("admin")->refresh();
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