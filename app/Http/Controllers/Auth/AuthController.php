<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{

    /**
     * login a user into the application using oauth
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        //dd(Hash::make('secret'));
        $credentials = $request->only('username', 'password');

        try
        {
            if(! $token = JWTAuth::attempt($credentials))  {

                // if the user entered invalid credentials
                return response()->json(['error' => 'invalid_credentials', 401]);
            }

        }
        catch(JWTException $e)
        {
            // if there was an jwt error encountered
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // if every thing went OK
        return response()->json(compact('token'), 200);
    }
}
