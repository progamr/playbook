<?php
/**
 * Created by PhpStorm.
 * User: developer
 * Date: 9/16/15
 * Time: 3:27 PM
 */

namespace App\Http\Controllers;


class applicationController extends BaseController {
    public function index()
    {
        return view('default');
    }
}