<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\TutorNote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\EmailDiskonController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\Purchase\PurchaseStatusController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

Route::get('/', function () {
    return Inertia::render('Index');
});
//
// Route::get('/produk', function () {
//     return Inertia::render('Main/Produk');
// });

// Route::get('/artikel', function () {
//     return Inertia::render('Main/Artikel');
// });

// Route::get('/diskusi', function () {
//     return Inertia::render('Main/Diskusi');
// });

Route::get('/karir', function () {
    return Inertia::render('Main/Karir');
});

Route::get('/profil_perusahaan', function () {
    return Inertia::render('Main/ProfilPerusahaan');
});

Route::get('/profil_tutor', function () {
    return Inertia::render('Main/ProfilTutor');
});

Route::get('/syarat_dan_ketentuan', function () {
    return Inertia::render('Main/SyaratDanKetentuan');
});

Route::resource('/produk', PurchaseController::class);

Route::get('/purchase/{order}', [PurchaseStatusController::class, 'show'])->name('purchase.status');

Route::resource('/profile', ProfileController::class);

Route::post('/email-diskon', [EmailDiskonController::class, 'handler'])->name('email-diskon');

Route::get('/email/verify/email-verification', [EmailVerificationController::class, 'notice'])->middleware('auth')->name('verification.notice');
Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])->middleware('auth', 'signed')->name('verification.verify');
Route::get('/email/verify/resend-verification', [EmailVerificationController::class, 'resend'])->middleware('auth', 'throttle:6,1')->name('verification.resend');

//download file
Route::get('/unduhfile/{slug}', function (string $slug) {
    $file = TutorNote::where('slug', $slug)->firstOrFail();
    $filePath = $file->file; // Assuming $file->file already contains the relative path


    // Construct the full path to the file
    $fullPath = storage_path("app/public/{$filePath}");
    $fileName = $file->file_name;

    // Check if the file exists
    if (file_exists($fullPath)) {
        return response()->download($fullPath, $fileName);
        // return response()->download($fullPath, $fileName);
    } else {
        // Handle the case where the file doesn't exist
        return response()->json(['error' => 'File not found'], 404);
    }
});

require __DIR__ . '/profile/profile.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/socialite.php';
