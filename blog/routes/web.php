<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return "Hello World Lumen";
});

// $router->get('products/', function () use ($router) {
//     return  \App\Products::all();
// });

$router->group(['prefix'=>'products'], function() use($router){
    $router->get('/', 'ProductController@index');
    $router->get('/{product}', 'ProductController@show');

    $router->post('/','ProductController@store');
    $router->put('/{product}','ProductController@update');

    $router->delete('/{product}','ProductController@destroy');

});

//login
$router->group(['prefix'=>'admin'], function() use($router){
    //login
    $router->post('register','AdminController@register');
    //register
    $router->post('login','AdminController@login');

    //view profile
    $router->get('view-profile','AdminController@viewProfile');

    //logout
    $router->get('logout','AdminController@logout');
    //mostrar todos os registros
    // $router->get('/','AdminController@show');
    //mostrar apenas um registo
    $router->post('refresh-token','AdminController@refreshToken');
});

//user
$router->group(['prefix'=>'user'], function() use($router){

    

    //login
    $router->post('register','UserController@register');
    //register
    $router->post('login','UserController@login');

    //view profile
    $router->get('view-profile','UserController@viewProfile');

    //logout
    $router->get('logout','UserController@logout');
    //mostrar todos os registros
    // $router->get('/','AdminController@show');
    //mostrar apenas um registo
    $router->post('refresh-token','UserController@refreshToken');
});