<?php

use App\Http\Controllers\ProjectPageController;
use App\Http\Controllers\PublicPagesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [PublicPagesController::class,'index']);
Route::get('/projects/ecommerce', [ProjectPageController::class,'ecommerce']);
Route::get('/about', [PublicPagesController::class,'about']);
