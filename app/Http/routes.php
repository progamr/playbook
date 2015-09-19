<?php

/*
 * -------------------------------------------------
 * route for loading the single view
 * -------------------------------------------------
 */

Route::get('/', function () {
    return view('default');
});
/*
 * ------------------------------------------------
 * routes for the API
 * ------------------------------------------------
 */
Route::post('/login', 'Auth\AuthController@login');
Route::get('/secret', 'applicationController@getSecret');
