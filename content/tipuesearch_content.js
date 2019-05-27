var tipuesearch = {"pages": [{'title': '執行規劃', 'text': '', 'tags': '', 'url': '執行規劃.html'}, {'title': '手足球系統模擬', 'text': '專案成果摘要 \n 專案執行動機 \n 相關文獻探討 \n 專案執行成員 \n 執行使用套件 \n 專案執行過程規劃 \n 專案執行內容 \n 專案結論 \n', 'tags': '', 'url': '手足球系統模擬.html'}, {'title': '設計與繪圖', 'text': '', 'tags': '', 'url': '設計與繪圖.html'}, {'title': '零組件尺寸分析', 'text': '手足球系統的零組件尺寸分析 (可行性分析) \n 1.檯桌尺寸 (長:56\xa0 \xa0寬:30\xa0 \xa0高:5) \n 2.橫桿插入孔尺寸(直徑:0.563\xa0 \xa0距底部:2.75\xa0 \xa0 孔間距:6) \n 3.球門尺寸(寬:8.375\xa0 長:3\xa0 \xa0距底部:0.8 ) \n \n 4.橫桿尺寸(長:70\xa0 \xa0直徑:0.563) \n *球桿直徑與桌檯孔洞呈鬆配合 \n 5.球員尺寸(長:1.5\xa0 \xa0寬:1\xa0 \xa0高:3\xa0 \xa0圓孔:0.563\xa0 \xa0 距底部:0.9) \n *球員孔洞需與衡感直徑呈緊配合，必須使球員能隨橫桿轉動 \n \n 6.球尺寸(直徑:0.15) \n *球的直徑要大於球員距底板的距離，才不會發生卡球等問題', 'tags': '', 'url': '零組件尺寸分析.html'}, {'title': '參數設計與繪圖', 'text': '手足球系統的零組件參數設計與繪圖 (零組件初步設計繪圖) \n Onshape 零組件連結 \n 球檯繪圖參數設計 \n \n', 'tags': '', 'url': '參數設計與繪圖.html'}, {'title': '細部設計與 BOM', 'text': '完成手足球零組件細部設計 (可參考  https://youtu.be/PgnvZV5s13c  中各項設計), 並將設計 BOM (Bill of Materials) 納入 CMSimfly 網際內容管理系統. (系統 BOM 文件整理) \n 手足球 DIY 影片: \n \n \n 參考資料: \n https://www.matterhackers.com/articles/how-to-build-a-foosball-table \n https://www.matterhackers.com/store/digital-designs/foosball-table-parts \n 手足球零件格式說明 \n 手足球零件格式說明 \n 零件 BOM \n 手足球零組件材料表 (含零組件下載連結) \n 零件尺寸圖 \n 零件尺寸圖 \n 零件部分組裝圖 \n 零件部分組裝圖 \n 3D 零組件爆炸圖 \n 3D 零組件爆炸圖 \n', 'tags': '', 'url': '細部設計與 BOM.html'}, {'title': 'V-rep 動態模擬', 'text': '手足球系統中各球員擊球與操控桿移動旋轉的 V-rep 動態模擬 (系統功能模擬) \n 以文字及操作影片說明如何從 Onshape 設計繪製零組件後, 如何轉入 V-rep, 如何編寫程式, 如何進行各種功能測試, 最後完成手足球的 V-rep 動態模擬系統. \n 檔案位置： football table.ttt', 'tags': '', 'url': 'V-rep 動態模擬.html'}, {'title': '問題和討論', 'text': 'Q：遇到球無法滾出球門？ \n A：有可能是因為你簡化的過程，簡化的模型太高，而導致球會卡在球門，所以遇到類似情形把簡化的模型刪掉即可 \n Q： 球進門後卡在球門下？ \n A： 繪製草圖時因不小心讓那裏成為平台，而導致球無法向下滾動，所以我們把那個地方改成斜面即可！ \n \n Q： 球順著軌道滾動後卡在回球機構的門口？ \n A： 把送球機構的孔洞放大，讓球得以順利通過返回球桌！ \n \n Q：如何讓桿子偵測到球體的位置並進行移動和反擊? \n A：先利用指令得知球體的 Y 方向座標，再進行相減得到值即可確認球體在桿子的右邊還是左邊，並使桿子確實反擊 \n Q：要如何得知球體目前的位置? \n A：使用指令 number returnCode,number parentObjectHandle = vrep.simxGetObjectParent(number clientID,number objectHandle,number operationMode)即可得知目前球體的座標位置 \n \xa0', 'tags': '', 'url': '問題和討論.html'}, {'title': '送球機構設計與模擬', 'text': '手足球發球與進球後自動送球機構設計與 V-rep 動態模擬 (機構與傳動系統設計與模擬) \n 可採用螺旋機構或多連桿機構設計, 透過進球感測器感應後, 將儲存於螺桿上的球送回球檯. \n 以下為參考機構模擬影片: \n \n \n \n', 'tags': '', 'url': '送球機構設計與模擬.html'}, {'title': '設計與模擬影片', 'text': '\n Vrep基本設定 \n', 'tags': '', 'url': '設計與模擬影片.html'}, {'title': '系統功能展示', 'text': '手足球模擬系統功能展示 (模擬展示與說明影片) \n 以下提供所完成的 V-rep 系統模擬影片與相關檔案下載連結 \n \n 國立虎尾科技大學機械設計工程系 - 2019 Spring 第九週手足球運動模擬參考檔案 \n 足球員採用 Onshape 建立, 其他零組件採用 Solvespace 建立 \n 參考檔案位於:\xa0 https://github.com/mdecourse/cd2019/tree/gh-pages./../downloads/foosball_solvespace_vrep \n V-rep 場景檔案:\xa0 https://github.com/mdecourse/cd2019/blob/gh-pages./../downloads/foosball_solvespace_vrep/kmol_foosball_w9.ttt \n 以 V-rep 3.6.1 以上版本開啟檔案後執行, 鍵盤 a 與 d 鍵控制左右平移, w 與 s 鍵控制旋轉. \n書)\n', 'tags': '', 'url': '系統功能展示.html'}, {'title': '總結報告', 'text': '', 'tags': '', 'url': '總結報告.html'}, {'title': '專案口頭簡報', 'text': '各組利用倉儲中的 Reveal.js 進行結案簡報 (結案口頭簡報) \n', 'tags': '', 'url': '專案口頭簡報.html'}, {'title': '專案報告書', 'text': '各組完成 html 與 pdf 格式之手足球專案結案報告 (文字結案報告\n', 'tags': '', 'url': '專案報告書.html'}, {'title': 'w1~w10', 'text': '手足球 \n ag4倉儲 \n blogger', 'tags': '', 'url': 'w1~w10.html'}, {'title': '組員', 'text': '40623102  吳柔燕\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623124  葉修宏 \n 40623110  翁俊揚\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623132  趙家傑 \n 40623111  王映捷\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623144  林昭權 \n 40623113  吳承哲\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623152  潘季宏 \n 40623121  蔡朝旭\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623157  李昀霖 \n \n', 'tags': '', 'url': '組員.html'}, {'title': '可攜系統', 'text': '', 'tags': '', 'url': '可攜系統.html'}, {'title': 'SSH步驟', 'text': '1.利用cmd.exe(小黑窗) \n 輸入指令: git config --edit --system \n \n 叫出vi 編輯器然後只能利用上下左右控制 \n 按a進入編輯後左下角會顯示 -- INSERT -- \n 2.進入後會如下圖所示 \n \n 按BACKSPACE \n 把紅框中的 helper=manger 給刪除 \n 接下來輸入 冒號( : )然後輸入WQ(儲存後並關閉) \n PS : 如不儲存的話直接輸入EXIT(直接離開) \n 3.金鑰製作 \n 到cmd.exe(小黑窗)輸入\xa0 sh_yen就會進入git 的shell \n \n 輸入\xa0 \xa0 \xa0 ssh-keygen -t rsa -b 4096 -C "This is my key" \n PS:\xa0 \xa0 this is my key 請輸入你要的名稱例如：學號 \n 然後會出現一段英文會叫你按ENTER鍵 \n 然後就按下ENTER鍵 \n \n 金鑰內容會出現在\xa0 \xa0 y:\\home\\.ssh\\id_rsa與id_rsa.pub \n 然而我們需要的是 id_rsa.pub裡的內容 \n \n PS:上圖中2個檔案中一個很長一個較短選短的那個 \n 利用Scite打開檔案並複製裡面之內容複製至github \n \n 進入後 \n \n 把複製的字串給貼入後儲存至你們小組倉儲切換至SSH再進行clone一次 \n \n 這樣以後就不用輸入帳號密碼來進行推送 \n 在公共場所也相對安全 \n PS : SSH是認髓身碟的倉儲 \n 成功的樣子 \n \n 參考文獻 :\xa0 \xa0https://www.youtube.com/watch?time_continue=5&v=t4PslV5Abjs \n \n', 'tags': '', 'url': 'SSH步驟.html'}, {'title': '可攜系統製作步驟', 'text': '1.先在C:/中創資料夾 名叫data的新資料夾 為了連接Y:/ \n \n 2.請先至以下網址內下載\xa0  https://www.scintilla.org/SciTEDownload.html \xa0\xa0 如圖下紅框處 \n \n 3.下載完後解壓縮至第一步驟的data \n \n 4.解完壓縮至資料夾中找尋sciTE 如下圖所示 \n \n \n 5.開啟後點選紅框處 \n \n \n \n 6.利用ctrl+f尋找code.page 並修改成下圖所示 \n \n 7.接下來進入\xa0 python3.7.2 \xa0\xa0點選下圖1紅框處 下載下圖2的python \n \n \n \n 圖1如上 \n \n 圖2如上 \n 8.接下來照下面的圖片步驟做就行 \n \n \n \n \n \n \n 9.進入\xa0 C:\\tmp\\p37\\Scripts\xa0 開啟pip.exe 一樣再次利用ctrl+f找尋c:\\p37並改為y:\\p37 如下圖所示 \n \n 10.更改完save起來後就把整個p37資料夾移到步驟一的data資料夾就可以 \n', 'tags': '', 'url': '可攜系統製作步驟.html'}, {'title': 'start的製作', 'text': '利用SciTE製作start.bat檔案\xa0\xa0 內容如下 \n \n', 'tags': '', 'url': 'start的製作.html'}, {'title': 'stop的製作', 'text': '12.利用SciTE製作stop.bat檔案\xa0內容如下 \n \n', 'tags': '', 'url': 'stop的製作.html'}, {'title': 'Kungit\xa0 製作', 'text': 'Step1. \n Open\xa0 http://mde.tw/wcm2019/content/實習項目\xa0二.html =>Download\xa0\xa0 nodejs_with_ungit.7z \xa0  Put that into  DATA  document \n \n Step2.\xa0 \n Use  SciTE 編輯器  edit \xa0 start_cadlab.bat\xa0 and put\xa0 \n set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; \n set USERPROFILE=%Disk%:\\home\xa0 \n %path3%;\xa0 \xa0\xa0 into\xa0\xa0 start_cadlab.bat \n \n \n Step3. \n Use \xa0 SciTE 編輯器 \xa0 add\xa0 \n ungit --launchBrowser=0 --launchCommand "C:\\PROGRA~2\\Google\\Chrome\\Application\\chrome.exe\xa0 %%U"\xa0 save as  kungit.bat \n \n then we put that into Y:\\ \n \n Step4. \n Open your  Koml_2019 start.bat  which place in\xa0 Repositories \xa0 \xa0 \n Just type  kungit  to call this \n \n Done . \n', 'tags': '', 'url': 'Kungit\xa0 製作.html'}, {'title': 'kungit上推', 'text': '首先要上傳資料時，點及create an\xa0 empty commit ， 參照下圖 \n 輸入title和body後，點及commit ，參照下圖 \n \n 若要上推到網站上，點及藍色圓圈，會出現gh-pages，參照下圖 \n \n 再點及push，然後輸入帳號密碼即可，參照下圖 \n \n 若要刪除commit，同樣點及藍色圓圈，再點及uncommit即可，參照下圖 \n \n', 'tags': '', 'url': 'kungit上推.html'}, {'title': '實習任務', 'text': '', 'tags': '', 'url': '實習任務.html'}, {'title': '實習任務一', 'text': '建立個人可攜系統 \n 組員操作影片 \n 40623110-翁俊揚 \n \n 40623132 趙家傑 \n \n \n 40623102 \n 40623152-可攜系統 \n 40623113-可攜系統影片 \n \n 40623144-林昭權 \n \n 40623111王映捷 \n \n 40623121蔡朝旭 \n \n 分組程式修正 \n 原程式只得到分組結果， 並無分組數列，所以要編寫一個程式讀進這個分組結果，並列出數列 \n \n \n 程式碼 \n import random\nfilename = \'cdaw1_student_list.txt\'\nnum_in_one_group = 8\ngroup = 1\nc2019 = []\nwith open(filename) as f:\n    read_data = f.read().splitlines() \nprint("共有 " + str(len(read_data)) + " 位學員")\nrandom.shuffle(read_data)\nfor i in range(len(read_data)):\n    if i%num_in_one_group == 0:\n        print("-"*20)\n        print("group " + str(group) +":")\n        group_list = []\n        print()\n        print(read_data[i])\n        group_list.append(read_data[i])\n        group = group + 1\n    else:\n        print(read_data[i])\n        group_list.append(read_data[i])\n    c2019.append(group_list)\nprint(c2019) \n 程式碼內容 \n filename = \'cdaw1_student_list.txt\' 將cdaw1_student_list文字檔的內容導入程式碼 \nnum_in_one_group = 8 每組的人數 \n\ngroup = 1 組序從哪裡開始 \nc2019 = [] 各班分組後所得數列 \n\nread_data = f.read().splitlines()  讀進全部檔案, 轉進數列, 並同時將各行的 \\n 去除 \n\nrandom.shuffle(read_data) 利用 shuffle 將數列隨機弄亂 \n\nif i%num_in_one_group == 0: 利用整數相除的餘數進行分組\n       \nprint("-"*20) 列出分隔符號 group_list = [] 在分組區隔時重置各組學員數列 \n   \nprint(read_data[i]) 同時列出與分隔標註對應 i 的數列內容\n\n     \nprint(read_data[i]) 逐一列出同組的其他學員\n   \n 呈現結果: \n >y:/p37/pythonw -u "分組程式1.py"\n共有 56 位學員\n--------------------\ngroup 1:\n\n40623121\n40623138\n40623150\n40623156\n40623142\n40423249\n40623109\n40623107\n--------------------\ngroup 2:\n\n40623129\n40423214\n40623128\n40623130\n40623158\n40623113\n40623153\n40623131\n--------------------\ngroup 3:\n\n40423160\n40623132\n40623127\n40623118\n40423111\n40623133\n40623116\n40623157\n--------------------\ngroup 4:\n\n40623110\n40623145\n40623139\n40623155\n40623141\n40623111\n40423218\n40623154\n--------------------\ngroup 5:\n\n40623115\n40623144\n40423159\n40623135\n40623136\n40623147\n40623124\n40623105\n--------------------\ngroup 6:\n\n40623119\n40623125\n40623112\n40623134\n40623122\n40423142\n40623114\n40623102\n--------------------\ngroup 7:\n\n40623140\n40623117\n40623152\n40623137\n40623101\n40623146\n40623108\n40423122\n[[\'40623121\', \'40623138\', \'40623150\', \'40623156\', \'40623142\', \'40423249\', \'40623109\', \'40623107\'], [\'40623121\', \'40623138\', \'40623150\', \'40623156\', \'40623142\', \'40423249\', \'40623109\', \'40623107\'], [\'40623121\', \'40623138\', \'40623150\', \'40623156\', \'40623142\', \'40423249\', \'40623109\', \'40623107\'], [\'40623121\', \'40623138\', \'40623150\', \'40623156\', \'40623142\', \'40423249\', \'40623109\', \'40623107\'], [\'40623121\', \'40623138\', \'40623150\', \'40623156\', \'40623142\', \'40423249\', \'40623109\', \'40623107\'], [\'40623121\', \'40623138\', \'40623150\', \'40623156\', \'40623142\', \'40423249\', \'40623109\', \'40623107\'], [\'40623121\', \'40623138\', \'40623150\', \'40623156\', \'40623142\', \'40423249\', \'40623109\', \'40623107\'], [\'40623121\', \'40623138\', \'40623150\', \'40623156\', \'40623142\', \'40423249\', \'40623109\', \'40623107\'], [\'40623129\', \'40423214\', \'40623128\', \'40623130\', \'40623158\', \'40623113\', \'40623153\', \'40623131\'], [\'40623129\', \'40423214\', \'40623128\', \'40623130\', \'40623158\', \'40623113\', \'40623153\', \'40623131\'], [\'40623129\', \'40423214\', \'40623128\', \'40623130\', \'40623158\', \'40623113\', \'40623153\', \'40623131\'], [\'40623129\', \'40423214\', \'40623128\', \'40623130\', \'40623158\', \'40623113\', \'40623153\', \'40623131\'], [\'40623129\', \'40423214\', \'40623128\', \'40623130\', \'40623158\', \'40623113\', \'40623153\', \'40623131\'], [\'40623129\', \'40423214\', \'40623128\', \'40623130\', \'40623158\', \'40623113\', \'40623153\', \'40623131\'], [\'40623129\', \'40423214\', \'40623128\', \'40623130\', \'40623158\', \'40623113\', \'40623153\', \'40623131\'], [\'40623129\', \'40423214\', \'40623128\', \'40623130\', \'40623158\', \'40623113\', \'40623153\', \'40623131\'], [\'40423160\', \'40623132\', \'40623127\', \'40623118\', \'40423111\', \'40623133\', \'40623116\', \'40623157\'], [\'40423160\', \'40623132\', \'40623127\', \'40623118\', \'40423111\', \'40623133\', \'40623116\', \'40623157\'], [\'40423160\', \'40623132\', \'40623127\', \'40623118\', \'40423111\', \'40623133\', \'40623116\', \'40623157\'], [\'40423160\', \'40623132\', \'40623127\', \'40623118\', \'40423111\', \'40623133\', \'40623116\', \'40623157\'], [\'40423160\', \'40623132\', \'40623127\', \'40623118\', \'40423111\', \'40623133\', \'40623116\', \'40623157\'], [\'40423160\', \'40623132\', \'40623127\', \'40623118\', \'40423111\', \'40623133\', \'40623116\', \'40623157\'], [\'40423160\', \'40623132\', \'40623127\', \'40623118\', \'40423111\', \'40623133\', \'40623116\', \'40623157\'], [\'40423160\', \'40623132\', \'40623127\', \'40623118\', \'40423111\', \'40623133\', \'40623116\', \'40623157\'], [\'40623110\', \'40623145\', \'40623139\', \'40623155\', \'40623141\', \'40623111\', \'40423218\', \'40623154\'], [\'40623110\', \'40623145\', \'40623139\', \'40623155\', \'40623141\', \'40623111\', \'40423218\', \'40623154\'], [\'40623110\', \'40623145\', \'40623139\', \'40623155\', \'40623141\', \'40623111\', \'40423218\', \'40623154\'], [\'40623110\', \'40623145\', \'40623139\', \'40623155\', \'40623141\', \'40623111\', \'40423218\', \'40623154\'], [\'40623110\', \'40623145\', \'40623139\', \'40623155\', \'40623141\', \'40623111\', \'40423218\', \'40623154\'], [\'40623110\', \'40623145\', \'40623139\', \'40623155\', \'40623141\', \'40623111\', \'40423218\', \'40623154\'], [\'40623110\', \'40623145\', \'40623139\', \'40623155\', \'40623141\', \'40623111\', \'40423218\', \'40623154\'], [\'40623110\', \'40623145\', \'40623139\', \'40623155\', \'40623141\', \'40623111\', \'40423218\', \'40623154\'], [\'40623115\', \'40623144\', \'40423159\', \'40623135\', \'40623136\', \'40623147\', \'40623124\', \'40623105\'], [\'40623115\', \'40623144\', \'40423159\', \'40623135\', \'40623136\', \'40623147\', \'40623124\', \'40623105\'], [\'40623115\', \'40623144\', \'40423159\', \'40623135\', \'40623136\', \'40623147\', \'40623124\', \'40623105\'], [\'40623115\', \'40623144\', \'40423159\', \'40623135\', \'40623136\', \'40623147\', \'40623124\', \'40623105\'], [\'40623115\', \'40623144\', \'40423159\', \'40623135\', \'40623136\', \'40623147\', \'40623124\', \'40623105\'], [\'40623115\', \'40623144\', \'40423159\', \'40623135\', \'40623136\', \'40623147\', \'40623124\', \'40623105\'], [\'40623115\', \'40623144\', \'40423159\', \'40623135\', \'40623136\', \'40623147\', \'40623124\', \'40623105\'], [\'40623115\', \'40623144\', \'40423159\', \'40623135\', \'40623136\', \'40623147\', \'40623124\', \'40623105\'], [\'40623119\', \'40623125\', \'40623112\', \'40623134\', \'40623122\', \'40423142\', \'40623114\', \'40623102\'], [\'40623119\', \'40623125\', \'40623112\', \'40623134\', \'40623122\', \'40423142\', \'40623114\', \'40623102\'], [\'40623119\', \'40623125\', \'40623112\', \'40623134\', \'40623122\', \'40423142\', \'40623114\', \'40623102\'], [\'40623119\', \'40623125\', \'40623112\', \'40623134\', \'40623122\', \'40423142\', \'40623114\', \'40623102\'], [\'40623119\', \'40623125\', \'40623112\', \'40623134\', \'40623122\', \'40423142\', \'40623114\', \'40623102\'], [\'40623119\', \'40623125\', \'40623112\', \'40623134\', \'40623122\', \'40423142\', \'40623114\', \'40623102\'], [\'40623119\', \'40623125\', \'40623112\', \'40623134\', \'40623122\', \'40423142\', \'40623114\', \'40623102\'], [\'40623119\', \'40623125\', \'40623112\', \'40623134\', \'40623122\', \'40423142\', \'40623114\', \'40623102\'], [\'40623140\', \'40623117\', \'40623152\', \'40623137\', \'40623101\', \'40623146\', \'40623108\', \'40423122\'], [\'40623140\', \'40623117\', \'40623152\', \'40623137\', \'40623101\', \'40623146\', \'40623108\', \'40423122\'], [\'40623140\', \'40623117\', \'40623152\', \'40623137\', \'40623101\', \'40623146\', \'40623108\', \'40423122\'], [\'40623140\', \'40623117\', \'40623152\', \'40623137\', \'40623101\', \'40623146\', \'40623108\', \'40423122\'], [\'40623140\', \'40623117\', \'40623152\', \'40623137\', \'40623101\', \'40623146\', \'40623108\', \'40423122\'], [\'40623140\', \'40623117\', \'40623152\', \'40623137\', \'40623101\', \'40623146\', \'40623108\', \'40423122\'], [\'40623140\', \'40623117\', \'40623152\', \'40623137\', \'40623101\', \'40623146\', \'40623108\', \'40423122\'], [\'40623140\', \'40623117\', \'40623152\', \'40623137\', \'40623101\', \'40623146\', \'40623108\', \'40423122\']]\n>Exit code: 0 \n 使用的cdaw1_student_list.txt檔案: \n 40423111 40423122 40423142 40423159 40423160 40423214 40423218 40423249 40623101 40623102 40623105 40623107 40623108 40623109 40623110 40623111 40623112 40623113 40623114 40623115 40623116 40623117 40623118 40623119 40623121 40623122 40623124 40623125 40623127 40623128 40623129 40623130 40623131 40623132 40623133 40623134 40623135 40623136 40623137 40623138 40623139 40623140 40623141 40623142 40623144 40623145 40623146 40623147 40623150 40623152 40623153 40623154 40623155 40623156 40623157 40623158 \n Git手冊 \n 9.1 Git as a Client \n git svn： Git中所有Subversion橋接指令的基本指令都是 git svn 。它需要相當多的指令，因此我們將在完成一些簡單的工作流程時展示最常見的指令。當用戶使用git svn時，需特別注意避免同時與Git遠端倉儲交互操作使用。 \n Git 分支 \n 幾乎每一種版本控制系統（Version Control System，以下簡稱 VCS）都支援某種形式的分支（branch）功能， 使用分支意味著你可以從開發主線上分離開來，然後在不影響主線的情況下繼續工作。 有人把 Git 的分支模型視為它的「殺手級功能」， 它有何特別之處呢？新建分支的操作幾乎可以在瞬間完成，並且一般來說切換不同分支也很快； 跟其它的 VCS 不一樣的地方是 Git 鼓勵在工作流程中頻繁地使用分支與合併（merge），即使一天之內進行許多次都沒問題。 \n git branch 命令 :建立一個新的分支這會在目前提交上新建一個指標，它並不會切換到這個分支。 \n git checkout 命令 :切換到一個已經存在的分支。 \n *切換分支會修改工作目錄裡的檔案 當你在 Git 中切換分支時，工作目錄內的檔案將會被修改； 如果切換到舊分支，你的工作目錄會回復到看起來就像當初你最後一次在這個分支提交時的樣子。 如果 Git 無法很乾淨地切換過去，它就不會讓你切換過去。 \n git merge 命令 :緊急修正分支進行合併。 \n Git Internals \n 10.1 Plumbing and Porcelain \n Git會創建一個git目錄用於備份或複製 \n Git-Head文件：目前被檢出的分支/Index文件：暫存區信息/Refs目錄：指向數據（分支）/Objects目錄：所有數據內容 \n 10.2 Git Objects \n cat-file：從git取回數據 \n update-ref：更新使用 \n 10.3 Git References \n 執行git branch--cat.git/Head \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0ref：refs/heads/master \n 執行git checkout test--cat.git/Head \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ref：refs/heads/test \n Remotes ：git push origin master\xa0：推送上一次分支 \n 10.5 The Refspec \n git push origin ：topic \n git push origin--delete topic \n <<<<<<< HEAD \n 10.6 Transfer Protocols \n Transfer Protocols--傳輸協議 \n Git可以透過兩種主要方式在兩個倉儲之間傳輸數據：“啞吧”協議與“智能”協議。 本章重點著重於介紹這兩個主要協議的運作方式。 \n The Dumb Protocol--啞巴協議 \n 該協議稱為“啞巴協議”，是因為它在傳輸過程中不需要服務端的Git特定代碼;\xa0獲取過程是一系列HTTP\xa0 GET 請求，使用者可以自由的呈現Git倉儲的安排。 \n 10.7 Maintenance and Data Recovery \n 本章重點在介紹Git內部的維護和數據的恢復，有時Git會自動執行一個名為“auto  gc ”的指令，大多數情況下，此指令不執行任何操作，但如果有過多的packfiles，則Git會執行git gc的指令，此指令會刪除不必要的文件。 \n 不小心遺失提交則可使用git long和git master兩個指令來進行恢復。 \n 10.8 Environment Variables \n Git總是在 bash shell中 運行 ，並使用許多shell環境變量來確定它的行為方式。 \n GIT_EXEC_PATH：可透過運行檢查當前設置 git --exec-path 。 \n HOME：它是Git查找全局配置文件的地方。 \n GIT_CONFIG_NOSYSTEM：如果您的系統配置干擾了您的指令，但是您無權更改或刪除它，這將非常有用。 \n GIT_COMMITTER_NAME \xa0設置提交者的名字 。 \n \n GIT_COMMITTER_EMAIL \xa0 是“提交者”字段的電子郵件地址。 \n \n \n GIT_COMMITTER_DATE \xa0 用於“提交者”字段中的日期。 \n 10.9 Summary \n Git為一個非常強大的系統工具，可以輕鬆使用它作為VCS。本章介紹了許多管道指令 - 這些指令使用戶在使用上更家簡單。 \n Git and Other Systems \n \n \n', 'tags': '', 'url': '實習任務一.html'}, {'title': '實習任務二', 'text': '翻譯 \n 研讀Git 教材重點 \n \n V-rep \n \n V-rep的操作手冊: \n http://www.coppeliarobotics.com/helpFiles/ \xa0 \n V-rep Tutorial: \n http://www.coppeliarobotics.com/helpFiles/en/tutorials.htm \n BubbleRob tutorial: \n http://www.coppeliarobotics.com/helpFiles/en/bubbleRobTutorial.htm \n 內容簡介 \n 在創建Sphere時，要取消 create dynamic and respondable shape \xa0要是沒取消的話，Sphere會是dynamic( ☑ Body is dynamic )，會利用上面的Bullet2.78 engine去執行。 \n V-rep本身沒有dynamic分析的能力。 \n 把要放入機器人的機械或元件寫成model，這樣才會有版本可言。 \n 操作方式 \n 可開啟數學計算式，裡面的Collision跟Distance是Bubble Rob所具備的東西。 \n 可平移物體的x,y,z軸。 \n 可旋轉物體的方向。 \n 可調整視角。 \n 開啟當下選擇的物體的設定欄。 \n ↪ Simulation Setting ➔At simulation end➔☑Reset scene to initial state( 回到最初的位置 ) \n 快點Sphere前面的方格兩下 ➔Shape➔View/modify geometry( 可調整物體大小 ) \n 快點Sphere前面的方格兩下➔Shape➔Adjust color➔Ambient/diffuse component( 可調色 ) \n 快點Sphere前面的方格兩下➔Common➔☑Object is model base( 變成model ) \n 快點Sphere前面的方格兩下➔Common ➔ ☑Object/model can transfer or accept DNA( model可用程式輸入 ) \n Cone Proximity Sensor \n Menu bar ➔add➔proximity sensor➔cone type就可以創建一個錐形的接近傳感器。 \n \n 設定proximity sensor ➔快點前面的圖示兩下➔ Show volume parameters ➔可調整 \n ➔Offset(偏移) \n \n ➔Range(範圍) \n \n ➔Angle(角度) \n \n 設定proximity sensor ➔快點前面的圖示兩下➔ Show\xa0detection parameters \n ➔把Don\'t allow detections if distance smaller than的打勾取消掉，這串字的意思是如果距離小於此時則不允許檢測。 \n v-rep 設計動態模擬 \n 在 V-REP 中，僅動態模擬有限數量的物件 (objects) 。這些是 shapes,joints和 force sensors，但它將取決於 場景 結構和物體屬性，是否將動態模擬給定物件。在 模擬 過程中可以輕鬆識別動態模擬對象，因為在 場景層次結構中 ( scene hierarchy)對象名稱旁邊會出現以下圖標： \n \n 點擊場景層次結構中的圖標（僅在模擬期間）將顯示與對象的動態行為相關的一些信息。應該通過動態模擬但由於某種原因無法動態模擬的對象將顯示以下圖標： \n \n Static/non-static, respondable/non-respondable shapes \n \xa0根據動態模擬過程中的行為，物件可分為 4 組： \n \n 在動態模擬期間，靜態形式不會受到影響（即它們相對於其從屬物件的位置是固定的），而非靜態物件將直接受到重力或其他約束（例如，動態啟用的關節，見下文）的影響。可響應的物件在動態碰撞期間相互影響（即它們產生相互 碰撞反應 ，它們將相互反彈）。下圖說明了靜態 / 非靜態，可連動 / 不可連動的行為： \n \n [靜態 / 非靜態，可連動 / 不可連動的形式行為和交互 ] \n \xa0兩個可連動的物件將一直產生碰撞反應，除非它們各自的碰撞互相不重疊。可以在shape dynamics properties對話框中設置靜態 / 非靜態，可連動 / 不可連動的形狀屬性以及隱藏碰撞 \n Dynamically enabled joints/force sensor \n 如果沒有其他限制，非靜態物件將下降（即受重力影響）。可以通過將兩個物件與 動態啟用的 \xa0 關節 或 動態啟用的 \xa0 力傳感器 連接在一起來設置物件之間的動態約束。 \n 動態啟用的關節是處於力或扭矩模式的關節或以混合方式操作的 關節 （參見 關節屬性 ），並且具有作為從屬的物件和正好一個必須是非靜態物件的子物件。另外，可以在 環閉合配置中 涉及關節。在這種情況下，關節必須通過 虛擬 -  虛擬 鏈接連接到兩個形狀（其中鏈接類型必須是動態，重疊約束）。對於虛擬虛擬鏈接，請參閱 虛擬屬性 。 \n 動態啟用的力傳感器是力傳感器，其具有作為物件的物件和恰好一個必須是非靜態形式的子物件。另外，可以將力傳感器包括在 環閉合配置中 。在這種情況下，力傳感器必須通過 虛擬 -  虛擬 鏈接（其中鏈接類型必須是動態，重疊約束）連接到兩個物件。對於虛擬鏈接，請參閱 虛擬屬性 。 \n 下圖顯示了關節或力傳感器被認為是動態啟用的有效情況（假設關節 / 力傳感器和兩個物件位於動態模擬的 模型 中，這是默認情況）： \n \n \n 按照上述指南非常重要，以獲得動態啟用的關節或力傳感器。在模擬過程中，如果 V-REP 發現未動態啟用的力傳感器，它將在場景 層次結構視圖 中的名稱旁邊顯示一個小警告圖標。對於力 / 扭矩模式中的關節或者應該以混合方式操作並且不是動態啟用的關節也是如此。 \n 以下是一些不會動態啟用關節的示例情況： \n \xa0接頭不是有力或扭矩模式，接頭不是以混合方式運行。 \n \xa0關節的從屬沒有形式。 \n 關節有多個子物件。 \n 關節直接連接到另一個關節。 \n 關節（或它連接的兩種形式之一）位於未動態模擬的 模型 中 \n 以下是一些不會動態啟用力傳感器的示例情況： \n 力傳感器的從屬沒有形式。 \n 力傳感器有多個子物件。 \n 力傳感器（或它連接的兩種形式之一）位於未動態模擬的 模型 中。 \n BubbleRob \n 1.建立BubbleRob本體 新增一個 Sphere ， X-size 為 0.2( 單位為m) 在 object common properties 下的 object special properties 將 Collidable、Measurable、Renderable、Detectable 都打勾，將本體位置設定在Z軸(Along Z)0.02(須確認本體是照world移動) 接著在選單雙擊Sphere將物件名稱改為BubbleRob就完成本體設定。 \n \n 2.建立Proxmity sensor 在選單中建立一個 Proximity sensor 且選為 Cone type 將sensor利用旋轉功能在 Around Y及Z 輸入 90 位置為 X-coord 輸入 0.1 及 Z-coord 輸入 0.12 \n \n \n 接著設定sensor感應範圍，在選單點擊感測器符號開啟它的設定框，點擊 show volume\xa0 parameter 開啟選單設定 Offset=0.005 、 Angle=30 、 Range=0.15 \n \n 點擊 Show detection parameters ，將" Don\'t allow detections if distance smaller than" 選項取消打勾。 將感測器名稱設定為 bubbleRob_sensingNose ，就完成感測器設定了。 在 Scene hireachy (場景等級)將完成設定的sensor放在bubbleRob下 最後將兩項物件 Edit->"Make last selected object parent" 連結成一個物件。 3.建立bubbleRob的輪子 建立一個 cylinder 尺寸為(0.08,0.08,0.02)，跟本體一樣將 object common properties 內的特殊屬性都打開，設定位置(0.05,0.1,0.04)和旋轉(-90,0,0)，此物件命名為 bubbleRob_leftWheel ，然後將完成的物件複製一份且將位置參數Y設定為-0.1，此物件命名為 bubbleRob_RightWheel 設定 joint (motor) Add->joint->Revolute 建立一個軸，建立完成按住ctrl選擇剛剛的 bubbleRob_leftWheel 然後在 postion 及 \xa0orientation 內選擇 apply to selection 來複製輪子的參數，這樣軸的位置就會跟左邊輪子一樣了。 點擊開啟軸參數的設定框，將\xa0 Show dynamic parameters 內的 enable the motor 以及底下的 Lock motor when target velocity is zero 都打勾，完成左邊輪軸設定後，用同樣方式製作右輪軸。 最後將輪子層級放置在輪軸底下，輪軸層級則置於本體下 \n \n 4.建立slider 開始模擬後發現機器人會向後翻轉，因為少了第三個接地點 建立一個圓形物件(設定0.05)，一樣打開所有特殊屬性，將此物件命名為\xa0 bubbleRob_slider ，在 shape dynamics properties 裡將物件設定為 無摩擦 。 摩擦力相關的係數都調成0 接著建立 Force sensor 命名為 bubbleRob_connection ，將它往上提0.05 ，再跟剛剛的滑塊接合成一個物件，這個物件的位置設定X=(-0.07)，此物件的層級則放在bubbleRob底下，這樣就完成第三個接地點了，但是執行模擬後會發現滑塊會微微震動，那是因為滑塊跟本體互相碰撞了，為了避免這種狀況，開啟滑塊及本體的 shape dynamics properties 將 local respondable mask 分別設定為00001111及 11110000這樣兩個物件就不會互相碰撞了。 滑塊設定 \n \n 本體設定 \n \n 5.增加stability及Target velocity 測試 點擊dynamic對話框內的 M=M*2 選項三次將輪子以及第三個支點的重量變成8倍，接著在軸的dynamic對話框將 Target velocity 設至50後開始演算，會發現bubbleRob會穩定的直線前進最後掉出平台，然後再將速度重置為0，測試就完成了。 6. collection object 及 Calculation module properties 在collection對話框內用Add new collection，新增的集合是空的，將列表上的bubbleRob選擇後點選Add加進collection，命名為 bubbleRob_collection ，這樣bubbleRob底下的零件都包含集合裡。 在選單點選 Calculation module 在 distance 下 Add new distance object ，選擇剛剛新增的 bubbleRob_collection 及 all other measurable objects in the scene ， 命名為 bubbleRob_distance ，這個設定在之後會測量本體以及其他可碰撞物件之間的最小距離。 \n \n 7.Graph設定 新增一個Graph命名為 bubbleRob_graph 在列表上放置於bubbleRob底下將graph位置設定在(0,0,0.005)開啟graph properties，將 Display XYZ-planes 選項取消打勾，接著 Add new data stream to record ，視窗上方( Data stream type )選擇 Object: absolute x-position 下方( Object / item to record ) 選擇 bubbleRob_graph ，在 Data stream recording list 會出現剛剛新增的設定，Y軸跟Z軸也用同樣方式做設定。 為了能夠測量機器人跟環境之間的最小距離再新增一個設定上面選擇 Distance:segment length 下方選擇 bubbleRob_distance 。 將XYZ軸及距離設定分別命名為 bubbleRob_xpos、bubbleRob_ypos、bubbleRob_zpos、 bubbleRob_obstacle_dist。 \n \n 選擇bubbleRob_xpos在底下的 Time graph properties 將Visible取消掉，其他兩軸也用相同方式操作。 接著在Edit 3D curves點選 Add new curve設定如圖 \n \n Curve width 設定為4，然後改成 Relative to world ，完成後測試就會發現機器人的路徑會以線顯示在螢幕上。 8.建立cylinder 增加數個(0.1,0.1,0.2)的cylinder包圍bubbleRob，將cylinder的特殊屬性參數全部打開，移動cylinder途中按著shift可以進行更細微的移動，按住ctrl則可以讓物件可以在正交方向移動。 9.model設定 選擇bubbleRob後在 object common properties 內將 Object is model base 和 Object/model can transfer or accept DNA 都打勾，這樣bubbleRob邊界框就包含底下所有的物件在內了。 \n \n 接著將兩個joint、sensor跟graph都選起來然後將參數設定 ignored by model bounding box ，讓模型的邊界框略過sensor跟joint然後將joint跟sensor的camera visibility layer 2取消打勾改為打勾 10，這樣在畫面上就不會看見軸跟sensor範圍了，最後將感測器、兩個輪子、支點、圖表的 Select base of model instead 都打勾，這項設定讓我們只能一次移動整個機器人而不是單個零件，能避免定位好的零件被移動。 \n \n 10.感測器(vision sensor) 增加一個新的感測器，位置、角度跟BubbleRob\'s proximity sensor同樣，在畫面上點選增加 Perspective type 的sensor，然後放到proximity sensor底下，新的sensor設定如下 \n \n 著點擊Show filter dialog開啟filter對話框，選擇 Edge detection on work image 然後按 Add ，新增的過濾組件要上移至第二層，移動完後點擊兩下剛剛設定的組件將Threshold(閾值)設定為0.2，設定到這邊基本上就完成了。 \n \n 完成sensor設定後新增一個 floating view 然後在它上面右鍵選擇(view->Associate view with selected vision sensor)將視窗綁定到剛剛設定完的sensor上(要確保sensor是被選擇的狀況)，接著試著開始模擬，視窗上能夠看見目標就成功了。 \n \n 11.程式: 位於工具列的script功能可以編輯code \n \n 最後的步驟要將code放進完成的模型內，選擇bubbleRob點選( Add->Associated child script --> Non threaded ) \n \n 新增一個 non-threaded child script ，接著點選bubbleRob旁邊的圖示 就能打開script，將code複製在原本的code後面關掉視窗就完成了。 \n \n 需注意code內部 \n \n \xa0 \n leftMotor=sim.getObjectHandle(" bubbleRob_leftMotor ") -- Handle of the left motor rightMotor=sim.getObjectHandle(" bubbleRob_rightMotor ") -- Handle of the right motor noseSensor=sim.getObjectHandle(" bubbleRob_sensingNose ") -- Handle of the proximity sensor 紅框內的名稱，如果大小寫或是名稱不同程式就沒辦法成功執行。 \n \n bubbleRob在模擬時會自動避開路徑上的物件，且畫面有能調節速度的面板。 \n BubbleRob模擬影片 \n \n 40623110翁俊揚 \n 40623102 吳柔燕 \n \n 40623124葉修宏 \n \n 檔案位置： BubbleRob.ttt \n 40623111 王映捷 \n \n 40623152 潘季宏 \n \n 40623144 林昭權 \n \n 40623121蔡朝旭 \n \n _ \n football table \n 台桌繪製影片（簡易版）： \n 球員繪製影片： \n \n', 'tags': '', 'url': '實習任務二.html'}, {'title': '實習任務三', 'text': '簡化網格的方法 \n 注意 :方法中的第一項，應始終首先嘗試，這在大部分的情況下能簡化網格的幾何圖形。(如果不起作用請嘗試手動網格劃分) \n Automatic mesh division(自動網格劃分) :所有未通過公共邊緣連結的元素生成新形狀，並不總是適用於選定的網格，可從 [Menu bar --> Edit --> Grouping/Merging --> Divide selected shapes]進行；有時網格的形狀會超過預期，此時只需將邏輯上屬於一起的元素(即具有相同的視覺屬性且屬於同一連結的元素)合併回一個形狀即可，可從[Menu bar --> Edit -> Grouping/Merging --> Merge selected shapes])進行。 \n Extract the convex hull(提取凸殼) :將網格轉換為凸殼來簡化網格，可從[Menu bar --> Edit --> Morph selection into convex shapes]進行。 \n Decimate the mesh(對網格進行解碼) :可減少網格中包含的三角形數量，可從[Menu bar --> Edit --> Decimate selected shape...]進行。 \n Remove the inside of the mesh(移除網格的內部) :此功能基於視覺感應器，根據所選的設置給出或多或少令人滿意的結果，可從 [Menu bar --> Edit --> Extract inside of selected shape]進行。 \n Manual mesh division(手動網格劃分) :通過三角形編輯模式(以下說明)，可以手動選擇三角形，而不是邏輯上屬於一起，然後按一下 "提取形狀"，將會在場景中生成一個新形狀，操作後需刪除選定的三角形。 \n 三角形編輯模式 :只需按一下相應的工具列按鈕 ，即可開啟三角形編輯模式，在三角形編輯模式下，將單獨顯示構成形狀的所有三角形，三角形有兩個面，正面和後面。正面顯示為藍色，背面顯示為紅色，選擇三角形時，三角形將以黃色顯示，最後一個選定的三角形將顯示為白色，可使用ESC鍵來取消所選內容。 \n 手足球各部分簡化影片 \n 檯子: \n \n \n', 'tags': '', 'url': '實習任務三.html'}, {'title': '組員操作影片', 'text': '', 'tags': '', 'url': '組員操作影片.html'}, {'title': '建立虛擬主機', 'text': '40623157李昀霖 \n', 'tags': '', 'url': '建立虛擬主機.html'}, {'title': '問題與討論', 'text': '所有頁面會因無法正確解讀而誤刪 \n 在特定情況下, 系統會誤刪 config/content.htm 檔案, 目前在單頁或全部頁面編輯存檔之前, 或將上一版本的 content.htm 存入 content_back.htm, 若 content.htm 內容被程式誤刪, 可以利用備份檔案複製回原始內容後, 再進行後續處理. \n 頁面的標題不支援特殊符號 \n 各頁面標題目前不支援特殊符號, 例如: "/", "?" 等, 若已經發生程式無法解讀頁面的情況, 只能從編輯 config/content.htm 下手, 若系統位於遠端, 則後續必須要再設法提供一個額外的編輯 config/content.htm 檔案的網際連結功能. \n Video  引用不支援內部引用 \n tinymce 中插入 video 的小視窗, 要移除引用的圖像與連結, 因為一般建議不要在內容中存入 .mp4 的影片資料, 而只接受引入影片 URL 連結. \n 當 ungit 推送時出現錯誤內容 \n 可在隨身系統中的satrt.bat加入set USERPROFILE=%Disk%:\\home \n 使得ungit能找到y:\\home中的使用者目錄. \n 如何將 USB 隨身碟 FAT32 轉換成 NTFS \n 方法一 :修改存取原則後再做格式化 1.在我的電腦按右鍵->管理 2.點選裝置管理員->右邊選磁碟機->選擇你的隨身碟型號(點兩下). 3.再出現的頁面中，選擇"原則"頁面. 4.把裡面的選項改成"效能最佳化"，按下確定. 5.接著請用正常方式格式化隨身碟，裡面就會有NTFS選項了. \n 方法二 :利用Convert指令轉換 1.在執行處輸入"cmd"指令，會出現命令提示字元視窗 2.在視窗中輸入convert  X : /FS:NTFS指令， X 是你的隨身碟槽位，要注意! 3.畫面跑完後，會出現轉換完成的訊息，代表轉換成功. \n 使用注意: 如果隨身碟都沒有資料，可以用方法一，若有資料建議用方法二，資料不會遺失. \n', 'tags': '', 'url': '問題與討論.html'}, {'title': '期中報告', 'text': '40623102 \n \n 40623110 \n \n 40623111 \n \n 40623113 \n \n 40623121 \n \n 40623124 \n \n \n 40623132 \n \n \n 40623144 \n \n 40623152 \n \n 40623157 \n', 'tags': '', 'url': '期中報告.html'}]};