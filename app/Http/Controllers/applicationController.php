<?php
/**
 * Created by PhpStorm.
 * User: developer
 * Date: 9/16/15
 * Time: 3:27 PM
 */

namespace App\Http\Controllers;

use App\Ingredient;
use App\Recipe;

class applicationController extends Controller {

    public function __construct()
    {
        $this->middleware('jwt.auth', ['only' => ['getSecret']]);
    }
    public function index()
    {
        return view('default');
    }

    public function getSecret()
    {
        $data['recipe'] = Recipe::find(1);
        $data['recipe']['ingredients'] = Ingredient::where('recipe_id', '=', Recipe::find(1)->id)->get();
        return response()->json($data);
    }
}