<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    //
    public function index()
    {
        // return "index"; //
        return inertia("Index/Index",
            ['message' => 'Hello from Laravel']);
    }
    public function show()
    {
        // return "show";
        return inertia("Index/Show");
    }
}
