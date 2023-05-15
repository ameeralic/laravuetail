<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectPageController extends Controller
{
    public function ecommerce()
    {
        return Inertia::render('Projects/Ecommerce');
    }

    // public function about()
    // {
    //     return Inertia::render('Public/About');
    // }
}
