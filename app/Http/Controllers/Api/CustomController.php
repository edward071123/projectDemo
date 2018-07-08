<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Custom;

class CustomController extends Controller
{
    public function show()
    {
        // $customs = [['no'=>1,'name'=>'test01','tel'=>'0001','mobile'=>'0901','address'=>'adst01','title'=>'tt01','type'=>'ty01'],
        //                                 ['no'=>2,'name'=>'test02','tel'=>'0002','mobile'=>'0902','address'=>'adst02','title'=>'tt02','type'=>'ty02'],
        //                                 ['no'=>3,'name'=>'test03','tel'=>'0003','mobile'=>'0903','address'=>'adst03','title'=>'tt03','type'=>'ty03'],
        //                                 ['no'=>4,'name'=>'test04','tel'=>'0004','mobile'=>'0904','address'=>'adst04','title'=>'tt04','type'=>'ty04'],
        //                                 ['no'=>5,'name'=>'test05','tel'=>'0005','mobile'=>'0905','address'=>'adst05','title'=>'tt05','type'=>'ty05']];
        // return $customs;
        return response()->json(Customs::all());
    }
    public function store(Request $request)
    {
        $req = $request->only('name','tel','mobile','address','title','position');
        $custom = Customs::create($req);
        if (empty($custom)) {
            return response('failed to create', 500);
        }        
        return response()->json(['errno'=>0]);
    }
    public function update(Request $request, Customs $custom)
    {
        $req = $request->only('name','tel','mobile','address','title','position');
        $custom->fill($req);
        $custom->save();

        return response()->json(['errno'=>0]);
    }
 }
