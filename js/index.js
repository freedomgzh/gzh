      
define(["jquery","btnTop_move","scroll","scroll_list","pic_move"], function($,btnTop_move,scroll,scroll_list,pic_move){
    var index = function(){
        btnTop_move.btnTop_move();
        // alert(0)
        $.ajax({
            url:"../data/data.json",
            type:"GET",
            success:function(res){
                // alert(res)
                var html = "";
                for(var i = 0; i < res.length; i++){
                    html += `<li class = "banner_li" ><div class = "banner_div"><img src="` + res[i].img + `" alt="">
    </div></li>`
                }
                $("#scroll_pic").html(html);
                $(".banner_li").eq(0).css("backgroundColor","#ffc8ce");
                $(".banner_li").eq(1).css("backgroundColor","#8dd3ed");
                $(".banner_li").eq(2).css("backgroundColor","#b5e8e3");
                $(".banner_li").eq(3).css("backgroundColor","#ffc8ce");
                $(".banner_li").eq(4).css("backgroundColor","#65c667");
                $(".banner_li").eq(5).css("backgroundColor","#faf9a7");
                $(".banner_li").eq(6).css("backgroundColor","#90b4ff");

            }

        })
        scroll.scroll();        

        $.ajax({
            url:"../data/datasort.json",
            type:"GET",
            success:function(res){
                // alert(res[0].name);
                var html = "";
                var html1 = "";
                var html2 = "";
                var html3 = "";
                var html4 = "";
                for(var i = 0; i < res.length; i++){
                    for(var j = 0; j < res[i].title.length; j++){
                        html1 += `<a id = "list_a">${res[i].title[j]}</a>/`
                    }
                  
                            for(var g = 0; g < res[i].list.length; g++){
                                for(var k = 0; k < res[i].list[g].length; k++){
                                    html4 += `<a>${res[i].list[g][k]}</a>`;

                                }
                                html3 = `${html4}`;
                                html4 = "";
                                html2 += `<dl id = "dlbox" class = "cl"><dt><a id = "">${res[i].name[g]}</a><i>></i></dt><dd>${html3}</dd></dl>`
                            }
                           
            
                       
                        // html3 =""      
                    html += `<li><h3><i id = "icont" class = "iconfont ${res[i].classname}"></i>${html1}</h3><div class = "div1"><div class = "div2">${html2}</div></div></li>` ;
                    html1 = "";
                    html2 ="";
                }
             
                $("#sort_ul").html(html)
            },
            error:function(obj,error){
                alert(error)
            }
        });
        $.ajax({
            url:"../data/dataseckill.json",
            type:"GET",
            success:function(res){
                var html="";
                // alert(res[0].price)
                for(var i = 0; i < res.length; i++){
                    html += `<li><div id = "right_line"></div><a class = "cl"><div id= "pro_detail"><p class= "pro_name">${res[i].name}</p><p class= "pro_price">${res[i].pro_price}</p><p class = "refrence-price">${res[i].refrence_price}</p></div><img src = "${res[i].img}"></a></li>`
                }
                $("#seckill_ul").html(html);
            },
            error:function(obj,error){
                alert(error);
            }
        })

        scroll_list.scroll_list();
        $.ajax({
            url:"../data/datasale.json",
            type:"GET",
            success:function(res){
                var html = "";
                var content = "";
                var number = "";
                var inumber = null;
                // alert(res.middleimg)
                // alert(res.middleimg[1])
                var group_today = res.middleimg[0];
                var group_v = res.middleimg[1];
                var group_b = res.middleimg[2];
                    for(var i = 0; i < res.pro_name.length; i++){
                        var number = "";
                        inumber = i + 1;   
                        if(i < 3){
                            number = `<i>${inumber}</i>`; 
                        }
                        content += `<li><a href = "rank_list.html"><img src = "${res.rightimg[i]}" class = "move"><p class ="area_pro_name">${res.pro_name[i]}</p><span>${res.discount[i]}</span>${number}</a></li>` 
                    }
                html = `<div id = "left_banner"><a><img src = "${res.leftimg}" ><div id = "brand_caption"><h4>1号闪购</h4><p class = "cut_line"></p><p class = "sub_tit">每日10:00上新</p></div></a></div><div id = "group_buy"><h4><a><em><u class = "right_triangle"></u><u class = "left_triangle"></u><i class = "iconfont icon-dingdan
"></i>团购</em></a></h4><div id = "group_today"><a class = "left_a"><img src = "${group_today}"></a></div><div class = "fr"><div id = "group_v"><a><p class = "group_tit">量贩团</p><p class = "sub_tit">"朱迪斯饼干"</p><img src = "${group_v}" class = "move"></a></div><div id ="group_b"><a><p class= "group_tit">浪莎丝袜节</p><p class = "sub_tit">低至4.8元/双</p><img src = "${group_b}" class = "move"></a></dvi></div></div></div><div id = "area_rank"><h4><a><em><u class = "right_triangle"></u><u class = "left_triangle"></u><i class = "iconfont icon-dingdan
"></i>排行榜</em></a></h4><div id = "rank_list"><div id = "rank_top"><ul><ul></div><div id = "rank_content"><ul>${content}</ul></div></div>`

                $("#brand_sale").html(html)
            },
            error:function(obj,error){
                alert(error);
            }
        });
        $.ajax({
            url:"../data/datalife.json",
            type:"GET",
            success:function(res){
                var html ="";
                var htmllist = "";
                var brand_right_list = "";
                var brand_right_list_new = "";
                var brand_bottom_list = "";
                // var group_today = res.middleimg[0];
                // var group_left = res.rightimg[0];
                for(var i = 0; i < res.middleimg.length; i++){
                    brand_right_list += `<li><a><p class = "pro_tit">${res.pro_name[i]}</p><p class = "pro_sub">${res.pro_tit[i]}</p><img src = "${res.middleimg[i]}"></a></li>`
                }
                for(var i = 0; i < res.rightimg.length; i++){
                    brand_right_list_new += `<li><a><p class= "pro_tit">${res.list_name[i]}</p><p class = "pro_sub">${res.list_tit[i]}</p><img src = "${res.rightimg[i]}"></a></li>`
                }
                for(var i = 0; i < res.rightimg_last.length; i++){
                    brand_bottom_list += `<a><img src = "${res.rightimg_last[i]}"></a>`
                }
                html = `<div id = "left_banner_new"><a href=""><img src="${res.leftimg}" alt=""></a></div><div id = "brand_buy_new"><h4><a href=""><em><u class = "right_triangle"></u><u class = "left_triangle"></u><i class = "iconfont icon-dingdan
"></i>耍大牌</em></a></h4><div class = "cl"><a href=""><img src="${res.middleimg_first}" alt=""></a><div class = "brand_right"><ul>${brand_right_list}</ul></div></div></div><div id = "life_pie"><h4><a href=""><em><u class = "right_triangle"></u><u class = "left_triangle"></u><i class = "iconfont icon-dingdan
"></i>生活派</em></a></h4><div class = "cl"><a href="" class = "imgbox"><img src="${res.rightimg_first}" alt=""><p class = "pro_tit">${res.title}</p><p class = "pro_sub">${res.title_tit}</p></a><div id = "brand_right"><ul>${brand_right_list_new}</ul></div></div><div id = "brand_bottom">${brand_bottom_list}</div></div>`
                $("#brand_sale_new").html(html);
            },
            error:function(obj,error){
                alert(error);
            }
        })
        // pic_move.pic_move();
        var str = $.cookie("login");
        if(str = "zzz"){
            $("#top_login").html("<a>欢迎回来" + str + "</a>")
        }

    }
	return {
		index:index
	}
})