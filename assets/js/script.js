/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link,.aboutlink").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


        //宣告預設表單內容為空 （你想要的話也可以加東西）
            var initSubject='',initBody='';
         
            //按下傳送按鈕後執行
            function submitHandler(){
                var to = "div955294@gmail.com";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
                var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
                var email = emailText.value;
                var tel = telText.value;
                var subject = subText.value;
        //把user填的資料都塞到 mail body 中
                var body = ""+bodyText.value+'%0A%0A%0A';//%0A是換行 換了三行
                    body += "From："+nameText.value+'%0A';
                    body += "Email："+emailText.value+'%0A';
                    body += "Tel："+telText.value;
        //傳送的主要程式碼
                mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
                mailTo.click();
            }
        //在body onload
            function init(){
                subText.value=initSubject;
                toText.value=initTo;
                bodyText.value=initBody;
            }

  $('#myModal').on('hidden.bs.modal', function () {
    console.log('模态框已关闭');
  });

  $('.modal-body').on('click', function(event) {
    event.stopPropagation();
  });


  