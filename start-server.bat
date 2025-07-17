@echo off
echo Starting local server on http://localhost:8000
echo.
echo PCと同じWi-Fiに接続したスマホから以下のアドレスでアクセス可能です：
echo http://[あなたのPCのIPアドレス]:8000
echo.
echo IPアドレスの確認方法: 別のコマンドプロンプトで ipconfig を実行
echo.
python -m http.server 8000