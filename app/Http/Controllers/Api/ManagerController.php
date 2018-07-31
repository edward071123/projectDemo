<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Manager;

class ManagerController extends Controller
{
    public function show()
    {
        return response()->json(Manager::all());
    }
    public function store(Request $request)
    {
        $req = $request->only('mname');
        $manager = Manager::create($req);
        if (empty($manager)) {
            return response('failed to create', 500);
        }        
        return response()->json(['errno'=>0]);
    }
    public function update(Request $request, Manager $manager)
    {
        $req = $request->only('mname');
        $custom->fill($req);
        $custom->save();

        return response()->json(['errno'=>0]);
    }
 }
