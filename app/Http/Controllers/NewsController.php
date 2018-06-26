<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
class NewsController extends Controller
{
    /**
     * 推荐列表
     */
    public function recommend()
    {
        return News::where('is_recommend', 1)->get();
    }
  

    /**
     * 新闻列表
     */
    public function index()
    {
        return News::get();
    }
  
    /**
     * 新闻详情
     */
    public function show($id)
    {
        $row = News::findOrFail($id);
        return $row;
    }
}
