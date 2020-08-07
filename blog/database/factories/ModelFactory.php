<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\{User, Product};
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
    ];
});


$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        'description' => $faker->paragraph,
        'price' => $faker->randomFloat(2,0,10),
        'virtual' => 0,
        'weigth' => "0.15",
        'size' => "G",
    ];
});