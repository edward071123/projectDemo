<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{!! csrf_token() !!}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link href={{ mix('css/app.css','ed') }}></link>
</head>
<body>
<div id="app">
</div>
<script src="{{ mix('js/manifest.js','ed') }}"></script>
<script src="{{ mix('js/vendor.js','ed') }}"></script>
<script src="{{ mix('js/app.js','ed') }}"></script>
</body>
</html>
