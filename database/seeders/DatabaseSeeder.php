<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\CourseSession;
use App\Models\Order;
use App\Models\PaymentMethod;
use App\Models\Products;
use App\Models\PromoCode;
use App\Models\User;
use App\Models\UserProfile;
use Database\Factories\OrderSeederFactory;
use Database\Factories\UserProfileFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Ekadian Haris',
            'username' => 'Ayukuriii',
            'email' => 'ekadianharis@goalsacademy.id',
            'password' => Hash::make('qwe12334'),
            'user_role' => 'admin',
            'email_verified_at' => now(),
        ]);

        // User::factory(50)->create();

        UserProfile::create([
            'user_id' => 1,
            'phone_number' => '087763420873',
            'university' => 'Politeknik Negeri Malang',
            'major' => 'Elektronika',
        ]);

        Category::create([
            'name' => 'Dibimbing Sekali',
            'slug' => 'dibimbing-sekali',
            'is_visible' => true,
            'description' => 'Dibimbing sekali online/offline',
        ]);
        Category::create([
            'name' => 'Dibimbing Sekali Online',
            'slug' => 'dibimbing-sekali-online',
            'parent_id' => '1',
            'is_visible' => true,
            'description' => 'Dibimbing secara online',
        ]);
        Category::create([
            'name' => 'Dibimbing Sekali Offline',
            'slug' => 'dibimbing-sekali-offline',
            'parent_id' => '1',
            'is_visible' => true,
            'description' => 'Dibimbing secara offline',
        ]);
        Category::create([
            'name' => 'E-book',
            'slug' => 'e-book',
            'is_visible' => true,
            'description' => 'E-book yang dapat di download',
        ]);
        Category::create([
            'name' => 'Webinar',
            'slug' => 'webinar',
            'is_visible' => true,
            'description' => 'Webinar seru dan informatif',
        ]);

        PaymentMethod::create([
            'name' => 'QRIS',
            'category' => 'ewallet',
            'payment_type' => 'qris',
            'admin_fee' => 0.7,
            'is_price' => false,
        ]);
        PaymentMethod::create([
            'name' => 'Gopay',
            'category' => 'ewallet',
            'payment_type' => 'gopay',
            'admin_fee' => 2,
            'is_price' => false,
        ]);
        PaymentMethod::create([
            'name' => 'BNI',
            'category' => 'bank_transfer',
            'payment_type' => 'bank_transfer',
            'admin_fee' => 4000,
            'is_price' => true,
        ]);
        PaymentMethod::create([
            'name' => 'BRI',
            'category' => 'bank_transfer',
            'payment_type' => 'bank_transfer',
            'admin_fee' => 4000,
            'is_price' => true,
        ]);
        PaymentMethod::create([
            'name' => 'Permata',
            'category' => 'bank_transfer',
            'payment_type' => 'bank_transfer',
            'admin_fee' => 4000,
            'is_price' => true,
        ]);
        PaymentMethod::create([
            'name' => 'Mandiri',
            'category' => 'bank_transfer',
            'payment_type' => 'echannel',
            'admin_fee' => 4000,
            'is_price' => true,
        ]);

        PromoCode::create([
            'promo_code' => 19283155,
            'description' => 'sauqweksdlaskd',
            'value' => 15000,
            'is_price' => true,
            'date_start' => today()->addDay(),
            'date_end'  => today()->addWeek()
        ]);
        PromoCode::factory(9)->create();

        Products::create([
            'name' => 'Dibimbing Sekali Online',
            'slug' => 'dibimbing-sekali-offline',
            'excerpt' => 'Kamu akan dibimbing oleh',
            'description' => 'Kamu akan dibimbing oleh tutor keren dan kece',
            'features' => '[{"times":"1","duration":"60","category":"offline"}]',
            'price' => 49000,
            'product_image' => 'product_image/bhuEAMDWr1N08nbwk0I8LJdqM1LYUn-metaS2F0YWxvZyBQcm9ncmFtIC0gR29hbHMgQWNhZGVteS5wbmc=-.png',
        ]);
    }
}
