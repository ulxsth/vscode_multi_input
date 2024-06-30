# vscode-multi-input
マルチカーソル状態から、tab で移動する複数入力状態を可能にする拡張

# Install
MarketPlace -> Install <br>
https://marketplace.visualstudio.com/items?itemName=vscodemultiinput.vscode-multi-input

もしくは最新の release から `.vsix` ファイルをインストールし、VSCode に D&D してください

# How To Use
1. 任意のファイルを開き、マルチカーソル状態になります（`Alt + leftClick` など）
![d7af1e9ab7130d0cedd00b44ddcc0ec0](https://github.com/ulxsth/vscode_multi_input/assets/114195789/a267b5cb-0e32-4260-b8b0-6a6735897809)

2. `F1` でコマンドパレットを展開、 `Activate multi input mode` を実行します
![6e3a3d4287a42c8f3540582da5579f52](https://github.com/ulxsth/vscode_multi_input/assets/114195789/5d347848-5fd5-4df1-a441-cc8f3b2b14ba)

3. 正しくカーソル情報が保存された場合、右下にポップアップがでます
![image](https://github.com/ulxsth/vscode_multi_input/assets/114195789/f69656db-95e8-477c-b50e-c0b9bc38dbc6)

4. この状態で tab を押すと、保存された順にカーソルが移動します
![3f12228122747a3de182a657c28d30a2](https://github.com/ulxsth/vscode_multi_input/assets/114195789/8a6eefd4-d736-49b2-a79a-ff432b89b62b)

5. もし途中でマルチカーソル状態を抜け出したい場合、`Deactivate multi input mode` を実行します


