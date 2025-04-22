<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\GuestMiddleware;


/*
|--------------------------------------------------------------------------
| This controller handles the homepage and other public-facing pages that don't require authentication
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/about/team', [HomeController::class, 'team'])->name('about.team');
Route::get('/about/blog', [HomeController::class, 'blog'])->name('about.blog');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/locations/evans', [HomeController::class, 'evansLocation'])->name('locations.evans');
Route::get('/locations/grovetown', [HomeController::class, 'grovetownLocation'])->name('locations.grovetown');

// Programs routes
Route::get('/programs', [HomeController::class, 'programs'])->name('programs');
Route::get('/programs/lil-dragons', [HomeController::class, 'lilDragons'])->name('programs.lil-dragons');
Route::get('/programs/kids-karate', [HomeController::class, 'kidsKarate'])->name('programs.kids-karate');
Route::get('/programs/teens-karate', [HomeController::class, 'teensKarate'])->name('programs.teens-karate');
Route::get('/programs/adult-kempo', [HomeController::class, 'adultKempo'])->name('programs.adult-kempo');
Route::get('/programs/kickboxing', [HomeController::class, 'kickboxing'])->name('programs.kickboxing');
Route::get('/programs/jiu-jitsu', [HomeController::class, 'jiuJitsu'])->name('programs.jiu-jitsu');

// Other main menu routes
Route::get('/success-stories', [HomeController::class, 'successStories'])->name('success-stories');
Route::get('/franchise', [HomeController::class, 'franchise'])->name('franchise');

/*
|--------------------------------------------------------------------------
| This controller handles Login Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\LoginController;

Route::get('login', [LoginController::class, 'index'])->middleware(GuestMiddleware::class)->name('auth.login');
Route::post('login', [LoginController::class, 'store'])->name('auth.login.store');
Route::get('logout', [LoginController::class, 'destroy'])->name('auth.logout');

/*
|--------------------------------------------------------------------------
| This controller handles Google Auth Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\SocialAuthController;

Route::get('/auth/google', [SocialAuthController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [SocialAuthController::class, 'handleGoogleCallback'])->name('auth.google.callback');

/*
|--------------------------------------------------------------------------
| This controller handles Register Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\RegisterController;


Route::get('register', [RegisterController::class, 'index'])->middleware(GuestMiddleware::class)->name('auth.register');

/*
|--------------------------------------------------------------------------
| This controller handles All Admin Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Middleware\AdminMiddleware;

Route::middleware([AdminMiddleware::class])->group(function () {

  // Dashboard
  Route::get('admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

  // Settings
  Route::get('admin/settings', [SettingsController::class, 'index'])->name('admin.settings');
  Route::put('admin/settings/profile', [SettingsController::class, 'updateProfile'])->name('admin.settings.updateProfile');
  Route::put('admin/settings/password', [SettingsController::class, 'updatePassword'])->name('admin.settings.updatePassword');
});

/*
|--------------------------------------------------------------------------
| This controller handles All User Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserSettingsController;
use App\Http\Middleware\UserMiddleware;

Route::middleware([UserMiddleware::class])->group(function () {

  // Dashboard
  Route::get('dashboard', [UserDashboardController::class, 'index'])->name('user.dashboard');

  // Settings
  Route::get('user/settings', [UserSettingsController::class, 'index'])->name('user.settings');
  Route::put('user/settings/profile', [UserSettingsController::class, 'updateProfile'])->name('user.settings.updateProfile');
  Route::put('user/settings/password', [UserSettingsController::class, 'updatePassword'])->name('user.settings.updatePassword');
});
