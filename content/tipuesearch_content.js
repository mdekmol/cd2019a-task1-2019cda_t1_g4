var tipuesearch = {"pages": [{'title': '簡介', 'text': 'ag4倉儲 \n blogger \n', 'tags': '', 'url': '簡介.html'}, {'title': '組員', 'text': '40623102  吳柔燕\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623124  葉修宏 \n 40623110  翁俊揚\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623132  趙家傑 \n 40623111  王映捷\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623144  林昭權 \n 40623113  吳承哲\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623152  潘季宏 \n 40623121  蔡朝旭\xa0 \xa0 \xa0 \xa0 \xa0\xa0 40623157  李昀霖 \n \n', 'tags': '', 'url': '組員.html'}, {'title': '課程內容', 'text': '', 'tags': '', 'url': '課程內容.html'}, {'title': '第一週', 'text': '建立可攜系統 \n \n', 'tags': '', 'url': '第一週.html'}, {'title': '第二週', 'text': '', 'tags': '', 'url': '第二週.html'}, {'title': '第三週', 'text': '', 'tags': '', 'url': '第三週.html'}, {'title': '第四週', 'text': '', 'tags': '', 'url': '第四週.html'}, {'title': '第五週', 'text': '\n', 'tags': '', 'url': '第五週.html'}, {'title': '可攜系統', 'text': '', 'tags': '', 'url': '可攜系統.html'}, {'title': 'SSH步驟', 'text': '1.利用cmd.exe(小黑窗) \n 輸入指令: git config --edit --system \n \n 叫出vi 編輯器然後只能利用上下左右控制 \n 按a進入編輯後左下角會顯示 -- INSERT -- \n 2.進入後會如下圖所示 \n \n 按BACKSPACE \n 把紅框中的 helper=manger 給刪除 \n 接下來輸入 冒號( : )然後輸入WQ(儲存後並關閉) \n PS : 如不儲存的話直接輸入EXIT(直接離開) \n 3.金鑰製作 \n 到cmd.exe(小黑窗)輸入\xa0 sh_yen就會進入git 的shell \n \n 輸入\xa0 \xa0 \xa0 ssh-keygen -t rsa -b 4096 -C "This is my key" \n PS:\xa0 \xa0 this is my key 請輸入你要的名稱例如：學號 \n 然後會出現一段英文會叫你按ENTER鍵 \n 然後就按下ENTER鍵 \n \n 金鑰內容會出現在\xa0 \xa0 y:\\home\\.ssh\\id_rsa與id_rsa.pub \n 然而我們需要的是 id_rsa.pub裡的內容 \n \n PS:上圖中2個檔案中一個很長一個較短選短的那個 \n 利用Scite打開檔案並複製裡面之內容複製至github \n \n 進入後 \n \n 把複製的字串給貼入後儲存至你們小組倉儲切換至SSH再進行clone一次 \n \n 這樣以後就不用輸入帳號密碼來進行推送 \n 在公共場所也相對安全 \n PS : SSH是認髓身碟的倉儲 \n 成功的樣子 \n \n 參考文獻 :\xa0 \xa0https://www.youtube.com/watch?time_continue=5&v=t4PslV5Abjs \n \n', 'tags': '', 'url': 'SSH步驟.html'}, {'title': '可攜系統製作步驟', 'text': '1.先在C:/中創資料夾 名叫data的新資料夾 為了連接Y:/ \n \n 2.請先至以下網址內下載\xa0  https://www.scintilla.org/SciTEDownload.html \xa0\xa0 如圖下紅框處 \n \n 3.下載完後解壓縮至第一步驟的data \n \n 4.解完壓縮至資料夾中找尋sciTE 如下圖所示 \n \n \n 5.開啟後點選紅框處 \n \n \n \n 6.利用ctrl+f尋找code.page 並修改成下圖所示 \n \n 7.接下來進入\xa0 python3.7.2 \xa0\xa0點選下圖1紅框處 下載下圖2的python \n \n \n \n 圖1如上 \n \n 圖2如上 \n 8.接下來照下面的圖片步驟做就行 \n \n \n \n \n \n \n 9.進入\xa0 C:\\tmp\\p37\\Scripts\xa0 開啟pip.exe 一樣再次利用ctrl+f找尋c:\\p37並改為y:\\p37 如下圖所示 \n \n 10.更改完save起來後就把整個p37資料夾移到步驟一的data資料夾就可以 \n', 'tags': '', 'url': '可攜系統製作步驟.html'}, {'title': 'start的製作', 'text': '利用SciTE製作start.bat檔案\xa0\xa0 內容如下 \n \n', 'tags': '', 'url': 'start的製作.html'}, {'title': 'stop的製作', 'text': '12.利用SciTE製作stop.bat檔案\xa0內容如下 \n \n', 'tags': '', 'url': 'stop的製作.html'}, {'title': 'Kungit\xa0 製作', 'text': 'Step1. \n Open\xa0 http://mde.tw/wcm2019/content/實習項目\xa0二.html =>Download\xa0\xa0 nodejs_with_ungit.7z \xa0  Put that into  DATA  document \n \n Step2.\xa0 \n Use  SciTE 編輯器  edit \xa0 start_cadlab.bat\xa0 and put\xa0 \n set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; \n set USERPROFILE=%Disk%:\\home\xa0 \n %path3%;\xa0 \xa0\xa0 into\xa0\xa0 start_cadlab.bat \n \n \n Step3. \n Use \xa0 SciTE 編輯器 \xa0 add\xa0 \n ungit --launchBrowser=0 --launchCommand "C:\\PROGRA~2\\Google\\Chrome\\Application\\chrome.exe\xa0 %%U"\xa0 save as  kungit.bat \n \n then we put that into Y:\\ \n \n Step4. \n Open your  Koml_2019 start.bat  which place in\xa0 Repositories \xa0 \xa0 \n Just type  kungit  to call this \n \n Done . \n', 'tags': '', 'url': 'Kungit\xa0 製作.html'}, {'title': 'kungit上推', 'text': '首先要上傳資料時，點及create an\xa0 empty commit ， 參照下圖 \n 輸入title和body後，點及commit ，參照下圖 \n \n 若要上推到網站上，點及藍色圓圈，會出現gh-pages，參照下圖 \n \n 再點及push，然後輸入帳號密碼即可，參照下圖 \n \n 若要刪除commit，同樣點及藍色圓圈，再點及uncommit即可，參照下圖 \n \n', 'tags': '', 'url': 'kungit上推.html'}, {'title': '實習任務', 'text': '', 'tags': '', 'url': '實習任務.html'}, {'title': '實習任務一', 'text': '', 'tags': '', 'url': '實習任務一.html'}, {'title': '建立個人可攜系統', 'text': '組員操作影片 \n 40623110-翁俊揚 \n \n 40623132 趙家傑 \n \n \n 40623102 \n 40623152-可攜系統 \n 40623113-可攜系統影片 \n \n 40623144-林昭權 \n \n 40623111王映捷 \n \n', 'tags': '', 'url': '建立個人可攜系統.html'}, {'title': '實習任務二', 'text': '翻譯 \n 研讀Git 教材重點 \n \n \n', 'tags': '', 'url': '實習任務二.html'}, {'title': 'Git手冊', 'text': '', 'tags': '', 'url': 'Git手冊.html'}, {'title': 'Git 分支', 'text': '幾乎每一種版本控制系統（Version Control System，以下簡稱 VCS）都支援某種形式的分支（branch）功能， 使用分支意味著你可以從開發主線上分離開來，然後在不影響主線的情況下繼續工作。 有人把 Git 的分支模型視為它的「殺手級功能」， 它有何特別之處呢？新建分支的操作幾乎可以在瞬間完成，並且一般來說切換不同分支也很快； 跟其它的 VCS 不一樣的地方是 Git 鼓勵在工作流程中頻繁地使用分支與合併（merge），即使一天之內進行許多次都沒問題。 \n git branch 命令 :建立一個新的分支這會在目前提交上新建一個指標，它並不會切換到這個分支。 \n git checkout 命令 :切換到一個已經存在的分支。 \n *切換分支會修改工作目錄裡的檔案 當你在 Git 中切換分支時，工作目錄內的檔案將會被修改； 如果切換到舊分支，你的工作目錄會回復到看起來就像當初你最後一次在這個分支提交時的樣子。 如果 Git 無法很乾淨地切換過去，它就不會讓你切換過去。 \n git merge 命令 :緊急修正分支進行合併。 \n', 'tags': '', 'url': 'Git 分支.html'}, {'title': 'Git Internals', 'text': '10.1 Plumbing and Porcelain \n Git會創建一個git目錄用於備份或複製 \n Git-Head文件：目前被檢出的分支/Index文件：暫存區信息/Refs目錄：指向數據（分支）/Objects目錄：所有數據內容 \n 10.2 Git Objects \n cat-file：從git取回數據 \n update-ref：更新使用 \n 10.3 Git References \n 執行git branch--cat.git/Head \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0ref：refs/heads/master \n 執行git checkout test--cat.git/Head \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ref：refs/heads/test \n Remotes ：git push origin master\xa0：推送上一次分支 \n 10.5 The Refspec \n git push origin ：topic \n git push origin--delete topic \n <<<<<<< HEAD \n 10.6 Transfer Protocols \n Transfer Protocols--傳輸協議 \n Git可以透過兩種主要方式在兩個倉儲之間傳輸數據：“啞吧”協議與“智能”協議。 本章重點著重於介紹這兩個主要協議的運作方式。 \n The Dumb Protocol--啞巴協議 \n 該協議稱為“啞巴協議”，是因為它在傳輸過程中不需要服務端的Git特定代碼;\xa0獲取過程是一系列HTTP\xa0 GET 請求，使用者可以自由的呈現Git倉儲的安排。 \n 10.7 Maintenance and Data Recovery \n 本章重點在介紹Git內部的維護和數據的恢復，有時Git會自動執行一個名為“auto  gc ”的指令，大多數情況下，此指令不執行任何操作，但如果有過多的packfiles，則Git會執行git gc的指令，此指令會刪除不必要的文件。 \n 不小心遺失提交則可使用git long和git master兩個指令來進行恢復。 \n 10.8 Environment Variables \n Git總是在 bash shell中 運行 ，並使用許多shell環境變量來確定它的行為方式。 \n GIT_EXEC_PATH：可透過運行檢查當前設置 git --exec-path 。 \n HOME：它是Git查找全局配置文件的地方。 \n GIT_CONFIG_NOSYSTEM：如果您的系統配置干擾了您的指令，但是您無權更改或刪除它，這將非常有用。 \n GIT_COMMITTER_NAME \xa0設置提交者的名字 。 \n \n GIT_COMMITTER_EMAIL \xa0 是“提交者”字段的電子郵件地址。 \n \n \n GIT_COMMITTER_DATE \xa0 用於“提交者”字段中的日期。 \n', 'tags': '', 'url': 'Git Internals.html'}, {'title': 'Git and Other Systems', 'text': '9.1 Git as a Client \n git svn： Git中所有Subversion橋接指令的基本指令都是 git svn 。 它需要相當多的指令，因此我們將在完成一些簡單的工作流程時展示最常見的指令。當用戶使用git svn時，需特別注意避免同時與Git遠端倉儲交互操作使用。 \n \n', 'tags': '', 'url': 'Git and Other Systems.html'}, {'title': 'V-rep', 'text': '\n V-rep的操作手冊: \n http://www.coppeliarobotics.com/helpFiles/ \xa0 \n V-rep Tutorial: \n http://www.coppeliarobotics.com/helpFiles/en/tutorials.htm \n BubbleRob tutorial: \n http://www.coppeliarobotics.com/helpFiles/en/bubbleRobTutorial.htm \n', 'tags': '', 'url': 'V-rep.html'}, {'title': '內容簡介', 'text': '在創建Sphere時，要取消 create dynamic and respondable shape \xa0要是沒取消的話，Sphere會是dynamic( ☑ Body is dynamic )，會利用上面的Bullet2.78 engine去執行。 \n V-rep本身沒有dynamic分析的能力。 \n 把要放入機器人的機械或元件寫成model，這樣才會有版本可言。 \n', 'tags': '', 'url': '內容簡介.html'}, {'title': '操作方式', 'text': '可開啟數學計算式，裡面的Collision跟Distance是Bubble Rob所具備的東西。 \n 可平移物體的x,y,z軸。 \n 可旋轉物體的方向。 \n 可調整視角。 \n 開啟當下選擇的物體的設定欄。 \n ↪ Simulation Setting ➔At simulation end➔☑Reset scene to initial state( 回到最初的位置 ) \n 快點Sphere前面的方格兩下 ➔Shape➔View/modify geometry( 可調整物體大小 ) \n 快點Sphere前面的方格兩下➔Shape➔Adjust color➔Ambient/diffuse component( 可調色 ) \n 快點Sphere前面的方格兩下➔Common➔☑Object is model base( 變成model ) \n 快點Sphere前面的方格兩下➔Common ➔ ☑Object/model can transfer or accept DNA( model可用程式輸入 ) \n', 'tags': '', 'url': '操作方式.html'}, {'title': 'Cone Proximity Sensor', 'text': "Menu bar ➔add➔proximity sensor➔cone type就可以創建一個錐形的接近傳感器。 \n \n 設定proximity sensor ➔快點前面的圖示兩下➔ Show volume parameters ➔可調整 \n ➔Offset(偏移) \n \n ➔Range(範圍) \n \n ➔Angle(角度) \n \n 設定proximity sensor ➔快點前面的圖示兩下➔ Show\xa0detection parameters \n ➔把Don't allow detections if distance smaller than的打勾取消掉，這串字的意思是如果距離小於此時則不允許檢測。 \n", 'tags': '', 'url': 'Cone Proximity Sensor.html'}, {'title': 'BubbleRob', 'text': '1.建立BubbleRob本體 新增一個 Sphere ， X-size 為 0.2( 單位為m) 在 object common properties 下的 object special properties 將 Collidable、Measurable、Renderable、Detectable 都打勾，將本體位置設定在Z軸(Along Z)0.02(須確認本體是照world移動) 接著在選單雙擊Sphere將物件名稱改為BubbleRob就完成本體設定。 \n 2.建立Proxmity sensor 在選單中建立一個 Proximity sensor 且選為 Cone type 將sensor利用旋轉功能在 Around Y及Z 輸入 90 位置為 X-coord 輸入 0.1 及 Z-coord 輸入 0.12 \n \n 接著設定sensor感應範圍，在選單點擊感測器符號開啟它的設定框，點擊 show volume\xa0 parameter 開啟選單設定 Offset=0.005 、 Angle=30 、 Range=0.15 \n \n 點擊 Show detection parameters ，將" Don\'t allow detections if distance smaller than" 選項取消打勾。 將感測器名稱設定為 bubbleRob_sensingNose ，就完成感測器設定了。 在 Scene hireachy (場景等級)將完成設定的sensor放在bubbleRob下 最後將兩項物件 Edit->"Make last selected object parent" 連結成一個物件。 3.建立bubbleRob的輪子 建立一個 cylinder 尺寸為(0.08,0.08,0.02)，跟本體一樣將 object common properties 內的特殊屬性都打開，設定位置(0.05,0.1,0.04)和旋轉(-90,0,0)，此物件命名為 bubbleRob_leftWheel ，然後將完成的物件複製一份且將位置參數Y設定為-0.1，此物件命名為 bubbleRob_RightWheel 設定 joint (motor) Add->joint->Revolute 建立一個軸，建立完成按住ctrl選擇剛剛的 bubbleRob_leftWheel 然後在 postion 及 \xa0orientation 內選擇 apply to selection 來複製輪子的參數，這樣軸的位置就會跟左邊輪子一樣了。 點擊開啟軸參數的設定框，將\xa0 Show dynamic parameters 內的 enable the motor 以及底下的 Lock motor when target velocity is zero 都打勾，完成左邊輪軸設定後，用同樣方式製作右輪軸。 最後將輪子層級放置在輪軸底下，輪軸層級則置於本體下 \n \n 4.建立slider 開始模擬後發現機器人會向後翻轉，因為少了第三個接地點 建立一個圓形物件(設定0.05)，一樣打開所有特殊屬性，將此物件命名為\xa0 bubbleRob_slider ，在 shape dynamics properties 裡將物件設定為 無摩擦 。 摩擦力相關的係數都調成0 接著建立 Force sensor 命名為 bubbleRob_connection ，將它往上提0.05 ，再跟剛剛的滑塊接合成一個物件，這個物件的位置設定X=(-0.07)，此物件的層級則放在bubbleRob底下，這樣就完成第三個接地點了，但是執行模擬後會發現滑塊會微微震動，那是因為滑塊跟本體互相碰撞了，為了避免這種狀況，開啟滑塊及本體的 shape dynamics properties 將 local respondable mask 分別設定為00001111及 11110000這樣兩個物件就不會互相碰撞了。 滑塊設定 \n \n 本體設定 \n 5.增加stability及Target velocity 測試 點擊dynamic對話框內的 M=M*2 選項三次將輪子以及第三個支點的重量變成8倍，接著在軸的dynamic對話框將 Target velocity 設至50後開始演算，會發現bubbleRob會穩定的直線前進最後掉出平台，然後再將速度重置為0，測試就完成了。 6. collection object 及 Calculation module properties 在collection對話框內用Add new collection，新增的集合是空的，將列表上的bubbleRob選擇後點選Add加進collection，命名為 bubbleRob_collection ，這樣bubbleRob底下的零件都包含集合裡。 在選單點選 Calculation module 在 distance 下 Add new distance object ，選擇剛剛新增的 bubbleRob_collection 及 all other measurable objects in the scene ， 命名為 bubbleRob_distance ，這個設定在之後會測量本體以及其他可碰撞物件之間的最小距離。 \n \n 7.Graph設定 新增一個Graph命名為 bubbleRob_graph 在列表上放置於bubbleRob底下將graph位置設定在(0,0,0.005)開啟graph properties，將 Display XYZ-planes 選項取消打勾，接著 Add new data stream to record ，視窗上方( Data stream type )選擇 Object: absolute x-position 下方( Object / item to record ) 選擇 bubbleRob_graph ，在 Data stream recording list 會出現剛剛新增的設定，Y軸跟Z軸也用同樣方式做設定。 為了能夠測量機器人跟環境之間的最小距離再新增一個設定上面選擇 Distance:segment length 下方選擇 bubbleRob_distance 。 將XYZ軸及距離設定分別命名為 bubbleRob_xpos、bubbleRob_ypos、bubbleRob_zpos、 bubbleRob_obstacle_dist。 \n \n 選擇bubbleRob_xpos在底下的 Time graph properties 將Visible取消掉，其他兩軸也用相同方式操作。 接著在Edit 3D curves點選 Add new curve設定如圖 \n \n Curve width 設定為4，然後改成 Relative to world ，完成後測試就會發現機器人的路徑會以線顯示在螢幕上。 8.建立cylinder 增加數個(0.1,0.1,0.2)的cylinder包圍bubbleRob，將cylinder的特殊屬性參數全部打開，移動cylinder途中按著shift可以進行更細微的移動，按住ctrl則可以讓物件可以在正交方向移動。 9.model設定 選擇bubbleRob後在 object common properties 內將 Object is model base 和 Object/model can transfer or accept DNA 都打勾，這樣bubbleRob邊界框就包含底下所有的物件在內了。 \n \n 接著將兩個joint、sensor跟graph都選起來然後將參數設定 ignored by model bounding box ，讓模型的邊界框略過sensor跟joint然後將joint跟sensor的camera visibility layer 2取消打勾改為打勾 10，這樣在畫面上就不會看見軸跟sensor範圍了，最後將感測器、兩個輪子、支點、圖表的 Select base of model instead 都打勾，這項設定讓我們只能一次移動整個機器人而不是單個零件，能避免定位好的零件被移動。 \n 10.感測器(vision sensor) 增加一個新的感測器，位置、角度跟BubbleRob\'s proximity sensor同樣，在畫面上點選增加 Perspective type 的sensor，然後放到proximity sensor底下，新的sensor設定如下 \n 接著點擊Show filter dialog開啟filter對話框，選擇 Edge detection on work image 然後按 Add ，新增的過濾組件要上移至第二層，移動完後點擊兩下剛剛設定的組件將Threshold(閾值)設定為0.2，設定到這邊基本上就完成了。 \n \n 完成sensor設定後新增一個 floating view 然後在它上面右鍵選擇(view->Associate view with selected vision sensor)將視窗綁定到剛剛設定完的sensor上(要確保sensor是被選擇的狀況)，接著試著開始模擬，視窗上能夠看見目標就成功了。 \n \n 11.程式: 位於工具列的script功能可以編輯code \n \n 最後的步驟要將code放進完成的模型內，選擇bubbleRob點選( Add->Associated child script --> Non threaded ) \n \n 新增一個 non-threaded child script ，接著點選bubbleRob旁邊的圖示 就能打開script，將code複製在原本的code後面關掉視窗就完成了。 \n \n 需注意code內部 \n \n \xa0 \n leftMotor=sim.getObjectHandle(" bubbleRob_leftMotor ") -- Handle of the left motor rightMotor=sim.getObjectHandle(" bubbleRob_rightMotor ") -- Handle of the right motor noseSensor=sim.getObjectHandle(" bubbleRob_sensingNose ") -- Handle of the proximity sensor 紅框內的名稱，如果大小寫或是名稱不同程式就沒辦法成功執行。 \n \n bubbleRob在模擬時會自動避開路徑上的物件，且畫面有能調節速度的面板。', 'tags': '', 'url': 'BubbleRob.html'}]};