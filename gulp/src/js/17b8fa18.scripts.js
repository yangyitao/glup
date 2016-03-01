'use strict';
//做一个全局变量更改skill和更改美甲字段
//console.log(location.href);
//console.log(location.search);
//index.html?name=1#/index
var getParam = function(name) {
	var search = document.location.search;
	var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
	var matcher = pattern.exec(search);
	var items = null;
	if (null != matcher) {
		try {
			items = decodeURIComponent(decodeURIComponent(matcher[1]));
		} catch (e) {
			try {
				items = decodeURIComponent(matcher[1]);
			} catch (e) {
				items = matcher[1];
			}
		}
	}
	return items;
};
//这个是根据路由name来决定进入那个parts
window.mei = getParam('name');
var pathname = document.location.pathname;
//判断是否zjj的文件夹
var ismeizjj = pathname.indexOf("meizjj");
if (ismeizjj != -1) {
	//自定义 1美甲 2美婕 6美发 7美妆
	window.skill = '7'; //注意写死 最安全的做法也要在路由带上name参数
	window.four = "";
	switch (window.mei) {
		case 'meijia':
			window.four = "美甲";
			window.skill = '1'
			break;
		case 'meijie':
			window.four = "美睫";
			window.skill = '2'
			break;
		case 'meifa':
			window.four = "美发";
			window.skill = '6'
			break;
		case 'meizhuang':
			window.four = "美妆";
			window.skill = '7'
			break;
		default:
	}
} else {
	//如果不是zjj一个文件夹 则为四个meijia meizhuang meifa mejjie这个文件夹的路由模式，原来正式服就是分指向四个文件夹
	//zjj是只指向一个文件夹 pathname.indexOf("meijia")判断pathname是否包含meijia 不包含则返回-1
	if (pathname.indexOf("meijia") >= 0) {
		window.four = "美甲";
		window.skill = '1'
	} else if (pathname.indexOf("meijie") >= 0) {
		window.four = "美睫";
		window.skill = '2'
	} else if (pathname.indexOf("meifa") >= 0) {
		window.four = "美发";
		window.skill = '6'
	} else if (pathname.indexOf("meizhuang") >= 0) {
		window.four = "美妆";
		window.skill = '7'
	}
}
//             以上为判断url的参数name，从而改变skill进入对应的频道                                                          //
///////////////////////////////////////////////////////////////////////
angular.module('papabearApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate']).config(['$routeProvider',
		function(a) {
			a.when('/index', {
					templateUrl: 'views/index.html',
					controller: 'IndexCtrl',
					title: '预约' + four + '师',
					//title: $rootScope.skill,
					hideFooter: 0,
					depth: 0
				}).when('/product', {
					templateUrl: 'views/product.html',
					controller: 'ProductCtrl',
					title: four + '作品',
					hideFooter: 0,
					depth: 0
				})
				.when('/home', {
					templateUrl: 'views/home.html',
					controller: 'HomeCtrl',
					title: '个人中心',
					hideFooter: 0,
					depth: 0
				}).when('/product/:productId/artisan_id/:artisan_id', {
					templateUrl: 'views/productDetail.html',
					controller: 'ProductDetailCtrl',
					title: four + '图详情',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/designer/:designerId', {
					templateUrl: 'views/designerDetail.html',
					controller: 'DesignerDetailCtrl',
					title: four + '师详情',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/designer/info/:designerId', {
					templateUrl: 'views/designerInfo.html',
					controller: 'DesignerInfoCtrl',
					title: four + '师详情',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/designer/comment/:designerId', {
					templateUrl: 'views/designerComment.html',
					controller: 'DesignerCommentCtrl',
					title: four + '师详情',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/order/create/product/:productId/designer/:designerId', {
					templateUrl: 'views/orderCreate.html',
					controller: 'OrderCreateCtrl',
					title: '订单确认',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/login', {
					templateUrl: 'views/login.html',
					controller: 'LoginCtrl',
					title: '登陆',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/order', {
					templateUrl: 'views/order.html',
					controller: 'OrderCtrl',
					title: '我的订单',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/order/confirm', {
					templateUrl: 'views/orderConfirm.html',
					controller: 'OrderConfirmCtrl',
					title: '订单创建确认',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/order/comment/:orderId', {
					templateUrl: 'views/orderComment.html',
					controller: 'OrderCommentCtrl',
					title: '订单评价',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/order/:orderId/:artisanId/:productId', {
					templateUrl: 'views/orderDetail.html',
					controller: 'OrderDetailCtrl',
					title: '订单详情',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/coupon', {
					templateUrl: 'views/coupon.html',
					controller: 'CouponCtrl',
					title: '我的优惠卷',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/collect', {
					templateUrl: 'views/collect.html',
					controller: 'CollectCtrl',
					title: '我的收藏',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/address/search', {
					templateUrl: 'views/addressSearch.html',
					controller: 'AddressSearchCtrl',
					title: '地址搜索',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/address/History', {
					templateUrl: 'views/addressHistory.html',
					controller: 'AddressHistorySearchCtrl',
					title: '地址历史记录',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/city', {
					templateUrl: 'views/city.html',
					controller: 'CityCtrl',
					title: '城市选择',
					showBackBtn: !0,
					hideFooter: !0
				}).when('/searchDesigner', {
					templateUrl: 'views/searchDesigner.html',
					controller: 'DesignerSearchCtrl', //designerSearchCtrl
					title: four + '师搜索',
					showBackBtn: !0,
					hideFooter: !0
				}).when('/security/:designerId', {
					templateUrl: 'views/security.html',
					controller: 'SecurityCtrl',
					title: '安全认证',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/credit', {
					templateUrl: 'views/credit.html',
					controller: 'CreditCtrl',
					title: '信用等级',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/baiduMap', {
					templateUrl: 'views/baiduMap.html',
					controller: 'BaiduMapCtrl',
					title: '百度地图',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/shopdetail/:shopId', {
					templateUrl: 'views/shopDetail.html',
					controller: 'ShopDetail',
					title: '店铺详情',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/orderConfirm/DirectBook/:designerId', {
					templateUrl: 'views/orderConfirmDirectBook.html',
					controller: 'orderConfirmDirectBookCtrl',
					title: '店铺详情',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/setting', {
					templateUrl: 'views/setting.html',
					controller: 'settingCtrl',
					title: '账户设置',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/safety', {
					templateUrl: 'views/safety.html',
					controller: 'safetyCtrl',
					title: '安全设置',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/changePassword/:code', {
					templateUrl: 'views/changePassword.html',
					controller: 'changePasswordCtrl',
					title: '修改支付密码',
					showBackBtn: !0,
					hideFooter: !0,
				}).when('/recharge/:discountId/amount/:amount', {
					templateUrl: 'views/recharge.html',
					controller: 'rechargeCtrl',
					title: '充值',
					showBackBtn: !0,
					hideFooter: !0,
				}).otherwise({
					redirectTo: '/index'
				})
		}
	]).run(['$rootScope', '$route', '$window', '$location', 'Position', '$cookies', 'Request', '$cookieStore',
		function($rootScope, $route, $window, $location, position, $cookies, request, $cookieStore) {
			//获取openid
			if (!$cookies.openid || $cookies.openid == '') {
				window.location.href = "../get_openid.php";
				return;
			}

			//~ $cookies.openid = 'o8fHhsmjvo6w78gDO3X-h1Su4Q9o';//测试用
			//~ $cookies.rsaOpenid = 'DUOJypJxokciOqPIkFRE56Y09R8s6CxLJ59O6eg6Ak9FOacfsSJyR6odT4VQKW3t3aFjfHs2QJywysUTcQQlsM8un1HDpYdTsXZk+1sZHfnYhyBYCVkcZ7ThZdoPQQPW+d4fF/bGVTOqZPap/+gIAl4kaTKeVE6v78RzEjBreS0s9QhVXgjjB6W9uckBsM5JV8b70Ezm8amMJAfv16F44Pj7vPeTPYt+vn12sIDWmapICWx1n+nZTGB+XJCGku5rh5NWDhZmsp6mKwXr7Yf50OeOsxDk5LCkwSl8Gp0swM9Uj2BETbXqzBaU0FhE3LqvgGOe006t411Dm/0oXxwYIQ==';//加密后的openid
			$rootScope.isLogined = !(!$cookies.token || !$cookies.userid);
			$rootScope.goLogin = function(replace) {
				if (!replace) {
					$cookieStore.remove('loginBack');
					delete $cookies.loginBack;
					$location.path('login');
				} else {
					$cookies.loginBack = $location.path();
					$location.path('login').replace();
				}
			};

			//~ alert('openid'+$cookies.openid);

			$rootScope.dataLoadCount = 0;
			$rootScope.isLoading = $rootScope.dataLoadCount != 0;
			//底部栏隐藏判断
			$rootScope.$on('$routeChangeSuccess',
					function() {
						window.weixinShareUrl = window.location.href; //'http://wx.meilidoor.com'
						window.weixinShareContent = '美丽元1';
						$rootScope.hideThis = $route.current.hideFooter;
						$rootScope.title = $route.current.title;
						//var interUrl = $location.url();
						//console.log(interUrl);
						//获取a参数
						//console.log($location.search().a);
						/*var urlParm = $location.search().a;
						if (urlParm == 1) {
							$route.current.title = "美发";
							$rootScope.title = "美发";
						}*/
						//console.log($routeParams.index_Id);

						//~ alert($location.url());

						//console.log($rootScope.titleChoice);
						//console.log($route.current.title);
						//console.log($rootScope.title);

						//$rootScope.title = $rootScope.titleChoice;

						wx.ready(function() {
							// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
							wx.onMenuShareTimeline({
								title: window.weixinShareContent, // 分享标题
								link: window.weixinShareUrl, // 分享链接
								imgUrl: window.weixinShareImgUrl, // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							});

							wx.onMenuShareAppMessage({
								title: window.weixinShareTitle, // 分享标题
								desc: window.weixinShareContent, // 分享描述
								link: window.weixinShareUrl, // 分享链接
								imgUrl: window.weixinShareImgUrl, // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							});

							wx.onMenuShareQQ({
								title: window.weixinShareTitle, // 分享标题
								desc: window.weixinShareContent, // 分享描述
								link: window.weixinShareUrl, // 分享链接
								imgUrl: window.weixinShareImgUrl, // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							});

							wx.onMenuShareWeibo({
								title: window.weixinShareTitle, // 分享标题
								desc: window.weixinShareContent, // 分享描述
								link: window.weixinShareUrl, // 分享链接
								imgUrl: window.weixinShareImgUrl, // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							});
						});
					}), //返回按钮判断
				$rootScope.back = function(c) {
					c ? $location.path(c) : $window.history.back();
				}
			var pinfo = position.info();
			if (!pinfo) {
				position.getPosition();
			}
			$rootScope.city = pinfo.city;

			window.weixinShareTitle = '美丽元';
			window.weixinShareImgUrl = 'http://wx.meilidoor.com/images/icon.png';
			window.weixinShareContent = '美丽元';
			window.weixinShareUrl = 'http://wx.meilidoor.com';

			var url = 'http://' + window.location.host + window.location.pathname + window.location.search;
			request.get('../wxjskey.php?url=' + encodeURIComponent(url)).success(function(data) {
				console.log(data);
				var obj = data;
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: obj.appId, // 必填，公众号的唯一标识
					timestamp: obj.timestamp, // 必填，生成签名的时间戳
					nonceStr: obj.nonceStr, // 必填，生成签名的随机串
					signature: obj.signature, // 必填，签名，见附录1
					jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'previewImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});


				wx.error(function(res) {
					// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

				});
			});
		}
	]).constant('pageSize', 10),
	angular.module('papabearApp').controller('orderConfirmDirectBookCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', '$location',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, $location) { //订单创建
			//订单创建
			request.post('product/get_appoint_product', {
				"city": "510000",
				"ver": "3.0.0"
			}).success(function(data) {
				//直接预约传两个参数，没有product_id
				switch (skill) {
					case '1':
						//"美甲"
						$scope.type = data.data[0].category_id;
						$scope.price = data.data[0].price;
						$scope.img_cover = data.data[0].img_cover;
						break;
					case '2':
						//"美睫";
						$scope.type = data.data[2].category_id;
						$scope.price = data.data[2].price;
						$scope.img_cover = data.data[2].img_cover;
						break;
					case '6':
						//"美发";
						$scope.type = data.data[4].category_id;
						$scope.price = data.data[4].price;
						$scope.img_cover = data.data[4].img_cover;
						break;
					case '7':
						//"美妆";
						$scope.type = data.data[5].category_id;
						$scope.price = data.data[5].price;
						$scope.img_cover = data.data[5].img_cover;
						break;
					default:
				}

			});

			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}

			$scope.isSelf = true;

			$scope.onOrderAddress = function() {
				if (skill == 6) {
					//如果是美发禁用点击选择地址这个函数
					return;
				} else {
					$rootScope.orderTimeList = $scope.timeList;
					$rootScope.orderCurrent = $scope.current;
					$rootScope.orderCurrentItem = $scope.currentItem;
					$rootScope.orderUsername = $scope.username;
					$rootScope.orderMobile = $scope.mobile;
					$rootScope.orderIsSelf = $scope.isSelf;
					//$location.url('address/search');
					$location.url('address/History');
					return;
				}
			};

			if (angular.isDefined($rootScope.orderUsername)) {
				$scope.username = $rootScope.orderUsername;
			}

			if (angular.isDefined($rootScope.orderMobile)) {
				$scope.mobile = $rootScope.orderMobile;
			}

			if (angular.isDefined($rootScope.orderIsSelf)) {
				$scope.isSelf = $rootScope.orderIsSelf;
			}

			$scope.timeList = [];
			$scope.currentTimes = [];
			$scope.setCurrent = function(index) {
				$scope.current = index;
				if (index >= $scope.timeList.length) {
					$scope.currentTimes = [];
				} else {
					$scope.currentTimes = $scope.timeList[index].list;
				}
			};
			$scope.timeSelect = function(index) {
				var time = $scope.currentTimes[index];
				$scope.currentItem = index;
				if (time.status != 1) {
					return;
				}
				$scope.selectTime = $scope.timeList[$scope.current].name + ' ' + $scope.currentTimes[index].name + ':00';
				//~ alert($scope.selectTime);
				$scope.showTime = 0;
			};

			if (angular.isUndefined($rootScope.orderTimeList) || angular.isUndefined($rootScope.orderCurrent) || angular.isUndefined($rootScope.orderCurrentItem)) {

				request.post('artisan/get_artisan_schedule', {
					artisan_id: $routeParams.designerId
				}).success(function(data) {
					var n = 0;
					for (var key in data.data) {
						var obj = {};
						obj.index = n;
						obj.name = key;
						obj.title = key.substr(5);
						obj.status = 1; //忙
						var val = data.data[key];
						if (!val) {
							obj.list = [];
						} else {
							obj.list = [];
							for (var hour in val) {
								var hourObj = {
									name: hour,
									status: val[hour]
								};
								if (obj.status == 1 && hourObj.status == 1) {
									obj.status = 0; //闲
								}
								obj.list.push(hourObj);
							}
						}

						$scope.timeList.push(obj);
						n++;
					}

					$scope.setCurrent(0);
				}).error(function(data) {
					alert(data.msg);
				});
			} else {
				$scope.timeList = $rootScope.orderTimeList;
				$scope.current = $rootScope.orderCurrent;
				$scope.currentItem = $rootScope.orderCurrentItem;
				$scope.setCurrent($scope.current);
				$scope.timeSelect($scope.currentItem);
			}

			if (!angular.isUndefined($rootScope.address)) {
				$scope.address = $rootScope.address;
				$scope.adressInfo = $scope.address.title;
			}

			//直接预约的时候如果是美发直接预约 则要补充美发店地址 并且地址不能选择
			if (skill == 6) {
				request.post('artisan/get_artisan_detail', {
					artisan_id: $routeParams.designerId,
					user_id: $cookies.userid,
					token: $cookies.token,
				}).success(function(data) {
					$scope.isMeifa = 1;
					//获取店名
					$scope.address;
					$scope.shopName = data.data.shop[0].shop_name;
				})
			}

			$scope.orderCreate = function() {
				if (!$scope.isSelf) {
					if (!$scope.username || $scope.username.length == 0) {
						alert('联系人姓名不能为空');
						return;
					} else if (!$scope.mobile || $scope.mobile.length == 0) {
						alert('手机号码不能为空');
						return;
					} else if (isNaN($scope.mobile)) {
						//判断手机是否为数字
						alert('手机号码不正确');
						return;
					} else if ($scope.username = $scope.username.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, ''), !$scope.username || $scope.username == '') {
						//~ alert($scope.mobile);
						alert('联系人姓名不能为特殊字符');
						return;
					}
				}


				if (!$scope.selectTime || $scope.selectTime.length == 0) {
					alert('请选择预约时间');
					return;
				}
				if (!$scope.address) {
					if (!$scope.shopName) {
						alert('请选择服务地址');
						return;
					}
				}
				if (skill == 6) {
					//if (!$scope.address.shop_name&&$scope.address.address) {
					/*if (!$scope.address.address) {
						//美发
						alert('请输入详细地址');
						return;
					}*/
				} else {
					if ($scope.adressInfo.length == 0) {
						//美甲
						alert('请输入详细地址');
						return;
					}
				}
				/*if (!$scope.address.shop_name) {
					//美发
					alert('请输入详细地址');
					return;
				}
				if ($scope.adressInfo.length == 0) {
					//美甲
					alert('请输入详细地址');
					return;
				}*/
				var selectDate = $scope.timeList[$scope.current];
				var selectTime = selectDate.list[$scope.currentItem];
				var obj = {
					address: $scope.isMeifa ? $scope.shopName : $scope.address.address,
					lat: $scope.isMeifa ? '' : $scope.address.lat,
					lng: $scope.isMeifa ? '' : $scope.address.lng,
					addressInfo: $scope.adressInfo,
					//addressInfo:$scope.address.shop_name,
					isself: $scope.isSelf,
					date: selectDate.name,
					hour: selectTime.name,
					designerId: $routeParams.designerId,
					productId: $routeParams.productId,
					type: $scope.type,
					price: $scope.price,
					pic: $scope.img_cover
				};

				if (!$scope.isSelf) {
					obj.username = $scope.username;
					obj.mobile = $scope.mobile;
				}
				console.log(obj);
				$rootScope.orderData = obj;

				$window.location.href = '#/order/confirm';


			};
			/*var param = {
				artisan_id: $routeParams.designerId
			};
			if ($cookies.userid && $cookies.token) {
				param.user_id = $cookies.userid;
				param.token = $cookies.token;
			}
			request.post('artisan/get_artisan_detail', param).success(function(data) {
				var shop = data.data.shop;
				if (shop.length > 0) {
					$scope.address = shop[0];
				};
			});*/

		}
	])
angular.module('papabearApp').controller('AddressHistorySearchCtrl', ['$rootScope', '$scope', 'Request', 'Position', 'pageSize', '$cookies', 'Tool', '$http', '$window',
	function($rootScope, $scope, request, position, pageSize, $cookies, tool, $http, $window) {
		//调用百度地图上获取地址
		var pinfo = position.info();
		if (!pinfo) {
			return;
		}
		$scope.position = pinfo;
		//判断三级页面跳回二级页面之后是否有$rootScope.address，有就重新画点

		var x = pinfo.lon;
		var y = pinfo.lat;
		//输出对象
		console.log(pinfo);
		//输出X和Y坐标
		console.log('x坐标:' + x + ' ' + 'y坐标:' + y);
		//var url = '../baiduApi.php?y=' + y + '&&x=' + x + '';
		//console.log(url);
		//取消从百度地图获取地址
		/*$http.get(url).success(
			function(data) {
				console.log(data);
				$scope.positionDetail = data.result.formatted_address;
				$scope.addressTitle = data.result.sematic_description;
			});*/
		//调用百度地图下获取地址
		//实时监听obj地址变化
		/*var watch = $scope.$watch('$rootScope.address', function(scope) {
			console.log($rootScope.address);
		});*/

		//进去刷新地图页面
		$scope.baiduMapFlash = function() {
			//强制刷新，更新当前位置的地图
			//setTimeout("location.reload()", 0);
		}

		/*if (angular.isUndefined($rootScope.address)) {
			console.log($rootScope.address);
		} else {
			$(".content").append("<div style='border-bottom: 1px solid #d9d9d9;'><div style='display: inline;'><div style='display: inline; color: #1bb7ac;' ng-show='addressHistoryTest'>【默认地址】</div>{{addressHistoryTest}}</div></div>");
		}*/
		var start = 0;
		$scope.addresss = [];
		request.post('user/get_user_address', {
			user_id: $cookies.userid,
			token: $cookies.token,
			ver: "3.0"
		}).success(
			function(data) {
				console.log(data);
				$scope.addressHistory = data;
				//$scope.addressHistoryTest;
				//console.log($scope.addressHistory.code);
				$scope.datas = data.data;
				$scope.addressHistoryAddress = data.data.address;
				//console.log(data.data.address);
				console.log(data.data);
				data.data.address.forEach(function(a) {
					//start++;
					//console.log(a.location);
					start++;
					$scope.addressHistoryTest = a.location;
					$scope.addressHistoryX = a.latitude;
					$scope.addressHistoryY = a.longitude;
					$scope.addressHistoryAddress = a.address;
					$scope.addresss.push(a);
					//$scope.addressHistoryTest = 0;
				});
				//console.log($scope.addressHistoryTest)
			}
		)

		//上传选取后的地址到服务器
		if (angular.isUndefined($rootScope.address)) {
			console.log($rootScope.address);

		} else {
			console.log($rootScope.address);
			console.log($rootScope.address.title);
			//console.log($rootScope.address.lng);
			//console.log($rootScope.address.lat);
			request.post('user/add_user_address', {
				user_id: $cookies.userid,
				token: $cookies.token,
				ver: "3.0",
				longitude: $rootScope.address.lng,
				latitude: $rootScope.address.lat,
				location: $rootScope.address.address,
				address: $rootScope.address.title,
			}).success(
				function(data) {
					console.log(data);
				}
			)
		}


		$scope.addressDetailNowChoose = $rootScope.address;
		//$scope.clickchoose;
		//$rootScope.rightFork;
		console.log($rootScope.rightFork);
		//赋点击的adress值
		$scope.right_is_default = $rootScope.rightFork;


		$scope.chooseDefaultAddress = function(a, b) {

			var da_last = $('.last:last');
			//da_last.css("display","inline");
			//da_last.find("div.show").css("display","inline");
			//da_last.children("div").css("display","none");
			//console.log(da_last.children("div").css());
			//console.log(da_last);


			//console.log("選擇地址");
			console.log(a);
			//console.log(a.target.lastElementChild.style);
			//a.target.style.display = 'inline';

			/*if(a){
				$scope.clickchoose = 1;
			}*/
			var da = $('.defaultAddress');
			console.log(da);
			da.css("display", "none");
			a.target.lastElementChild.style.display = 'inline';
			$rootScope.rightFork = a.target.lastElementChild.id;
			$scope.right_is_default = $rootScope.rightFork;
			console.log($rootScope.rightFork);
			//console.log(document.getElementById('979').style);

			//a.target.style.display = 'inline';
			//a.target.childNodes.show = 0;
			//console.log(a.target.getAttribute('style'));
			//console.log(a.target.style = display:block);
			//console.log(b);
			var obj = {
				title: b.address,
				address: b.location,
				lat: b.latitude,
				lng: b.longitude,
				//bc: $scope.addressHistoryAddress
			};
			console.log(obj);
			$rootScope.address = obj;
			$window.history.back();
		}

		//增加删除地址功能
		$scope.adressDelete = function() {
			request.post('/user/del_user_address', {
				user_id: $cookies.userid,
				token: $cookies.token,
				address_id: $rootScope.rightFork,
				ver: "3.0.0"
			}).success(
				function(data) {
					console.log(data);
					//刷新
					$window.history.go(0);
				}
			)
		}

		$scope.back = function() {
			//console.log($scope.addressHistoryX)
			//console.log($rootScope.address);
			if (angular.isUndefined($rootScope.address)) {
				var obj = {
					title: $scope.addressHistoryAddress,
					address: $scope.addressHistoryTest,
					lat: $scope.addressHistoryX,
					lng: $scope.addressHistoryY,
					//bc: $scope.addressHistoryAddress
				};
				console.log(obj);
				$rootScope.address = obj;
				console.log($rootScope.address.address + $rootScope.address.title);
			} else {
				console.log($rootScope.address);
				console.log("地址信息的obj已经存在值")
			}
			$window.history.back();
		}


	}
])
angular.module('papabearApp').controller('BaiduMapCtrl', ['$rootScope', '$scope', 'Request', 'Position', 'pageSize', '$cookies', 'Tool', '$http', '$window',
		function($rootScope, $scope, request, position, pageSize, $cookies, tool, $http, $window) {
			var pinfo = position.info();
			if (!pinfo) {
				return;
			}
			$scope.position = pinfo;
			//判断三级页面跳回二级页面之后是否有$rootScope.address，有就重新画点
			if (angular.isUndefined($rootScope.address)) {
				var x = pinfo.lon;
				var y = pinfo.lat;
				console.log(pinfo.lon);
			} else {
				/*var x = $rootScope.address.lng;
				var y = $rootScope.address.lat;*/
				var x = pinfo.lon;
				var y = pinfo.lat;
				console.log($rootScope.address.lat);
				console.log($rootScope.address.lng);
			}

			if (angular.isUndefined($rootScope.addressSearch)) {} else {
				/*var x = $rootScope.address.lng;
				var y = $rootScope.address.lat;*/
				var y = $rootScope.addressSearch.lat;
				var x = $rootScope.addressSearch.lng;
				console.log($rootScope.addressSearch.lat);
				console.log($rootScope.addressSearch.lng);
			}
			/*var x = pinfo.lon;
			var y = pinfo.lat;*/
			//$rootScope.addressSearch

			$scope.positionX = x;
			$scope.positionY = y;

			//$scope.positionX = x;
			//$scope.positionY = y;
			//输出对象
			console.log(pinfo);
			//输出X和Y坐标
			console.log('x坐标:' + x + ' ' + 'y坐标:' + y);

			var map = new BMap.Map("map"); // 创建地图实例  
			var point = new BMap.Point(x, y); // 创建点坐标  
			map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
			//window.onload = map;

			var marker = new BMap.Marker(point); // 创建标注
			map.addOverlay(marker); // 将标注添加到地图中
			//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			//marker.disableDragging();           // 不可拖拽
			marker.enableDragging(); // 可拖拽
			console.log(point);
			//捕捉拖拉后的坐标点
			marker.addEventListener("load", function(e) {
				map.addOverlay(marker); // 将标注添加到地图中
				//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
				//marker.disableDragging();           // 不可拖拽
				marker.enableDragging(); // 可拖拽
			});
			marker.addEventListener("dragend", function(e) {
				console.log("当前位置：" + e.point.lng + ", " + e.point.lat);
				x = e.point.lng;
				y = e.point.lat;
				//console.log('x坐标:' + x + ' ' + 'y坐标:' + y);
				url = '../baiduApi.php?y=' + y + '&&x=' + x + '';
				$http.get(url).success(
					function(data) {
						console.log(data);
						$scope.positionDetail = data.result.formatted_address;
						$scope.addressTitle = data.result.sematic_description;
					});
			});

			map.addEventListener("longpress", function(e) {
				///按钮mouseup事件
				/*function mouseup() { 
						clearTimeout(timeout);

					}*/
				console.log("当前位置：" + e.point.lng + ", " + e.point.lat);
				x = e.point.lng;
				y = e.point.lat;
				console.log(marker);
				marker.point.lng = x;
				marker.point.lat = y;
				//重新赋定位值后，插针
				//map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
				//map.clearOverlays();
				map.addOverlay(marker);
				console.log('x坐标:' + x + ' ' + 'y坐标:' + y);
				url = '../baiduApi.php?y=' + y + '&&x=' + x + '';
				$http.get(url).success(
					function(data) {
						console.log(data);
						$scope.positionDetail = data.result.formatted_address;
						$scope.addressTitle = data.result.sematic_description;
					});

				if ($scope.adressInfo) {
					$scope.adressInfo = "";
					console.log("清空详细地址");
				} else {

				}
			});



			//var url = 'http://api.map.baidu.com/geocoder/v2/?ak=44E2c89efbb4793f281dbba1635e0159&callback=renderReverse&location='+y+','+x+'&output=jsonp&pois=1';
			var url = '../baiduApi.php?y=' + y + '&&x=' + x + '';
			//console.log(url);
			$http.get(url).success(
				function(data) {
					console.log(data);
					//var obj = eval ("(" + data + ")");
					//console.log('状态值： '+data.status);
					//console.log(data.result);
					//console.log(data);
					//console.log(data.result.formatted_address+data.result.sematic_description);
					//$scope.positionDetail = data.result.formatted_address+data.result.sematic_description;
					$scope.positionDetail = data.result.formatted_address;
					//console.log(data.result.sematic_description);
					$scope.addressTitle = data.result.sematic_description;
					//conpositionSave()sole.log($scope.addressInfo);
					if ($rootScope.address) {
						//$scope.positionDetail = $rootScope.address.address + $rootScope.address.title;
						$scope.positionDetail = $rootScope.address.address;
						console.log($scope.positionDetail);
					}

					//var status = data.GeocoderSearchResponse;
					//console.log(status);
				});

			//var positionDetail = $scope.positionDetail;
			//console.log(positionDetail);
			//console.log($scope.positionDetail);
			$scope.showDetail = function() {
				console.log($scope.positionDetail);
				//$window.history.href = '#address/search';
				//$location.url('address/search');
			}

			//$rootScope.address.title = "没写";
			$scope.positionSave = function() {
				/*if ($scope.adressInfo == undefined) {
					$scope.adressInfo = "";
					console.log("1")
				} else {
					//$scope.adressInfo = ""
				};
				if ($rootScope.address.title == undefined) {
					$rootScope.address.title = "";
					console.log("1")
				} else {
					//$scope.adressInfo = ""
				}*/
				//默认值交还
				//获取address_id值
				//$rootScope.rightFork
				$scope.adressInfo = $scope.addressTitle;
				console.log($scope.positionDetail);
				console.log($scope.adressInfo);
				//console.log($rootScope.address.title);
				//$rootScope.address = $scope.adressInfo;
				//$window.history.back();
				//生成一个对象 记录返回的所有信息
				//var getAddInfo = document.getElementById("inDeAdd").value;
				//console.log(getAddInfo);

				var obj = {
					//title: $rootScope.address.title,
					title: $scope.adressInfo,
					address: $scope.positionDetail,
					lat: y,
					lng: x,
					//bc: $scope.adressInfo
				};
				//$rootScope.address = $scope.searchs[0];
				console.log(obj);
				$rootScope.address = obj;
				console.log($rootScope.address.address + $rootScope.address.title);

				request.post('user/get_user_address', {
					user_id: $cookies.userid,
					token: $cookies.token,
					ver: "3.0"
				}).success(
					function(data) {
						//重新地址并请求获取常用的最后一个作为默认地址判断的ID值
						var args = data.data.address
						var argsLastNum = args.pop();
						$rootScope.rightFork = argsLastNum.address_id;
						console.log($rootScope.rightFork);
					}
				)

				$window.history.back();

			}


			//positionDetail
			// 百度地图API功能

			function G(id) {
				return document.getElementById(id);
			}
			//var map = new BMap.Map("map");
			//map.centerAndZoom("", 12); // 初始化地图,设置城市和地图级别。
			var ac = new BMap.Autocomplete( //建立一个自动完成的对象
				{
					"input": "suggestId",
					"location": map
				});
			ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
				var str = "";
				var _value = e.fromitem.value;
				var value = "";
				if (e.fromitem.index > -1) {
					value = _value.province + _value.city + _value.district + _value.street + _value.business;
				}
				str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
				value = "";
				if (e.toitem.index > -1) {
					_value = e.toitem.value;
					value = _value.province + _value.city + _value.district + _value.street + _value.business;
				}
				str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
				G("searchResultPanel").innerHTML = str;
			});
			var myValue;
			ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
				var _value = e.item.value;
				myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
				G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
				setPlace();
				/*var local = new BMap.LocalSearch(map, { //智能搜索
					onSearchComplete: myFun
				});
				function myFun() {
					var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
					map.centerAndZoom(pp, 18);
					map.addOverlay(new BMap.Marker(pp)); //添加标注
					console.log("123");
					console.log(pp);
					marker.point.lng = pp.lng;
					marker.point.lat = pp.lat;
				}
				local.search(myValue);
				console.log(myValue);*/
				$scope.positionDetail = myValue;
			});

			function setPlace() { // 创建地址解析器实例
				//map.clearOverlays();
				var myGeo = new BMap.Geocoder(); // 将地址解析结果显示在地图上,并调整地图视野
				myGeo.getPoint(myValue, function(point) {
					if (point) {
						map.centerAndZoom(point, 16);
						map.addOverlay(new BMap.Marker(point));
						//map.panTo(point);
						//map.setCenter(point);
						/*window.setTimeout(function() {
							map.panTo(new BMap.Point(point));
						}, 1000);*/
						console.log("搜索地址后的定位");
					}
				}, "北京");
				map = new BMap.Map("map");
				map.centerAndZoom(new BMap.Point($cookies.longitude, $cookies.latitude), 11);

				$scope.searchs = [];


				var options = {
					onSearchComplete: function(results) {
						// 判断状态是否正确
						if (local.getStatus() == BMAP_STATUS_SUCCESS) {
							$scope.$apply(function() {
								var s = [];
								for (var i = 0; i < results.getCurrentNumPois(); i++) {
									var result = results.getPoi(i);
									var obj = {
										title: result.title,
										address: result.address,
										lat: result.point.lat,
										lng: result.point.lng
									};
									s.push(obj);
									//~ alert(angular.toJson(results.getPoi(i)));
								}
								$scope.searchs = s;
								console.log($scope.searchs);
								$rootScope.address = $scope.searchs;
								console.log($rootScope.address);
								console.log(angular.toJson($scope.searchs));
							});
						} else {
							console.log('error');
						}
					}
				};
				var local = new BMap.LocalSearch(map, options);
				local.search(myValue);
				//$rootScope.address = $scope.searchs;
				//console.log(myValue);
				console.log($rootScope.address);

				//console.log($scope.searchs);
				//要重新，因为重画了地图，注册鼠标事件
				map.addEventListener("click", function(e) {
					console.log("当前位置：" + e.point.lng + ", " + e.point.lat);
					x = e.point.lng;
					y = e.point.lat;
					console.log(marker);
					marker.point.lng = x;
					marker.point.lat = y;
					map.clearOverlays();
					//重新赋定位值后，插针
					//map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

					/*window.setTimeout(function() {
								map.addOverlay(marker);
							}, 1000);*/
					map.addOverlay(marker);
					console.log('x坐标:' + x + ' ' + 'y坐标:' + y);
					url = '../baiduApi.php?y=' + y + '&&x=' + x + '';
					$http.get(url).success(
						function(data) {
							console.log(data);

							$scope.positionDetail = data.result.formatted_address;
						});
				});
				map.addOverlay(marker);
			}
		}
	])
	.controller('settingCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', 'pageSize', '$location',
		function($rootScope, $scope, request, $cookies, $window, pageSize, $location) { //账号设置
			//返回
			$scope.orderBack = function() {
				$location.path('/home');
			}
			request.post('user/get_user_info', {
					user_id: $cookies.userid,
					token: $cookies.token,
					ver: "3.3.0",
				}).success(function(data) {
					$scope.amount = data.data.amount;
					$scope.birth = data.data.birth;
				})
				//设置生日
				//$scope.birth = '1992-0102';
			$scope.sure = function() {
				var beginTime = document.getElementById('beginTime').value;
				beginTime = beginTime.substring(5, 10);
				console.log(beginTime);
				request.post('user/edit_user_info', {
					user_id: $cookies.userid,
					token: $cookies.token,
					ver: "3.3.0",
					birth: beginTime,
				}).success(
					function(data) {}
				).error(function(data) {
					alert(data.msg)
				})
			}

			//充值余额
			request.post('order/get_order_discount', {
				user_id: $cookies.userid,
				token: $cookies.token,
				ver: "3.3.0",
			}).success(function(data) {
				$scope.recharges = data.data;
				console.log($scope.recharges);
			})
		}
	])
	.controller('safetyCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', 'pageSize', '$location',
		function($rootScope, $scope, request, $cookies, $window, pageSize, $location) { //账号设置
			//返回
			$scope.orderBack = function() {
					$location.path('/setting');
				}
				//get_user_info 拿手机号码
			$scope.mobile = '';
			//内部传达的电话号码
			var mobile;
			//用户输入的验证码 获取回来
			$scope.get_message = function() {
				request.post('user/get_password_code', {
					user_id: $cookies.userid,
					token: $cookies.token,
					mobile: mobile,
					ver: "3.3.0",
				}).success(function(data) {
					//console.log(data);
					alert(data.msg);
				}).error(
					function(data) {
						alert(data.msg);
					}
				)
			}
			$scope.next = function() {
				request.post('user/chk_password_code', {
					city: $cookies.city,
					user_id: $cookies.userid,
					token: $cookies.token,
					ver: "3.3.0",
					code: $scope.code,
				}).success(function(data) {
					//携带验证码
					$location.path('/changePassword/' + $scope.code);
				}).error(
					function(data) {
						alert(data.msg);
					}
				)
			}
			request.post('user/get_user_info', {
				user_id: $cookies.userid,
				token: $cookies.token,
				ver: "3.3.0",
			}).success(function(data) {
				mobile = data.data.mobile;
				$scope.mobile = data.data.mobile;
				//遮手机号码中间的部分数字
				$scope.mobile = $scope.mobile.substr(0, 3) + '****' + $scope.mobile.substr(7, 11);
			})
		}
	])
	.controller('changePasswordCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', 'pageSize', '$location', '$routeParams',
		function($rootScope, $scope, request, $cookies, $window, pageSize, $location, $routeParams) { //修改支付密码
			//获取上一页带过来的验证码
			$scope.code = $routeParams.code;
			//返回
			$scope.orderBack = function() {
				$location.path('/safety');
			}

			//重置密码
			$scope.reset = function() {
				request.get('../rsaencode.php?input=' + $scope.password).success(function(data) {
					//经过rsa加密后的密码
					var passwordRsa = data;
					request.post('user/set_payment_password', {
						user_id: $cookies.userid,
						token: $cookies.token,
						ver: "3.3.0",
						code: $scope.code,
						password: passwordRsa,
					}).success(function(data) {
						alert(data.msg);
						$location.path('/home');
					}).error(
						function(data) {
							alert(data.msg);
							if (data.msg == '短信验证码错误') {
								$location.path('/safety');
							}
						}
					)
				}).error(function(data) {
					alert(data.msg);
				});
			}
		}
	])
	.controller('rechargeCtrl', ['$rootScope', '$scope', 'Request', 'Position', '$cookies', '$window', 'pageSize', '$location', '$routeParams',
		function($rootScope, $scope, request, position, $cookies, $window, pageSize, $location, $routeParams) { //充值
			var pinfo = position.info();
			if (!pinfo) {
				return;
			}
			//从路由中获取amount，要充值的余额
			$scope.amount = $routeParams.amount;
			//拿用户的电话号码信息
			request.post('user/get_user_info', {
				user_id: $cookies.userid,
				token: $cookies.token,
				ver: '3.0'
			}).success(function(data) {
				$scope.mobile = data.data.mobile;
			}).error(function(data) {
				alert(data.msg);
				$window.history.back();
			});
			$scope.orderBack = function() {
				$window.history.back();
			}
			$scope.recharge = function() {
				request.post('order/recharge', {
					user_id: $cookies.userid,
					token: $cookies.token,
					ver: "3.3.1",
					pay_type_id: '6',
					//open_id: 'oY6y3wZ37SYTqIKB6i4f2Vu0ckdo', //测试用
					open_id: $cookies.openid,
					discount_id: $routeParams.discountId,
					mobile: $scope.RecommendedMobile,
					//mobile:"",
					city: pinfo.cityCode,
				}).success(function(data) {}).error(function(data) {
					alert(data.msg);
				});
			}
		}
	])
	.controller('IndexCtrl', ['$rootScope', '$scope', 'Request', 'Position', 'pageSize', '$cookies', 'Tool',
		function($rootScope, $scope, request, position, pageSize, $cookies, tool) { //选择美甲师
			var pinfo = position.info();
			if (!pinfo) {
				return;
			}

			$scope.city = $cookies.city;
			var start = 0;
			$scope.designers = [];
			$scope.loadMore = 0;
			var load = function() {
				//~ ,offset:start,size:pageSize,latitude:pinfo.lat,longitude:pinfo.lon,sort:'distance',sort_type:'asc'
				request.post('artisan/get_artisan_list', {
					city: pinfo.cityCode,
					offset: start,
					size: pageSize,
					latitude: pinfo.lat,
					longitude: pinfo.lon,
					sort: 'distance',
					sort_type: 'asc',
					skill: skill,
					ver: '3.0'
				}).success(function(data) {
					$scope.loadMore = data.data.is_more;
					data.data.artisan.forEach(function(a) {
						start++;
						a.level = tool.getLevel(a.score);
						a.levelType = tool.getLevelType(a.score);
						$scope.designers.push(a);
					});
				}).error(function(data) {

				});
			};
			load();
			$scope.loadmoreHandler = function() {
				load();
			}
		}
	])
	.controller('DesignerSearchCtrl', ['$rootScope', '$scope', 'Request', 'Position', 'pageSize', '$cookies', 'Tool',
		function($rootScope, $scope, request, position, pageSize, $cookies, tool) { //搜索美甲师
			var pinfo = position.info();
			if (!pinfo) {
				return;
			}
			$scope.formData = {
				searchName: ''
			}
			$scope.city = $cookies.city;
			var start = 0;
			var keyWordSearch = "";
			$scope.designers = [];
			$scope.loadMore = 0;
			$scope.isNull = true;
			$scope.searchDesigner = function() {
				if ($scope.formData.searchName.length == 0) {
					//如果为空则不搜索
					return;
				} else {
					//判断关键词是否相同  相同不发送请求  不相同存储当前关键词 并发送请求 重置start、offset偏移量
					if (keyWordSearch != $scope.formData.searchName) {
						keyWordSearch = $scope.formData.searchName;
						start = 0;
						$scope.designers = [];
					} else {
						return;
					}
					//~ ,offset:start,size:pageSize,latitude:pinfo.lat,longitude:pinfo.lon,sort:'distance',sort_type:'asc'
					request.post('artisan/get_artisan_list', {
						keyword: $scope.formData.searchName,
						city: pinfo.cityCode,
						offset: start,
						size: pageSize,
						/*latitude: pinfo.lat,
						longitude: pinfo.lon,
						sort: 'distance',
						sort_type: 'asc',*/
						skill: skill,
						ver: "3.3.2",
					}).success(function(data) {

						$scope.loadMore = data.data.is_more;
						if (data.data.artisan.length) {
							$scope.isNull = true;
							console.log($scope.isNull);
							data.data.artisan.forEach(function(a) {
								start++;
								a.level = tool.getLevel(a.score);
								a.levelType = tool.getLevelType(a.score);
								$scope.designers.push(a);
							});
						} else {
							$scope.isNull = false;
							console.log($scope.isNull);
						}

					}).error(function(data) {

					});
				}
			};
			//$scope.searchDesigner();
			$scope.loadmoreHandler = function() {
				$scope.searchDesigner();
			}
		}
	]).controller('DesignerDetailCtrl', ['$rootScope', '$scope', '$routeParams', 'Request', 'pageSize', 'Tool', '$cookies', '$location',
		function($rootScope, $scope, $routeParams, request, pageSize, tool, $cookies, $location) { //美甲师详情

			console.log(angular.toJson($routeParams));
			var start = 0;
			$scope.type = 0;
			$scope.products = [];
			$scope.loadMore = 0;
			var loadProduct = function() {
					var param = {
						city: $cookies.cityCode,
						offset: start,
						size: pageSize,
						artisan_id: $routeParams.designerId,
						ver: '3.0',
						global: '2'
					};
					if ($scope.type == 1) {
						//价格升序
						param.sort = 'price';
						param.sort_type = 'asc';
					} else if ($scope.type == 2) {
						param.sort = 'price';
						param.sort_type = 'desc';
					} else if ($scope.type == 3) {
						//销量升序
						param.sort = 'trade_number';
						param.sort_type = 'desc';
					} else if ($scope.type == 4) {
						param.sort = 'trade_number';
						param.sort_type = 'asc';
					}
					request.post('product/get_product_by_artisan', param).success(function(data) {
						$scope.loadMore = data.data.is_more;
						data.data.product.forEach(function(a) {
							a.className = start % 2 == 0 ? 'li_left' : 'li_right';
							start++;
							//如果产品名字大于7个文字则省略6个字后面的内容
							//两个地方制约了文字展示长度 还有一个在view层的substr
							if (a.product_name.length >= 7) {
								a.product_name = a.product_name.substr(0, 6) + '...';
								//a.product_name = a.product_name.substr(0,6)+'...';
							}
							/*console.log(a.product_name);
							console.log(a.product_name.length);*/
							$scope.products.push(a);
						});
					});
				}
				//获取美甲师详情
			var param = {
				artisan_id: $routeParams.designerId
			};
			if ($cookies.userid && $cookies.token) {
				param.user_id = $cookies.userid;
				param.token = $cookies.token;
			}
			request.post('artisan/get_artisan_detail', param).success(function(data) {
				data.data.level = tool.getLevel(data.data.score);
				data.data.levelType = tool.getLevelType(data.data.score);
				$scope.designer = data.data;
				$scope.designer.comment_perfect_num = parseInt($scope.designer.comment_perfect_num);
				$scope.designer.comment_medium_num = parseInt($scope.designer.comment_medium_num);
				$scope.designer.comment_bad_num = parseInt($scope.designer.comment_bad_num);
				loadProduct();
			});

			$scope.loadDataDefault = function() {
				//如果已选则不能点击
				if ($scope.type == 0) {
					return;
				} else {
					$scope.type = 0;
					start = 0;
					$scope.products = [];
					$scope.loadMore = 0;
					loadProduct();
				}
			};
			//设置默认的价格升序状态 1为升序 2为降序
			$scope.priceAscorDesc = 0;
			$scope.loadDataPrice = function() {
					if ($scope.priceAscorDesc == 1) {
						$scope.loadDataDesc();
					} else if ($scope.priceAscorDesc == 2) {
						$scope.loadDataAsc();
					} else if ($scope.priceAscorDesc == 0) {
						$scope.loadDataAsc();
					}
				}
				//设置默认的销量升序状态 3为升序 4为降序
			$scope.tradeAscorDesc = 3;
			$scope.loadDataTradeNumber = function() {
				if ($scope.tradeAscorDesc == 3) {
					$scope.loadTradeAsc();
				} else if ($scope.tradeAscorDesc == 4) {
					$scope.loadTradeDesc();
				}
			}
			$scope.loadDataAsc = function() {
				//每次点击更改排序值
				$scope.priceAscorDesc = 1;
				$scope.type = 1;
				start = 0;
				$scope.products = [];
				$scope.loadMore = 0;
				loadProduct();
			};
			$scope.loadDataDesc = function() {
				//每次点击更改排序值
				$scope.priceAscorDesc = 2;
				$scope.type = 2;
				start = 0;
				$scope.products = [];
				$scope.loadMore = 0;
				loadProduct();
			};
			$scope.loadTradeAsc = function() {
				//如果已选则不能点击
				if ($scope.type == 3) {
					return;
				} else {
					//每次点击更改排序值
					$scope.tradeAscorDesc = 4;
					$scope.type = 3;
					start = 0;
					$scope.products = [];
					$scope.loadMore = 0;
					loadProduct();
				}
			}
			$scope.loadTradeDesc = function() {
				//每次点击更改排序值
				$scope.tradeAscorDesc = 3;
				$scope.type = 4;
				start = 0;
				$scope.products = [];
				$scope.loadMore = 0;
				loadProduct();
			}
			$scope.loadmoreHandler = function() {
				loadProduct();
				console.log(suc);
			}

			$scope.imgpreview = tool.imgPreview;

			$scope.onCollect = function() {
					if (!$cookies.token || !$cookies.userid) {
						$rootScope.isLogined = false;
						//~ $window.history.back();
						$rootScope.goLogin();
						return;
					}
					var designer = $scope.designer;
					if (angular.isUndefined(designer)) {
						alert('数据错误');
						$window.history.back();
						return;
					}
					if (designer.is_fav == 0) {
						request.post('user/fav_artisan', {
							user_id: $cookies.userid,
							token: $cookies.token,
							artisan_id: designer.artisan_id,
							is_fav: 1
						}).success(function(data) {
							alert('收藏成功');
							$scope.designer.is_fav = 1;
						}).error(function(data) {
							alert(data.msg);
						});
					} else {
						request.post('user/fav_artisan', {
							user_id: $cookies.userid,
							token: $cookies.token,
							artisan_id: designer.artisan_id,
							is_fav: 0
						}).success(function(data) {
							alert('取消收藏成功');
							$scope.designer.is_fav = 0;
						}).error(function(data) {
							alert(data.msg);
						});
					}
				}
				//增加直接预约跳转
			$scope.directBook = function() {
				window.location.href = '#orderConfirm/DirectBook';
			}
		}
	]).controller('DesignerInfoCtrl', ['$rootScope', '$scope', '$routeParams', 'Request', 'pageSize', 'Tool',
		function($rootScope, $scope, $routeParams, request, pageSize, tool) { //美甲师评价

			console.log(angular.toJson($routeParams));
			var start = 0;
			$scope.comments = [];
			$scope.loadMore = 0;
			var loadEstimate = function() {
					request.post('comment/get_comment_by_artisan', {
						artisan_id: $routeParams.designerId,
						offset: start,
						size: pageSize
					}).success(function(data) {
						$scope.loadMore = data.data.is_more;
						data.data.comment.forEach(function(a) {
							start++;
							$scope.comments.push(a);
						});
					});
				}
				//获取美甲师详情
			request.post('artisan/get_artisan_detail', {
				artisan_id: $routeParams.designerId
			}).success(function(data) {
				$scope.designer = data.data;
				$scope.designer.comment_perfect_num = parseInt($scope.designer.comment_perfect_num);
				$scope.designer.comment_medium_num = parseInt($scope.designer.comment_medium_num);
				$scope.designer.comment_bad_num = parseInt($scope.designer.comment_bad_num);
				loadEstimate();
			});

			$scope.loadmoreHandler = function() {
				loadEstimate();
			}

			$scope.imgpreview = tool.imgPreview;
		}
	]).controller('DesignerCommentCtrl', ['$rootScope', '$scope', '$routeParams', 'Request', 'pageSize', 'Tool',
		function($rootScope, $scope, $routeParams, request, pageSize, tool) { //美甲师评价

			console.log(angular.toJson($routeParams));
			var start = 0;
			$scope.comments = [];
			$scope.loadMore = 0;
			$scope.type = 0;
			
			//载入的时候默认选择传入没图参数
			$scope.isPic = 0;
			//载入的时候默认选择总评开关
			$scope.isSelf = true;
			var loadEstimate = function() {
					var param = {
						artisan_id: $routeParams.designerId,
						offset: start,
						size: pageSize,
						//是否有图
						format: $scope.isPic,
					};
					if ($scope.type != 0) {
						param['score'] = $scope.type;
					}
					request.post('comment/get_comment_by_artisan', param).success(function(data) {
						$scope.loadMore = data.data.is_more;
						//这里的有图会随着点击更多发生传回变成0的有图结果 当偏移量为0的时候则是正确的有图数量
						if(start==0){
							//有图的数量
							$scope.num_pic = data.data.num_pic; 
						}
						data.data.comment.forEach(function(a) {
							start++;
							$scope.comments.push(a);
						});
					});
				}
				//获取美甲师详情
			request.post('artisan/get_artisan_detail', {
				artisan_id: $routeParams.designerId
			}).success(function(data) {
				$scope.designer = data.data;
				$scope.designer.comment_perfect_num = parseInt($scope.designer.comment_perfect_num);
				$scope.designer.comment_medium_num = parseInt($scope.designer.comment_medium_num);
				$scope.designer.comment_bad_num = parseInt($scope.designer.comment_bad_num);
				loadEstimate();
			});

			$scope.loadmoreHandler = function() {
					loadEstimate();
				}
				//旧版 总评 好评 中评 差评的切换按钮开关
			$scope.setType = function(index) {
					$scope.type = index;
					start = 0;
					$scope.comments = [];
					loadEstimate();
				}
				//总评和有图的切换按钮函数
			$scope.havePic = function(index) {
				if (index == 0) {
					$scope.isSelf = true;
					start = 0;
					$scope.comments = [];
					$scope.isPic = 0;
					loadEstimate();
				} else {
					$scope.isSelf = false;
					start = 0;
					$scope.comments = [];
					$scope.isPic = 1;
					loadEstimate();
				}
			}

			$scope.imgpreview = tool.imgPreview;
		}
	]).controller('ProductCtrl', ['$rootScope', '$scope', 'Request', 'Position', 'pageSize', '$cookies',
		function($rootScope, $scope, request, position, pageSize, $cookies) { //美甲图

			var pinfo = position.info();
			if (!pinfo) {
				return;
			}

			$scope.isNoData = true;

			$scope.city = $cookies.city;
			$scope.type = 0;
			var start = 0;
			$scope.products = [];
			$scope.loadMore = 0;
			var loadData = function() {
				var param = {
					city: pinfo.cityCode,
					offset: start,
					size: pageSize
				};
				if ($scope.type == 1) {
					//价格升序
					param.sort = 'price';
					param.sort_type = 'asc';
				} else if ($scope.type == 2) {
					param.sort = 'price';
					param.sort_type = 'desc';
				}
				request.post('product/get_product_list', param).success(function(data) {
					$scope.loadMore = data.data.is_more;
					data.data.product.forEach(function(a) {
						a.className = start % 2 == 0 ? 'li_left' : 'li_right';
						start++;
						$scope.products.push(a);
						$scope.isNoData = false;
					});
				});
			};

			loadData();

			$scope.loadDataDefault = function() {
				$scope.isNoData = true;
				$scope.type = 0;
				start = 0;
				$scope.products = [];
				$scope.loadMore = 0;
				loadData();
			};
			$scope.loadDataAsc = function() {
				$scope.isNoData = true;
				$scope.type = 1;
				start = 0;
				$scope.products = [];
				$scope.loadMore = 0;
				loadData();
			};
			$scope.loadDataDesc = function() {
				$scope.isNoData = true;
				$scope.type = 2;
				start = 0;
				$scope.products = [];
				$scope.loadMore = 0;
				loadData();
			};
			$scope.loadmoreHandler = function() {
				loadData();
			}
		}
	]).controller('ProductDetailCtrl', ['$rootScope', '$scope', 'Request', '$routeParams', 'Tool', '$cookies', '$window', '$location',
		function($rootScope, $scope, request, $routeParams, tool, $cookies, $window, $location) { //美甲图详情
			//清空选项
			delete $rootScope.orderTimeList;
			delete $rootScope.orderCurrent;
			delete $rootScope.orderCurrentItem;
			delete $rootScope.address;
			delete $rootScope.orderMobile;
			delete $rootScope.orderIsSelf;
			delete $rootScope.orderUsername;

			var getDesiner = function(designerId) {
				request.post('artisan/get_artisan_detail', {
					artisan_id: designerId
				}).success(function(data) {
					var designer = data.data;
					designer.level = tool.getLevel(designer.score);
					designer.levelType = tool.getLevelType(designer.score);
					$scope.designer = designer;
				});
			}
			$scope.products = [];
			var param = {
				product_id: $routeParams.productId
			};
			if (!angular.isUndefined($cookies.userid) && !angular.isUndefined($cookies.token)) {
				param['user_id'] = $cookies.userid;
				param['token'] = $cookies.token;
			}
			param['artisan_id'] = $routeParams.artisan_id;
			request.post('product/get_product_detail', param).success(function(data) {
				$scope.products.push(data.data);
				$scope.title = data.data.product_name;
				var artisan_id = $routeParams.artisan_id;
				//getDesiner(data.data.artisan_id);
				getDesiner(artisan_id);
			}).error(function(data) {
				alert(data.error);
				$window.history.back();
			});

			$scope.onCollect = function() {
				if (!$cookies.token || !$cookies.userid) {
					$rootScope.isLogined = false;
					//~ $window.history.back();
					$rootScope.goLogin();
					return;
				}
				//console.log("123")
				var product = $scope.products[0];
				if (angular.isUndefined(product)) {
					alert('数据错误');
					$window.history.back();
					return;
				}
				if (product.is_fav == 1) {
					request.post('user/fav_product', {
						user_id: $cookies.userid,
						token: $cookies.token,
						product_id: $routeParams.productId,
						is_fav: 0
					}).success(function(data) {
						alert('取消收藏成功');
						$scope.products[0].is_fav = 0;
					}).error(function(data) {
						alert(data.msg);
					});
				} else {
					request.post('user/fav_product', {
						user_id: $cookies.userid,
						token: $cookies.token,
						product_id: $routeParams.productId,
						is_fav: 1
					}).success(function(data) {
						alert('收藏成功');
						$scope.products[0].is_fav = 1;
					}).error(function(data) {
						alert(data.msg);
					});
				}

			};

			$scope.imgpreview = tool.imgPreview;
		}
	]).controller('LoginCtrl', ['$rootScope', '$scope', 'Request', '$window', '$cookies', '$location',
		function($rootScope, $scope, request, $window, $cookies, $location) { //登录

			if (!(!$cookies.token || !$cookies.userid)) {
				$rootScope.isLogined = true;
				$window.history.back();
				return;
			}

			//自动登陆
			request.get('../get_time.php').success(function(data) {
				request.post('user/login_by_property_val', {
					type: 1,
					property: $cookies.rsaOpenid,
					time: data
				}).success(function(data) {
					//~ alert('自动登录成功');
					document.cookie = "token=" + data.data.token;
					document.cookie = "userid=" + data.data.user_id;
					$cookies.token = data.data.token;
					$cookies.userid = data.data.user_id;
					$rootScope.isLogined = true;
					if (angular.isDefined($cookies.loginBack)) {
						$location.path($cookies.loginBack).replace();
					} else {
						$window.history.back();
					}

				}).error(function(data) {
					if (data.code == 0 && data.data.stat == 100) {
						//~ alert('自动登陆失败');
					} else {
						alert(data.msg);
					}
				});
			}).error(function(data) {
				alert(data.msg);
			});

			$scope.mobileLogin = function() {
				var mobile = $scope.mobile;
				var snscode = $scope.snscode;
				if (!mobile || mobile.length == 0) {
					alert('手机号码不能为空');
					return;
				}
				var re = /^1\d{10}$/
				if (!re.test(mobile)) {
					alert('手机号码格式不正确');
					return;
				}

				if (!snscode || snscode.length == 0) {
					alert('验证码不能为空');
					return;
				}

				request.post('user/register_weixin', {
					mobile: mobile,
					code: snscode,
					open_id: $cookies.openid,
					login: 1
				}).success(function(data) {
					//~ alert(data.msg);
					document.cookie = "token=" + data.data.token;
					document.cookie = "userid=" + data.data.user_id;
					$cookies.token = data.data.token;
					$cookies.userid = data.data.user_id;
					$rootScope.isLogined = true;
					$rootScope.$broadcast('refreshFooter');
					if (angular.isDefined($cookies.loginBack)) {
						$location.path($cookies.loginBack).replace();
					} else {
						$window.history.back();
					}
				}).error(function(data) {
					alert(data.msg);
				});
			};
			$scope.snsbtntitle = '获取验证码';
			$scope.getsnscode = function() {
				var mobile = $scope.mobile;
				if (!mobile || mobile.length == 0) {
					alert('手机号码不能为空');
					return;
				}
				var re = /^1\d{10}$/
				if (!re.test(mobile)) {
					alert('手机号码格式不正确');
					return;
				}
				if ($scope.times > 0) {
					return;
				}

				request.post('user/get_register_code', {
					mobile: mobile
				}).success(function(data) {
					alert(data.msg);
					$scope.times = 60;
					$scope.snsbtntitle = $scope.times + '秒';
					var g = function() {
						snstimeout && clearTimeout(snstimeout);
						$scope.$apply(function() {
							$scope.snsbtntitle = $scope.times + '秒';
						});

						if ($scope.times <= 0) {
							$scope.$apply(function() {
								$scope.snsbtntitle = '获取验证码';
							});
							return;
						}
						$scope.times = $scope.times - 1;
						var snstimeout = setTimeout(g, 1000);
					};
					setTimeout(g, 1000);
				}).error(function(data) {
					alert(data.msg);
				});
			};

			$scope.login = function() {
				var mobile = $scope.mobile;
				var password = $scope.password;
				if (!mobile || mobile.length == 0) {
					alert('手机号码不能为空');
					return;
				}
				if (!password || password.length == 0) {
					alert('密码不能为空');
					return;
				}

				request.get('../rsaencode.php?input=' + password).success(function(data) {
					request.post('user/login', {
						mobile: mobile,
						password: data
					}).success(function(data) {
						document.cookie = "token=" + data.data.token;
						document.cookie = "userid=" + data.data.user_id;
						$cookies.token = data.data.token;
						$cookies.userid = data.data.user_id;
						$rootScope.isLogined = true;
						$rootScope.$broadcast('refreshFooter');
						if (angular.isDefined($cookies.loginBack)) {
							$location.path($cookies.loginBack).replace();
						} else {
							$window.history.back();
						}
					}).error(function(data) {
						alert(data.msg);
					});
				}).error(function(data) {
					alert(data.msg);
				});
			}

			//计时处理
			$scope.times = 0;

			$scope.loginback = function() {
				$window.history.back();
			};
		}
	]).controller('OrderCreateCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', '$location',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, $location) { //订单创建

			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}

			$scope.isSelf = true;

			$scope.onOrderAddress = function() {
				$rootScope.orderTimeList = $scope.timeList;
				$rootScope.orderCurrent = $scope.current;
				$rootScope.orderCurrentItem = $scope.currentItem;
				$rootScope.orderUsername = $scope.username;
				$rootScope.orderMobile = $scope.mobile;
				$rootScope.orderIsSelf = $scope.isSelf;
				//$location.url('address/search');
				$location.url('address/History');
				return;
			};

			if (angular.isDefined($rootScope.orderUsername)) {
				$scope.username = $rootScope.orderUsername;
			}

			if (angular.isDefined($rootScope.orderMobile)) {
				$scope.mobile = $rootScope.orderMobile;
			}

			if (angular.isDefined($rootScope.orderIsSelf)) {
				$scope.isSelf = $rootScope.orderIsSelf;
			}

			$scope.timeList = [];
			$scope.currentTimes = [];
			$scope.setCurrent = function(index) {
				$scope.current = index;
				if (index >= $scope.timeList.length) {
					$scope.currentTimes = [];
				} else {
					$scope.currentTimes = $scope.timeList[index].list;
				}
			};
			$scope.timeSelect = function(index) {
				var time = $scope.currentTimes[index];
				$scope.currentItem = index;
				if (time.status != 1) {
					return;
				}
				$scope.selectTime = $scope.timeList[$scope.current].name + ' ' + $scope.currentTimes[index].name + ':00';
				//~ alert($scope.selectTime);
				$scope.showTime = 0;
			};

			if (angular.isUndefined($rootScope.orderTimeList) || angular.isUndefined($rootScope.orderCurrent) || angular.isUndefined($rootScope.orderCurrentItem)) {

				request.post('artisan/get_artisan_schedule', {
					artisan_id: $routeParams.designerId
				}).success(function(data) {
					var n = 0;
					for (var key in data.data) {
						var obj = {};
						obj.index = n;
						obj.name = key;
						obj.title = key.substr(5);
						obj.status = 1; //忙
						var val = data.data[key];
						if (!val) {
							obj.list = [];
						} else {
							obj.list = [];
							for (var hour in val) {
								var hourObj = {
									name: hour,
									status: val[hour]
								};
								if (obj.status == 1 && hourObj.status == 1) {
									obj.status = 0; //闲
								}
								obj.list.push(hourObj);
							}
						}

						$scope.timeList.push(obj);
						n++;
					}

					$scope.setCurrent(0);
				}).error(function(data) {
					alert(data.msg);
				});
			} else {
				$scope.timeList = $rootScope.orderTimeList;
				$scope.current = $rootScope.orderCurrent;
				$scope.currentItem = $rootScope.orderCurrentItem;
				$scope.setCurrent($scope.current);
				$scope.timeSelect($scope.currentItem);
			}

			if (!angular.isUndefined($rootScope.address)) {
				$scope.address = $rootScope.address;
				$scope.adressInfo = $scope.address.title;
			}


			$scope.orderCreate = function() {
				if (!$scope.isSelf) {
					if (!$scope.username || $scope.username.length == 0) {
						alert('联系人姓名不能为空');
						return;
					} else if (!$scope.mobile || $scope.mobile.length == 0) {
						alert('手机号码不能为空');
						return;
					} else if (isNaN($scope.mobile)) {
						//判断手机是否为数字
						alert('手机号码不正确');
						return;
					}
				}


				if (!$scope.selectTime || $scope.selectTime.length == 0) {
					alert('请选择预约时间');
					return;
				}
				if (!$scope.address) {
					alert('请选择服务地址');
					return;
				}
				if (skill == '6') {
					if (!$scope.address.shop_name) {
						//美发
						alert('请输入详细地址');
						return;
					}
				} else {
					if ($scope.adressInfo.length == 0) {
						//美甲
						alert('请输入详细地址');
						return;
					}
				}
				/*if (!$scope.address.shop_name) {
					//美发
					alert('请输入详细地址');
					return;
				}
				if ($scope.adressInfo.length == 0) {
					//美甲
					alert('请输入详细地址');
					return;
				}*/
				var selectDate = $scope.timeList[$scope.current];
				var selectTime = selectDate.list[$scope.currentItem];
				var obj = {
					address: $scope.address.address,
					lat: $scope.address.lat,
					lng: $scope.address.lng,
					addressInfo: $scope.adressInfo,
					//addressInfo:$scope.address.shop_name,
					isself: $scope.isSelf,
					date: selectDate.name,
					hour: selectTime.name,
					designerId: $routeParams.designerId,
					productId: $routeParams.productId
				};

				if (!$scope.isSelf) {
					obj.username = $scope.username;
					obj.mobile = $scope.mobile;
				}
				console.log(obj);
				$rootScope.orderData = obj;

				$window.location.href = '#/order/confirm';
			};
			var param = {
				artisan_id: $routeParams.designerId
			};
			if ($cookies.userid && $cookies.token) {
				param.user_id = $cookies.userid;
				param.token = $cookies.token;
			}
			request.post('artisan/get_artisan_detail', param).success(function(data) {
				var shop = data.data.shop;
				if (shop.length > 0) {
					$scope.address = shop[0];
				};
			});
		}
	]).controller('OrderConfirmCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$location',
		function($rootScope, $scope, request, $cookies, $window, $location) { //订单创建确定
			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}
			if (!$rootScope.orderData) {
				alert('订单数据不存在！');
				$window.history.back();
				return;
			}
			var changeTwoDecimal_f = function(x) {
				var f_x = parseFloat(x);
				if (isNaN(f_x)) {
					alert('function:changeTwoDecimal->parameter error');
					return false;
				}
				var f_x = Math.round(x * 100) / 100;
				var s_x = f_x.toString();
				var pos_decimal = s_x.indexOf('.');
				if (pos_decimal < 0) {
					pos_decimal = s_x.length;
					s_x += '.';
				}
				while (s_x.length <= pos_decimal + 2) {
					s_x += '0';
				}
				return s_x;
			};

			$scope.orderData = $rootScope.orderData;
			//~ alert(angular.toJson($scope.orderData));

			//判断是否直接预约，直接预约没有product_id
			if ($rootScope.orderData.productId) {
				request.post('product/get_product_detail', {
					product_id: $rootScope.orderData.productId,
					artisan_id: $rootScope.orderData.designerId,
					ver: '3.0'
				}).success(function(data) {
					//~ $scope.$apply(function(){
					$scope.product = data.data;
					//~ });
					$scope.total = $scope.product.price;
					$scope.$watch('myCoupon', function(data) {
						if (!data) {
							$scope.total = $scope.product.price;
						} else {
							var total = 0;
							var price = parseFloat($scope.product.price);
							var amount = parseFloat(data.amount);
							var order = parseFloat(data.order);
							//total = (price - amount) * discount / 100;
							total = order;
							total = total <= 0 ? 0 : total;
							total = total == 0 && data.type == 1 ? 1 : total;
							$scope.total = changeTwoDecimal_f(total);
						}

					});
					if ($scope.orderData.isself) {
						request.post('user/get_user_info', {
							user_id: $cookies.userid,
							token: $cookies.token,
							ver: '3.0'
						}).success(function(data) {
							//~ $scope.$apply(function(){
							$scope.orderData.username = data.data.nickname;
							$scope.orderData.mobile = data.data.mobile;
							$scope.username = $scope.orderData.username;
							//~ });
						}).error(function(data) {
							alert(data.msg);
							$window.history.back();
						});
					}
					//正常预约的图片
					$scope.img_cover = angular.isUndefined($scope.product) ? $scope.orderData.pic : $scope.product.img_cover;
				}).error(function(data) {
					alert(data.msg);
					$window.history.back();
				});
			} else {
				//~ $scope.$apply(function(){
				//$scope.product = data.data;
				//~ });
				//直接预约的价格
				$scope.total = $scope.orderData.price;
				//直接预约的产品图
				$scope.img_cover = angular.isUndefined($scope.product) ? $scope.orderData.pic : $scope.product.img_cover;
				$scope.$watch('myCoupon', function(data) {
					if (!data) {
						$scope.total = $scope.orderData.price;
					} else {
						var total = 0;
						var price = parseFloat($scope.product.price);
						var amount = parseFloat(data.amount);
						var order = parseFloat(data.order);
						//total = (price - amount) * discount / 100;
						total = order;
						total = total <= 0 ? 0 : total;
						total = total == 0 && data.type == 1 ? 1 : total;
						$scope.total = changeTwoDecimal_f(total);
					}
				});
				if ($scope.orderData.isself) {
					request.post('user/get_user_info', {
						user_id: $cookies.userid,
						token: $cookies.token,
						ver: '3.0'
					}).success(function(data) {
						//~ $scope.$apply(function(){
						$scope.orderData.username = data.data.nickname;
						$scope.orderData.mobile = data.data.mobile;
						$scope.username = $scope.orderData.username;
						//~ });
					}).error(function(data) {
						alert(data.msg);
						$window.history.back();
					});
				}
			}

			$scope.haveCoupon = false;
			$scope.coupons = [];
			//请求服务端计算好的合计
			request.post('order/get_usable_coupon', {
				user_id: $cookies.userid,
				token: $cookies.token,
				ver: '3.0',
				product_id: $rootScope.orderData.productId,
			}).success(function(data) {
				$scope.loadMore = data.data.is_more;
				data.data.coupon.forEach(function(a) {
					if (a.amount == 0) {
						var obj = {
							couponId: a.coupon_id,
							title: a.title + '(' + a.amount + ')',
							amount: parseFloat(a.amount),
							type: a.type,
							order: a.order_price
						};

					} else {
						var obj = {
							couponId: a.coupon_id,
							title: a.title + '(' + a.amount + ')',
							amount: parseFloat(a.amount),
							type: a.type,
							order: a.order_price
						};
					}
					$scope.coupons.push(obj);
					$scope.haveCoupon = true;
				});
				/*if ($scope.haveCoupon) {
					var obj = {
						couponId: 0,
						title: '不使用优惠券',
						amount: 0,
						type: 0,
						discount: 0
					};
					$scope.coupons.push(obj);
				}
				console.log(obj);*/
			});
			//旧的请求方式
			/*request.post('user/get_coupon_list', {
				user_id: $cookies.userid,
				token: $cookies.token,
				offset: 0,
				stat: 1
			}).success(function(data) {
				console.log(data);
				$scope.loadMore = data.data.is_more;
				data.data.coupon.forEach(function(a) {
					if (a.amount == 0) {
						var obj = {
							couponId: a.coupon_id,
							title: a.title + '(' + a.amount + ')',
							amount: parseFloat(a.amount),
							type: a.type,
							discount: a.param.discount
						};

					} else {
						var obj = {
							couponId: a.coupon_id,
							title: a.title + '(' + a.amount + ')',
							amount: parseFloat(a.amount),
							type: a.type,
							discount: 100
						};
					}
					$scope.coupons.push(obj);
					$scope.haveCoupon = true;
				});
				if ($scope.haveCoupon) {
					var obj = {
						couponId: 0,
						title: '不使用优惠券',
						amount: 0,
						type: 0,
						discount: 100
					};
					$scope.coupons.push(obj);
				}
			});*/
			$scope.username = $scope.orderData.username;
			//提交数据
			$scope.submit = function() {
				//~ $scope.username = encodeURIComponent($scope.username);
				$scope.username = $scope.username.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
				//~ alert($scope.username);
				if (!$scope.username || $scope.username == '') {
					alert('用户名不能为空并且不能为特殊字符');
					return;
				}
				$scope.remark = angular.isUndefined($scope.remark) ? '' : $scope.remark;
				$scope.price = angular.isUndefined($scope.product) ? $scope.orderData.price : $scope.product.price;
				//console.log($scope.product.price);
				var data = {
					artisan_id: $scope.orderData.designerId,
					user_id: $cookies.userid,
					product_id: $scope.orderData.productId,
					book_type: ($scope.orderData.isself ? 1 : 2),
					book_name: $scope.username,
					book_phone: $scope.orderData.mobile,
					book_date: $scope.orderData.date,
					book_hour: $scope.orderData.hour,
					longitude: $scope.orderData.lng,
					latitude: $scope.orderData.lat,
					location: $scope.orderData.address,
					address: $scope.orderData.addressInfo,
					remark: $scope.remark,
					product_price: $scope.price,
					order_price: $scope.total,
					type: $scope.orderData.type,
					//~ coupon_id:,
					//未加会出现 价格已调整
					token: $cookies.token,
					ver: '3.0',
				};

				if (!$scope.myCoupon || $scope.myCoupon.couponId == 0) {

				} else {
					data.coupon_id = $scope.myCoupon.couponId;
				}

				request.post('order/create', data).success(function(data) {
					var orderid = data.data.order_id;
					//除了传订单，再传入一个productId，方便后面优惠券的调用
					$window.location.href = "#/order/" + orderid + "/" + $scope.orderData.designerId + "/" + $scope.orderData.productId;
				}).error(function(data) {
					alert(data.msg);
				});
			};

			$scope.showSubmitConfirm = function() {
				/*$rootScope.isShowAutoConfirm = true;
				$rootScope.autoConfirmContent = '是否确认下单？';
				$rootScope.confirmSureFunc = function() {
					$scope.submit();
				};*/
				$scope.submit();
			}
		}
	]).controller('HomeCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$location',
		function($rootScope, $scope, request, $cookies, $window, $location) { //个人中心
			delete $rootScope.collectType;

			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}
			request.post('user/get_user_info', {
				user_id: $cookies.userid,
				token: $cookies.token
			}).success(function(data) {
				$scope.userData = data.data;
			}).error(function(data) {
				alert(data.msg);
				$window.history.back();
			});
		}
	]).controller('OrderCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', 'pageSize', '$location',
		function($rootScope, $scope, request, $cookies, $window, pageSize, $location) { //我的订单

			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}

			$scope.orderBack = function() {
				$location.path('/home');
			}

			$scope.isNoData = true;
			var start = 0;
			$scope.loadMore = 0;
			$scope.orders = [];
			var loadData = function() {
				request.post('order/get_order_by_user', {
					user_id: $cookies.userid,
					token: $cookies.token,
					offset: start,
					size: pageSize
				}).success(function(data) {
					$scope.loadMore = data.data.is_more;
					data.data.order.forEach(function(a) {
						$scope.isNoData = false;
						start++;
						switch (parseInt(a.order_stat)) {
							case 0:
								{
									a.statusname = '待付款';
									break;
								}
							case 1:
								{
									a.statusname = '支付确认中';
									break;
								}
							case 10:
								{
									a.statusname = '已预约';
									break;
								}
							case 20:
								{
									a.statusname = four + '师已确认';
									break;
								}
							case 30:
								{
									a.statusname = four + '师已出发';
									break;
								}
							case 40:
								{
									a.statusname = four + '师已到达';
									break;
								}
							case 50:
								{
									a.statusname = '正在' + four;
									break;
								}
							case 60:
								{
									a.statusname = '服务完毕';
									break;
								}
							case 70:
								{
									a.statusname = '交易完成';
									break;
								}
							case 80:
								{
									a.statusname = '待取消';
									break;
								}
							case 81:
								{
									a.statusname = '已取消';
									break;
								}
							default:
								a.statusname = '';
						}
						//计算剩余时间
						var timeStr = a.book_date + '-' + a.book_hour;
						var timeArr = timeStr.split("-");
						var date = new Date(timeArr[0], parseInt(timeArr[1]) - 1, timeArr[2], timeArr[3]);
						var timestamp = Date.parse(date);
						var nowTimestamp = Date.parse(new Date());
						//计算间隔
						var intval = timestamp - nowTimestamp;
						intval = intval < 0 ? 0 : intval;
						intval = parseInt(intval / 1000);

						Date.prototype.Format = function(fmt) { //author: meizz 
								var o = {
									"M+": this.getMonth() + 1, //月份 
									"d+": this.getDate(), //日 
									"h+": this.getHours(), //小时 
									"m+": this.getMinutes(), //分 
									"s+": this.getSeconds(), //秒 
									"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
									"S": this.getMilliseconds() //毫秒 
								};
								if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
								for (var k in o)
									if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
								return fmt;
							}
							//~ alert('timestamp:'+date.Format('yyyy-MM-dd HH:mm:ss')+'  nowtimestamp'+new Date().Format('yyyy-MM-dd HH:mm:ss'));
							//转化成日，时
						var hours = parseInt(intval / 3600);
						var day = parseInt(hours / 24);
						var hour = hours % 24;
						a.day = day;
						a.hour = hour;
						$scope.orders.push(a);
					});
				});
			};
			loadData();
			$scope.loadmoreHandler = function() {
				loadData();
			}
		}
	]).controller('OrderDetailCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', '$location', 'Tool',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, $location, tool) { //订单详情
			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}

			//更改流程之后的模块
			$scope.haveCoupon = false;
			$scope.coupons = [];
			//如果是直接预约 因为没有productId所以将它的undefined变成0传给 get_usable_coupon
			$routeParams.productId === 'undefined' ? $routeParams.productId = 0 : $routeParams.productId;
			//请求服务端计算好的合计
			request.post('order/get_usable_coupon', {
				user_id: $cookies.userid,
				token: $cookies.token,
				ver: '3.0',
				product_id: $routeParams.productId,
				order_id: $routeParams.orderId
			}).success(function(data) {
				$scope.loadMore = data.data.is_more;
				data.data.coupon.forEach(function(a) {
					if (a.amount == 0) {
						var obj = {
							couponId: a.coupon_id,
							title: a.title + '(￥' + a.amount + ')',
							amount: parseFloat(a.amount),
							type: a.type,
							order: a.order_price
						};

					} else {
						var obj = {
							couponId: a.coupon_id,
							title: a.title + '(￥' + a.amount + ')',
							amount: parseFloat(a.amount),
							type: a.type,
							order: a.order_price
						};
					}
					$scope.coupons.push(obj);
					$scope.haveCoupon = true;
				});
			}).error(function(data) {
				console.log(data)
			});

			var changeTwoDecimal_f = function(x) {
				var f_x = parseFloat(x);
				if (isNaN(f_x)) {
					alert('function:changeTwoDecimal->parameter error');
					return false;
				}
				var f_x = Math.round(x * 100) / 100;
				var s_x = f_x.toString();
				var pos_decimal = s_x.indexOf('.');
				if (pos_decimal < 0) {
					pos_decimal = s_x.length;
					s_x += '.';
				}
				while (s_x.length <= pos_decimal + 2) {
					s_x += '0';
				}
				return s_x;
			};

			$scope.orderDetailBack = function() {
				$location.path('/order');
				return;
			}

			$scope.showShare = 0;
			$scope.clickShowShare = function() {
				$scope.showShare = !$scope.showShare;
			};

			var orderId = $routeParams.orderId;
			//拿余额 之前微信没有扣余额这块
			request.post('order/get_usable_amount', {
				user_id: $cookies.userid,
				token: $cookies.token,
				ver: '3.0',
				order_id: $routeParams.orderId,
			}).success(function(data) {
				//可用余额 要先拿回来，不然后面会出现异步回调 余额可能获取不到的问题
				$scope.orderYe = data.data.amount;
				//支付状态
				$scope.order_is_pay_pwd = data.data.is_pay_pwd;

				request.post('order/get_order_info', {
					user_id: $cookies.userid,
					token: $cookies.token,
					order_id: orderId
				}).success(function(data) {
					if (data.data.order_additional > 0) {
						data.data.addition = data.data.order_additional_list[0];
						data.data.is_need_pay = data.data.addition.stat == 0 && data.data.addition.type == 1 ? true : false;
						data.data.total = parseFloat(data.data.amount_rmb);
						if (data.data.addition.type == 1) {
							data.data.total += parseFloat(data.data.addition.amount);
						} else if (data.data.addition.type == 2) {
							data.data.total -= parseFloat(data.data.addition.amount);
						}
						data.data.total = changeTwoDecimal_f(data.data.total);
					} else {
						data.data.is_need_pay = false;
						data.data.total = data.data.amount_rmb;
					}

					$scope.order = data.data;
					$scope.total = $scope.order.amount_rmb;
					var temp = $scope.total;

					$scope.$watch('myCoupon', function(data) {
						if (!data) {
							$scope.total = $scope.order.amount_rmb = temp;
							//如果可用余额大于要支付的余额
							if (parseFloat($scope.orderYe) >= parseFloat($scope.order.amount_rmb)) {
								$scope.UseYe = changeTwoDecimal_f($scope.order.amount_rmb);
								//如果折扣够扣除，第三方支付为0
								if (changeTwoDecimal_f(parseFloat($scope.orderYe) - parseFloat($scope.order.amount_rmb)) >= 0) {
									$scope.total = '0.00';
									//余额足够用 余额支付 5
									$scope.pay_type_id = 5;
								} else {
									alert("价格错误")
								}
							} else {
								$scope.UseYe = $scope.orderYe;
								$scope.total = -(parseFloat($scope.orderYe) - parseFloat($scope.order.amount_rmb));
								//$scope.total = -($scope.orderYe - $scope.order.amount_rmb);
								$scope.total = changeTwoDecimal_f($scope.total)
									//余额不够用微信支付 6
								$scope.pay_type_id = 6;
								//如果不够支付
								//$scope.UseYe =  $scope.total = changeTwoDecimal_f($scope.orderYe - $scope.order.amount_rmb);
							}
							if ($scope.order.is_account == 1) {
								//这里是已支付余额后，返回再微信支付,正常情况下返回才走这个分支
								$scope.total = $scope.order.amount_rmb - $scope.order.amount_account;
								//$scope.total = -($scope.orderYe - $scope.order.amount_rmb);
								$scope.total = changeTwoDecimal_f($scope.total)
							}
						} else {
							$scope.order.amount_rmb = data.order;
							//如果可用余额大于要支付的余额
							if (parseFloat($scope.orderYe) >= parseFloat($scope.order.amount_rmb)) {
								$scope.UseYe = changeTwoDecimal_f($scope.order.amount_rmb);
								//如果折扣够扣除，第三方支付为0
								if (changeTwoDecimal_f(parseFloat($scope.orderYe) - parseFloat($scope.order.amount_rmb)) >= 0) {
									$scope.total = '0.00';
									$scope.pay_type_id = 5;
								} else {
									alert("价格错误")
								}
							} else {
								$scope.UseYe = $scope.orderYe;
								$scope.total = -(parseFloat($scope.orderYe) - parseFloat($scope.order.amount_rmb));
								$scope.total = changeTwoDecimal_f($scope.total)
								$scope.pay_type_id = 6;
							}
							$scope.couponid = data.couponId;
						}

						//附加单情况
						//如果有附加单
						if ($scope.order.order_additional != 0) {
							//待付
							$scope.SecondUseYe = changeTwoDecimal_f($scope.order.order_additional_list[0].amount - $scope.order.order_additional_list[0].amount_account);
							//附加单的价格
							//余额足够 余额大于要支付附加单价格
							if (parseFloat($scope.orderYe) >= parseFloat($scope.order.order_additional_list[0].amount)) {
								$scope.UseYe = changeTwoDecimal_f($scope.order.order_additional_list[0].amount);
								//如果折扣够扣除，第三方支付为0
								if (changeTwoDecimal_f(parseFloat($scope.orderYe) - parseFloat($scope.order.order_additional_list[0].amount)) >= 0) {
									$scope.total = '0.00';
									//余额足够用 余额支付 5
									$scope.pay_type_id = 5;
								} else {
									alert("价格错误")
								}
								//待付金额
								$scope.DFtotal = '0.00';
							} else {
								$scope.UseYe = $scope.orderYe;
								$scope.total = -(parseFloat($scope.orderYe) - parseFloat($scope.order.order_additional_list[0].amount));
								$scope.total = changeTwoDecimal_f($scope.total)
									//余额不够用微信支付 6
								$scope.pay_type_id = 6;
								//如果不够支付
								$scope.DFtotal = -(parseFloat($scope.orderYe) - parseFloat($scope.SecondUseYe));
								$scope.DFtotal = changeTwoDecimal_f($scope.DFtotal);
							}
							//如果附加单已经支付过余额
							if ($scope.order.order_additional_list[0].amount_account != 0) {
								//计算第二次要支付的金额，这是附加单已经支付过余额的情况下 amount_account已支付的余额
								$scope.SecondUseYe = changeTwoDecimal_f($scope.order.order_additional_list[0].amount - $scope.order.order_additional_list[0].amount_account);
								/*$scope.UseYe = $scope.SecondUseYe;
								console.log($scope.orderYe)
								console.log(parseInt($scope.orderYe) >= parseInt($scope.UseYe))*/
								//这里一定要用parseInt()来处理对比大小，不然会报错
								if (parseInt($scope.orderYe) >= parseInt($scope.UseYe)) {
									if (parseFloat($scope.orderYe) >= parseFloat($scope.SecondUseYe)) {
										$scope.UseYe = changeTwoDecimal_f($scope.SecondUseYe);
										//如果折扣够扣除，第三方支付为0
										if (changeTwoDecimal_f(parseFloat($scope.orderYe) - parseFloat($scope.SecondUseYe)) >= 0) {
											$scope.total = '0.00';
											//余额足够用 余额支付 5
											$scope.pay_type_id = 5;
										} else {
											alert("价格错误")
										}
										//待付金额
										$scope.DFtotal = '0.00';
									} else {
										$scope.UseYe = $scope.orderYe;
										$scope.total = -(parseFloat($scope.orderYe) - parseFloat($scope.SecondUseYe));
										$scope.total = changeTwoDecimal_f($scope.total)
											//余额不够用微信支付 6
										$scope.pay_type_id = 6;
										//如果不够支付
										$scope.DFtotal = -(parseFloat($scope.orderYe) - parseFloat($scope.SecondUseYe));
										$scope.DFtotal = changeTwoDecimal_f($scope.DFtotal);
									}
								}
							}
						}
					});

					//计算剩余时间
					var timeStr = data.data.book_date + '-' + data.data.book_hour;
					var timeArr = timeStr.split("-");
					var date = new Date(timeArr[0], parseInt(timeArr[1]) - 1, timeArr[2], timeArr[3]);
					var timestamp = Date.parse(date);
					var nowTimestamp = Date.parse(new Date());
					//计算间隔
					var intval = timestamp - nowTimestamp;
					intval = intval < 0 ? 0 : intval;
					intval = parseInt(intval / 1000);

					Date.prototype.Format = function(fmt) { //author: meizz 
							var o = {
								"M+": this.getMonth() + 1, //月份 
								"d+": this.getDate(), //日 
								"h+": this.getHours(), //小时 
								"m+": this.getMinutes(), //分 
								"s+": this.getSeconds(), //秒 
								"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
								"S": this.getMilliseconds() //毫秒 
							};
							if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
							for (var k in o)
								if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
							return fmt;
						}
						//~ alert('timestamp:'+date.Format('yyyy-MM-dd HH:mm:ss')+'  nowtimestamp'+new Date().Format('yyyy-MM-dd HH:mm:ss'));
						//转化成日，时
					var hours = parseInt(intval / 3600);
					var day = parseInt(hours / 24);
					var hour = hours % 24;
					$scope.order.day = day;
					$scope.order.hour = hour;

					var list = [];
					var additional = false;
					if ($scope.order.order_additional > 0) {
						additional = $scope.order.addition;
					}
					var amount_rmb = parseFloat($scope.order.amount_rmb);
					if ($scope.order.pay_stat == 1) {
						//~ list.push('已付金额：'+$scope.order.amount_rmb+'元');

						if (additional == false) {
							//amount_rmb > 0 && list.push('(扣交通费50元)');
							list.push("(退款金额" + additional.amount + "元)");
						} else {
							var amount = parseFloat($scope.order.amount);
							var additionalAmount = parseFloat(additional.amount);
							if (amount_rmb + additionalAmount != amount) {
								//list.push('(扣交通费50元)');
								list.push("(退款金额" + additional.amount + "元)");
							}
						}
					} else if ($scope.order.pay_stat == 2) { //已退款
						//~ list.push('已付金额：'+$scope.order.amount_rmb+'元');
						list.push("退款已完成");

						if (additional == false) {
							list.push("(退款金额" + $scope.order.amount_rmb + "元)");
						} else { // 有额外款项
							//退款金额
							var additionalAmount = parseFloat(additional.amount);
							if (additionalAmount != amount_rmb) { // 扣了50交通费
								//list.push("(扣交通费50元,退款金额" + additional.amount + "元)");
								list.push("(退款金额" + additional.amount + "元)");
							} else {
								list.push("(退款金额" + additional.amount + "元)");
							}
						}
					}
					$scope.order.cancelStrings = list;

					if ($scope.order.order_stat == 70 && $scope.order.is_comment != 0) {
						//分享
						request.post('user/share_user_coupon', {
							user_id: $cookies.userid,
							token: $cookies.token,
							order_id: orderId,
							share_type: 'weixin'
						}).success(function(data) {
							window.weixinShareUrl = data.data.url;
							window.weixinShareContent = data.data.msg;
							//~ wx.ready(function(){
							// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
							wx.onMenuShareTimeline({
								title: window.weixinShareContent, // 分享标题
								link: window.weixinShareUrl, // 分享链接
								imgUrl: window.weixinShareImgUrl, // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							});

							wx.onMenuShareAppMessage({
								title: window.weixinShareTitle, // 分享标题
								desc: window.weixinShareContent, // 分享描述
								link: window.weixinShareUrl, // 分享链接
								imgUrl: window.weixinShareImgUrl, // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							});

							wx.onMenuShareQQ({
								title: window.weixinShareTitle, // 分享标题
								desc: window.weixinShareContent, // 分享描述
								link: window.weixinShareUrl, // 分享链接
								imgUrl: window.weixinShareImgUrl, // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							});

							wx.onMenuShareWeibo({
								title: window.weixinShareTitle, // 分享标题
								desc: window.weixinShareContent, // 分享描述
								link: window.weixinShareUrl, // 分享链接
								imgUrl: window.weixinShareImgUrl, // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							});
							//~ });
						});
					}
				}).error(function(data) {
					alert(data.msg);
					$window.history.back();
				});
			});

			$scope.orderCancel = function() {
				var str = '确定取消订单吗？';
				if ($scope.order.order_stat == 30) {
					str = four + '师已出发，若取消订单，将扣除50元交通费';
				}

				$rootScope.isShowAutoConfirm = true;
				$rootScope.autoConfirmContent = str;
				$rootScope.confirmSureFunc = function() {
					$scope.confirmSure();
				};
				//判断是否在orderDetail页面有支付按钮
				var pay;
				if (pay = document.getElementById("pay")) {
					pay.style.zIndex = "0";
				}
			};

			$scope.confirmSure = function() {
				request.post('order/cancel', {
					user_id: $cookies.userid,
					token: $cookies.token,
					order_id: $scope.order.order_id
				}).success(function(data) {
					alert('取消订单成功');
					$window.location.reload();
				}).error(function(data) {
					alert(data.msg);
				});
			};

			$scope.orderFinish = function() {
				request.post('order/confirm', {
					user_id: $cookies.userid,
					token: $cookies.token,
					order_id: $scope.order.order_id
				}).success(function(data) {
					var str = !$scope.order.is_need_pay && $scope.order.order_additional > 0 && $scope.order.addition.stat == 0 ? '提交退款请求成功' : '订单确认成功';
					alert(str);
					$window.location.reload();
				}).error(function(data) {
					alert(data.msg);
				});
			};
			//获取密码
			$scope.password;
			$scope.determine = function() {
				console.log($scope.password);
				request.get('../rsaencode.php?input=' + $scope.password).success(function(data) {
					//经过rsa加密后的密码;
					pay(data);
				});
			}

			function pay(passwordRsa) {
				var param = {
					user_id: $cookies.userid,
					token: $cookies.token,
					pay_type_id: $scope.pay_type_id,
					open_id: openid,
					//open_id: 'oY6y3wZ37SYTqIKB6i4f2Vu0ckdo', //测试用
					coupon_id: $scope.couponid,
					password: passwordRsa,
					//传等待支付的钱
					order_price: $scope.total,
					//传支付的余额
					account: $scope.UseYe,
				};
				if ($scope.order.order_stat == 0) {
					param['order_id'] = $scope.order.order_id;
				} else if ($scope.order.is_need_pay) {
					param['order_id'] = $scope.order.addition.order_additional_id;
				} else {
					return;
				}
				console.log(param);
				request.post('order/get_transaction_data', param).success(function(data) {
					//余额支付成功运行
					if (data.data.is_pay) {
						//支付成功后刷新页面 余额充足的情况下走的分支
						location.reload();
					} else {
						if (data.data.order_string) {} else {
							//console.log('返回的数据不正确:'+data.data.order_string);
							alert('支付失败')
						}
						//输出密码
						//$window.location.href = "../wxpay.php?wxdata=" + encodeURIComponent(data.data.order_string);
						//$window.location.href = data.data.order_string;
						if ($scope.pay_type_id == 6 && $scope.UseYe == 0) {
							$window.location.href = data.data.order_string;
						} else if ($scope.pay_type_id == 6 && $scope.UseYe != 0) {
							$window.location.href = data.data.order_string;
						}
					}
				}).error(function(data) {
					alert('返回的数据不正确:' + data.msg);
				});
			}

			var openid = $cookies.openid;
			$scope.orderWxPay = function() {
				if ($scope.pay_type_id == 5) {
					//只支付余额的情况
					//弹出输入余额支付密码框
					if ($scope.order_is_pay_pwd == 1) {
						document.getElementById('input').style.display = 'block';
						//讲支付按钮降层
						document.getElementById('pay').style.zIndex = '0';
					} else {
						//不输入密码的情况
						pay();
					}
				} else if ($scope.pay_type_id == 6 && $scope.UseYe != 0) {
					//既要支付余额也要支付微信
					if ($scope.order_is_pay_pwd == 1) {
						document.getElementById('input').style.display = 'block';
						//讲支付按钮降层
						document.getElementById('pay').style.zIndex = '0';
					} else {
						//不输入密码的情况
						pay();
					}
				} else if ($scope.pay_type_id == 6 && $scope.UseYe == 0) {
					//只微信支付 余额为0情况
					pay();
				}
			};

			$scope.onPhone = function() {
				if (angular.isUndefined($scope.mobile)) {
					request.post('artisan/get_artisan_detail', {
						artisan_id: $scope.order.artisan_id,
						user_id: $cookies.userid,
						token: $cookies.token
					}).success(function(data) {
						$scope.designer = data.data;
						request.get('../rsadecode.php?input=' + encodeURIComponent(data.data.mobile)).success(function(data) {
							$scope.mobile = data;
							$window.location.href = "tel:" + $scope.mobile;
						}).error(function(data) {
							alert('网络连接失败');
						});
					}).error(function(data) {
						alert(data.msg);
					});
				} else {
					$window.location.href = "tel:" + $scope.mobile;
				}
			};

			$scope.timeList = [];
			$scope.currentTimes = [];
			$scope.setCurrent = function(index) {
				$scope.current = index;
				if (index >= $scope.timeList.length) {
					$scope.currentTimes = [];
				} else {
					$scope.currentTimes = $scope.timeList[index].list;
				}
			};
			$scope.timeSelect = function(index) {
				var time = $scope.currentTimes[index];
				$scope.currentItem = index;
				if (time.status != 1) {
					return;
				}

				var selectDate = $scope.timeList[$scope.current];
				var selectTime = selectDate.list[$scope.currentItem];
				$scope.showTime = false;

				$rootScope.isShowAutoConfirm = true;
				$rootScope.autoConfirmContent = '是否确认修改预约时间？';
				$rootScope.confirmSureFunc = function() {
					request.post('order/reset_order_time', {
						user_id: $cookies.userid,
						token: $cookies.token,
						order_id: $scope.order.order_id,
						book_date: selectDate.name,
						book_hour: selectTime.name
					}).success(function(data) {
						alert('修改服务时间成功');
						$scope.order.book_date = selectDate.name;
						$scope.order.book_hour = selectTime.name;
						$scope.timeList = [];
						$scope.currentTimes = [];
					}).error(function(data) {
						alert(data.msg);
					});
				};
			};

			$scope.modifyTime = function() {
				if ($scope.timeList.length == 0) {
					request.post('artisan/get_artisan_schedule', {
						artisan_id: $scope.order.artisan_id
					}).success(function(data) {
						var n = 0;
						for (var key in data.data) {
							var obj = {};
							obj.index = n;
							obj.name = key;
							obj.title = key.substr(5);
							obj.status = 1; //忙
							var val = data.data[key];
							if (!val) {
								obj.list = [];
							} else {
								obj.list = [];
								for (var hour in val) {
									var hourObj = {
										name: hour,
										status: val[hour]
									};
									if (obj.status == 1 && hourObj.status == 1) {
										obj.status = 0; //闲
									}
									obj.list.push(hourObj);
								}
							}

							$scope.timeList.push(obj);
							n++;
						}

						$scope.setCurrent(0);
						$scope.showTime = true;
					}).error(function(data) {
						alert(data.msg);
					});
				} else {
					$scope.showTime = true;
				}
			};

		}
	]).controller('OrderCommentCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', '$location',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, $location) { //订单评价

			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}

			var orderId = $routeParams.orderId;
			request.post('order/get_order_info', {
				user_id: $cookies.userid,
				token: $cookies.token,
				order_id: orderId
			}).success(function(data) {
				if (data.data.order_additional > 0) {
					data.data.addition = data.data.order_additional_list[0];
					data.data.is_need_pay = data.data.addition.stat == 0 && data.data.addition.type == 1 ? true : false;
				} else {
					data.data.is_need_pay = false;
				}

				$scope.order = data.data;
				//计算剩余时间
				var timeStr = data.data.book_date + '-' + data.data.book_hour;
				var timeArr = timeStr.split("-");
				var date = new Date(timeArr[0], parseInt(timeArr[1]) - 1, timeArr[2], timeArr[3]);
				var timestamp = Date.parse(date);
				var nowTimestamp = Date.parse(new Date());
				//计算间隔
				var intval = timestamp - nowTimestamp;
				intval = intval < 0 ? 0 : intval;
				intval = parseInt(intval / 1000);

				Date.prototype.Format = function(fmt) { //author: meizz 
						var o = {
							"M+": this.getMonth() + 1, //月份 
							"d+": this.getDate(), //日 
							"h+": this.getHours(), //小时 
							"m+": this.getMinutes(), //分 
							"s+": this.getSeconds(), //秒 
							"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
							"S": this.getMilliseconds() //毫秒 
						};
						if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
						for (var k in o)
							if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
						return fmt;
					}
					//~ alert('timestamp:'+date.Format('yyyy-MM-dd HH:mm:ss')+'  nowtimestamp'+new Date().Format('yyyy-MM-dd HH:mm:ss'));
					//转化成日，时
				var hours = parseInt(intval / 3600);
				var day = parseInt(hours / 24);
				var hour = hours % 24;
				$scope.order.day = day;
				$scope.order.hour = hour;
			}).error(function(data) {
				alert(data.msg);
				$window.history.back();
			});

			//专业分
			$scope.professional = 5;
			$scope.setProfessional = function(index) {
				if (index == $scope.professional) {
					index--;
				}
				$scope.professional = index;
			};
			$scope.getProfessionalTitle = function() {
				if ($scope.professional == 0) {
					return '非常差';
				} else if ($scope.professional == 1) {
					return '比较差';
				} else if ($scope.professional == 2) {
					return '还行吧';
				} else if ($scope.professional == 3) {
					return '一般哦';
				} else if ($scope.professional == 4) {
					return '比较好';
				} else if ($scope.professional == 5) {
					return '非常好';
				} else {
					return '';
				}
			};

			//沟通分
			$scope.communication = 5;
			$scope.setCommunication = function(index) {
				if (index == $scope.communication) {
					index--;
				}
				$scope.communication = index;
			};
			$scope.getCommunicationTitle = function() {
				if ($scope.communication == 0) {
					return '非常差';
				} else if ($scope.communication == 1) {
					return '比较差';
				} else if ($scope.communication == 2) {
					return '还行吧';
				} else if ($scope.communication == 3) {
					return '一般哦';
				} else if ($scope.communication == 4) {
					return '比较好';
				} else if ($scope.communication == 5) {
					return '非常好';
				} else {
					return '';
				}
			};

			//守时分
			$scope.punctuality = 5;
			$scope.setPunctuality = function(index) {
				if (index == $scope.punctuality) {
					index--;
				}
				$scope.punctuality = index;
			};
			$scope.getPunctualityTitle = function() {
				if ($scope.punctuality == 0) {
					return '非常差';
				} else if ($scope.punctuality == 1) {
					return '比较差';
				} else if ($scope.punctuality == 2) {
					return '还行吧';
				} else if ($scope.punctuality == 3) {
					return '一般哦';
				} else if ($scope.punctuality == 4) {
					return '比较好';
				} else if ($scope.punctuality == 5) {
					return '非常好';
				} else {
					return '';
				}
			};

			$scope.onsubmit = function() {
				if (!$scope.content || $scope.content.length == 0) {
					alert('评价内容不能为空');
					return;
				}

				var data = {
					user_id: $cookies.userid,
					order_id: orderId,
					content: $scope.content,
					professional: $scope.professional,
					communication: $scope.communication,
					punctuality: $scope.punctuality,
					score: $scope.score,
					token: $cookies.token
				};
				request.post('comment/submit', data).success(function(data) {
					alert('评价成功');
					$window.history.back();
				}).error(function(data) {
					alert(data.msg);
				});
			};
		}
	]).controller('CouponCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', 'pageSize', '$location',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, pageSize, $location) { //我的优惠劵
			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}
			$scope.isNoData = true;
			var start = 0;
			$scope.loadMore = 0;
			$scope.coupons = [];
			var loadData = function() {
				request.post('user/get_coupon_list', {
					user_id: $cookies.userid,
					token: $cookies.token,
					offset: start,
					size: pageSize,
					stat: $scope.stat
				}).success(function(data) {
					$scope.loadMore = data.data.is_more;
					data.data.coupon.forEach(function(a) {
						$scope.isNoData = false;
						start++;
						if (a.stat == '1') {
							a.bgindex = '1';
						} else {
							a.bgindex = '3';
						}
						a.amount = parseInt(a.amount);
						var category = a.category.split(",");
						var i = 0;
						for (; i < category.length; i++) {
							switch (category[i]) {
								case '1':
									category[i] = '美甲';
									break;
								case '2':
									category[i] = '美足';
									break;
								case '3':
									category[i] = '美睫';
									break;
								case '4':
									category[i] = '脱毛';
									break;
								case '5':
									category[i] = '护理';
									break;
								case '6':
									category[i] = '美发';
									break;
								case '7':
									category[i] = '美妆';
									break;
								case '0':
									category[i] = '全场适用';
									break;
							}
						}
						a.category = category.join();
						$scope.coupons.push(a);
					});
				});
			}

			$scope.setStat = function(index) {
				$scope.isNoData = true;
				$scope.stat = index;
				$scope.coupons = [];
				$scope.loadMore = 0;
				start = 0;
				loadData();
			}

			$scope.loadmoreHandler = function() {
				loadData();
			}

			$scope.setStat(12); //未使用

			$scope.exchangeShow = false;
			$scope.exchangeFail = function() {
				$scope.exchangeShow = false;
			};
			$scope.exchangeSure = function() {
				$scope.exchangeShow = false;
				if ($scope.exchange == '') {
					alert('兑换码不能为空');
					return;
				}

				request.post('user/cdkey', {
					user_id: $cookies.userid,
					token: $cookies.token,
					cdkey: $scope.exchange
				}).success(function(data) {
					alert('兑换成功');
					$scope.setStat($scope.stat);
					$scope.exchange = '';
				}).error(function(data) {
					alert(data.msg);
					$scope.exchange = '';
				});
			};
		}
	]).controller('CollectCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', 'pageSize', '$location', 'Tool',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, pageSize, $location, tool) { //我的收藏

			if (!$cookies.token || !$cookies.userid) {
				$rootScope.goLogin(true);
				return;
			}

			$scope.isNoData = true;
			var start = 0;
			$scope.loadMore = 0;
			$scope.datas = [];
			var loadData = function() {
				if ($scope.type == 0) {
					request.post('user/get_fav_artisan_list', {
						user_id: $cookies.userid,
						token: $cookies.token,
						offset: start,
						size: pageSize
					}).success(function(data) {
						$scope.loadMore = data.data.is_more;
						data.data.artisan.forEach(function(a) {
							start++;
							a.level = tool.getLevel(a.score);
							a.levelType = tool.getLevelType(a.score);
							$scope.datas.push(a);
							$scope.isNoData = false;
						});
					});
				} else {
					request.post('user/get_fav_product_list', {
						user_id: $cookies.userid,
						token: $cookies.token,
						offset: start,
						size: pageSize
					}).success(function(data) {
						$scope.loadMore = data.data.is_more;
						data.data.product.forEach(function(a) {
							a.className = start % 2 == 0 ? 'li_left' : 'li_right';
							start++;
							$scope.datas.push(a);
							$scope.isNoData = false;
							//收藏这里 如果是通用作品那就要补回aritisanId 换0
							console.log(a.artisan_id);
							request.post('product/get_product_detail', {
								artisan_id: "0",
								user_id: $cookies.userid,
								token: $cookies.token,
								latitude: $cookies.latitude,
								longitude: $cookies.longitude,
								product_id: a.product_id,
								ver: "3.3.2",
								city: $cookies.cityCode,
							}).success(function(data) {
								console.log(data.data.product_type);
								//如果artisanid为0并且product_type为2则为通用作品 则artisanid交付一个推荐的技师Id suggest_artisan_id
								if (data.data.product_type == 2) {
									a.artisan_id = data.data.suggest_artisan_id;
								}
							});
						});
					});
				}
			}

			$scope.setType = function(index) {
				$scope.isNoData = true;
				$scope.type = index;
				$rootScope.collectType = index;
				$scope.datas = [];
				$scope.loadMore = 0;
				start = 0;
				loadData();
			}

			$scope.loadmoreHandler = function() {
				loadData();
			}

			if (angular.isDefined($rootScope.collectType)) {
				$scope.setType($rootScope.collectType);
			} else {
				$scope.setType(0);
			}

		}
	]).controller('AddressSearchCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', 'pageSize', '$interval',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, pageSize, $interval) { //地址搜索
			$scope.keywordFocus = false;
			$interval(function() {
				$scope.keywordFocus = !$scope.keywordFocus;
			}, 1500, 1);
			var map = new BMap.Map("allmap");
			map.centerAndZoom(new BMap.Point($cookies.longitude, $cookies.latitude), 11);
			$scope.searchs = [];
			$scope.change = function() {
				//~ alert($scope.keyword);
				// 百度地图API功能
				$scope.searchs = [];
				if ($scope.keyword == '') {
					return;
				}
				var options = {
					onSearchComplete: function(results) {
						// 判断状态是否正确
						if (local.getStatus() == BMAP_STATUS_SUCCESS) {
							$scope.$apply(function() {
								var s = [];
								for (var i = 0; i < results.getCurrentNumPois(); i++) {
									var result = results.getPoi(i);
									var obj = {
										title: result.title,
										address: result.address,
										lat: result.point.lat,
										lng: result.point.lng
									};
									s.push(obj);
									//~ alert(angular.toJson(results.getPoi(i)));
								}
								$scope.searchs = s;
								console.log(angular.toJson($scope.searchs));
							});
						} else {
							console.log('error');
						}
					}
				};
				var local = new BMap.LocalSearch(map, options);
				local.search($scope.keyword);
			};
			$scope.itemSelect = function(index) {
				$rootScope.address = $scope.searchs[index];
				$rootScope.addressSearch = $scope.searchs[index];
				console.log($rootScope.address);
				console.log($scope.keyword);
				$window.history.back();
			}
		}
	]).controller('CityCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', '$cookieStore',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, $cookieStore) { //城市定位
			$scope.locationCity = $cookies.city;
			$scope.citys = [];
			//~ alert(angular.toJson($cookies));
			request.post('service/get_city_list').success(function(data) {
				data.data.city.forEach(function(city) {
					$scope.citys.push(city);
				});
			}).error(function(data) {
				alert(data.msg);
			});

			$scope.select = function(index) {
				var city = $scope.citys[index];
				$cookies.city = city.name;
				$cookies.cityCode = city.code;
				$scope.locationCity = city.name;
			}
		}
	]).controller('SecurityCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', '$cookieStore',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, $cookieStore) { //安全认证
			request.post('artisan/certificate', {
				artisan_id: $routeParams.designerId
			}).success(function(data) {
				$scope.certificate = data.data;
			});
		}
	]).controller('CreditCtrl', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', '$cookieStore',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, $cookieStore) { //信用等级

		}
	]).controller('ShopDetail', ['$rootScope', '$scope', 'Request', '$cookies', '$window', '$routeParams', '$cookieStore',
		function($rootScope, $scope, request, $cookies, $window, $routeParams, $cookieStore) { //店铺详情
			var load = function() {
				request.post('shop/get_shop_detail', {
					shop_id: $routeParams.shopId,
					ver: '3.0'
				}).success(function(data) {
					console.log(data);
					$scope.shop = data.data;
				}).error(function(data) {

				});
			};
			load();
		}
	]),
	angular.module('papabearApp').directive('zmFooter',
		function() {
			return {
				scope: {
					hideThis: '@'
				},
				controller: ['$scope', '$timeout', '$rootScope', '$route', '$location',
					function(a, b, c, $route, $location) {
						a.items = [];
						var loadData = function() {
							a.items = [];
							a.items.push({
								title: '选' + four + '师',
								link: '/index',
								'imgtag': '26'
							});
							/*a.items.push({
							    title: '选作品',
							    link: '/product',
							    'imgtag': '29'
							});*/
							a.items.push({
								title: '个人中心',
								link: '/home',
								'imgtag': '31'
							});
						};
						loadData();
						var d;
						a.changeStage = function(b) {
								a.currentIndex = b
							},
							c.$on('refreshFooter', function(b, c) {
								loadData();
							});
						c.$on('$routeChangeSuccess',
								function(b, c) {
									d = angular.isDefined(c.depth) ? c.depth : '',
										a.currentIndex = d
								}),
							a.url = function() {
								return $location.url();
							};
					}
				],
				template: '<a href="#{{item.link}}" ng-repeat="item in items"  ng-click="changeStage($index)"><div class="ft-part" ng-class="{current:url()==item.link}"><img ng-src="images/pp_{{item.imgtag}}.png" alt="" class="pic01"><img ng-src="images/bb_26.png" alt="" class="pic02"><br/><em>{{item.title}}</em></div>',
				//template: '<a href="#{{item.link}}" ng-repeat="item in items"  ng-click="changeStage($index)"><div class="ft-part" ng-class="{current:url()==item.link}"><img ng-src="images/pp_{{item.imgtag}}.png" alt="" class="pic01"><img ng-src="images/bb_26.png" alt="" class="pic02"><br/><em>选' + four + '师</em></div>',
				link: function(a, b) {
					a.$watch('hideThis',
						function(a) {
							'true' === a ? b.css('visibility', 'hidden') : b.css('visibility', 'visible')
						})
				}
			}
		}).directive('zmScroll', [
		'$rootScope',
		'Util',
		function(a, b) {
			return {
				restrict: 'A',
				replace: !0,
				transclude: !0,
				template: '<div class="scrollWrapper"><div class="scroll"><div ng-transclude></div></div></div>',
				link: function(a, c, d) {
					{
						var e = 'true' == d.srcrollRef,
							f = 'true' == d.scrollLazyload,
							g = null;
						c[0].querySelector('.loading')
					}
					a.loading = !1,
						a.hasMore = !0;
					var h = function() {
						var c = b.getWidth_height();
						console.log(c);
						//~ e && c.scrollTop + c.clientHeight + 100 >= c.scrollHeight && a.$broadcast('loadmore'),
						f && a.$broadcast('loadImg', c);
					};
					window.onscroll = e || f ? function() {
						g && clearTimeout(g),
							a.hasMore && !a.loading && (g = setTimeout(function() {
								h()
							}, 1000))
					} : null;
					var i;
					'true' === d.noBottom && c.addClass('noBottom'),
						window.addEventListener('resize', function() {
							i && clearTimeout(i),
								i = setTimeout(function() {
									//~ a.$broadcast('resize')
								}, 500)
						})
				}
			}
		}
	]).directive('lazyloadSrc', [
		'Util',
		function(a) {
			return {
				restrict: 'AE',
				compile: function() {
					var b = function(a, b, c, d) {
						if (!b.hasClass('lazyload') && !b.data('loaded')) {
							//~ b.style.textAlign = 'center';
							var loadimg = new Image;
							loadimg.src = './images/loading.png';
							loadimg.style.height = 100 + "%";
							loadimg.style.width = 100 + "%";
							loadimg.style.maxHeight = 200 + 'px';
							b.html('');
							b.append(loadimg);
						}
						if (!b.data('loaded') && !b.hasClass('show')) {
							var e = b[0].getBoundingClientRect();
							if (e.top > 0 && e.bottom < d.clientHeight + 150) {
								var f = new Image;
								f.onload = function() {
										b.data('loaded', !0);
										f.style.height = 100 + "%";
										f.style.width = 100 + "%";
										b.html('');
										b.append(f);
										b.addClass('show');
										b.removeClass('lazyload');
									},
									f.onerror = function() {
										f.src = './images/default_avatar.jpg';
										b.html('');
										b.removeClass('lazyload');
										b.data('loaded', !1);
										b.removeClass('show');
									};
								if (c.lazyloadSrc == "") {
									f.src = './images/default_avatar.jpg';
								} else {
									f.src = c.lazyloadSrc;
								}

							}
						}
					};
					return function(c, d, e) {
						b(c, d, e, a.getWidth_height()),
							c.$on('loadImg', function(a, f) {
								b(c, d, e, f)
							})
					}
				}
			}
		}
	]).directive('autoFocusWhen', ['$log', '$timeout',
		function($log, $timeout) {
			return {
				restrict: 'A',
				scope: {
					autoFocusWhen: '='
				},
				link: function(scope, element) {
					scope.$watch('autoFocusWhen', function(newValue) {
						if (newValue) {
							$timeout(function() {
								var oInput = document.getElementById("keyword");
								oInput.focus();
							})
						}
					});

					//~ element.on('blur', function() {
					//~ scope.$apply(function() {
					//~ scope.autoFocusWhen = false;
					//~ })
					//~ })
				}
			};
		}
	]).directive('autoConfirm', ['$log', '$timeout', '$rootScope',
		function($log, $timeout, $rootScope) {
			return {
				restrict: 'A',
				scope: {
					autoConfirm: '='
				},
				link: function(scope, element) {
					scope.$watch('autoConfirm', function(newValue) {
						if (!newValue) {
							element[0].style.display = 'none';
						} else {
							element[0].style.display = '';
						}
					});

					$rootScope.autoConfirmFail = function() {
						element[0].style.display = 'none';
						$rootScope.isShowAutoConfirm = false;
					}

					$rootScope.autoConfirmSure = function(func) {
						element[0].style.display = 'none';
						$rootScope.isShowAutoConfirm = false;
						if (angular.isDefined(func)) {
							func();
						}
					}
				}
			};
		}
	]).directive('autoAlert', ['$log', '$timeout', '$rootScope',
		function($log, $timeout, $rootScope) {
			return {
				restrict: 'A',
				scope: {
					autoAlert: '='
				},
				link: function(scope, element) {
					scope.$watch('autoAlert', function(newValue) {
						if (!newValue) {
							element.addClass('ng-hide');
						} else {
							element.removeClass('ng-hide');
						}
					});

					$rootScope.autoAlertFail = function() {
						element.addClass('ng-hide');
						$rootScope.isShowAutoAlert = false;
					}

					$rootScope.autoAlertSure = function(func) {
						element.addClass('ng-hide');
						$rootScope.isShowAutoAlert = false;
						if (angular.isDefined(func)) {
							func();
						}
					}
				}
			};
		}
	]).directive('containerBackground', function() {
		return {
			//待测试组件部分
			restrict: 'EA',
			scope: {
				title: '=expanderTitle'
			},
			template: '<div>123</div>',
			transclude: true,
			link: function(scope, element, attrs) {
				scope.showMe = false;
				scope.toggle = function toggle() {
					scope.showMe = !scope.showMe;
				}
				angular.element(document.querySelector('div')).addClass('we');
			}
		}
	});
angular.module('papabearApp').service('Position', [
	'Request',
	'$cookies',
	'$window',
	'$rootScope',
	function(request, $cookies, $window, $rootScope) {
		var a = {
			info: function() {
				//~ alert(angular.toJson($cookies));
				if (!$cookies.longitude || !$cookies.latitude || !$cookies.city || !$cookies.cityCode) {
					return false;
				} else {
					//~ alert(angular.toJson($cookies));
					return {
						lon: $cookies.longitude,
						lat: $cookies.latitude,
						city: $cookies.city,
						cityCode: $cookies.cityCode
					};
				}
			},
			getPosition: function() {
				if (!$cookies.citylist) {
					request.post('service/get_city_list').success(function(data) {
						console.log(angular.toJson(data));
						$cookies.citylist = angular.toJson(data.data.city);
						$window.location.reload();
					}).error(function(data) {
						alert(data.msg);
					});
					return;
				}
				if (!$cookies.longitude || !$cookies.latitude || !$cookies.city || !$cookies.cityCode) {
					$rootScope.dataLoadCount++;
					$rootScope.isLoading = $rootScope.dataLoadCount != 0;
					var geolocation = new BMap.Geolocation();
					geolocation.getCurrentPosition(function(r) {
						$rootScope.dataLoadCount--;
						$rootScope.isLoading = $rootScope.dataLoadCount != 0;
						var setCookie = function(name, value) {
							var Days = 30;
							var exp = new Date();
							exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
							document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();


						};
						if (this.getStatus() == BMAP_STATUS_SUCCESS) {
							console.log('定位信息：' + angular.toJson(r.point));
							console.log('定位信息：' + angular.toJson(r.address));
							//~ alert('定位信息：'+angular.toJson(r.point));
							//~ alert('定位信息：'+angular.toJson(r.address));
							setCookie("longitude", r.point.lng);
							setCookie("latitude", r.point.lat);
							//~ alert(angular.toJson(r));
							var cityList = angular.fromJson($cookies.citylist);
							var cityName;
							var cityCode;
							for (var i = 0; i < cityList.length; i++) {
								var city = cityList[i];
								if (i == 0) {
									cityName = city.name;
									cityCode = city.code;
								}
								if (city.name == r.address.city) {
									cityName = city.name;
									cityCode = city.code;
									break;
								}
							}
							setCookie("city", cityName);
							setCookie("cityCode", cityCode);
							window.location.reload();
						} else {
							var cityList = angular.fromJson($cookies.citylist);
							var city = cityList[0];
							setCookie("longitude", city.longitude);
							setCookie("latitude", city.latitude);
							setCookie("city", city.name);
							setCookie("cityCode", city.code);
							alert('定位失败');
							$window.location.reload();
						}
					}, {
						enableHighAccuracy: true
					});
				}
			},
			cityList: function() {
				if ($cookies.citylist) {
					return angular.fromJson($cookies.citylist);
				} else {
					return null;
				}
			},
			setCookie: function(data) {
				$cookies.longitude = data.lon;
				$cookies.latitude = data.lat;
				$cookies.city = data.city;
				$cookies.cityCode = data.cityCode;
			}
		};

		return a;
	}
]).service('Tool', [

	function() {
		var obj = {
			getLevel: function(score) {
				var mScore = score;
				var mLevel = 0;
				if (mScore < 2) {
					mLevel = 1;
				} else if (2 <= mScore && mScore <= 3) {
					mLevel = 2;
				} else if (4 <= mScore && mScore <= 8) {
					mLevel = 3;
				} else if (9 <= mScore && mScore <= 14) {
					mLevel = 4;
				} else if (15 <= mScore && mScore <= 30) {
					mLevel = 5;
				} else if (31 <= mScore && mScore <= 57) {
					mLevel = 1;
				} else if (58 <= mScore && mScore <= 93) {
					mLevel = 2;
				} else if (94 <= mScore && mScore <= 146) {
					mLevel = 3;
				} else if (147 <= mScore && mScore <= 210) {
					mLevel = 4;
				} else if (211 <= mScore && mScore <= 285) {
					mLevel = 5;
				} else if (286 <= mScore && mScore <= 384) {
					mLevel = 1;
				} else if (385 <= mScore && mScore <= 507) {
					mLevel = 2;
				} else if (508 <= mScore && mScore <= 655) {
					mLevel = 3;
				} else if (656 <= mScore && mScore <= 828) {
					mLevel = 4;
				} else if (829 <= mScore && mScore <= 1025) {
					mLevel = 5;
				} else if (1026 <= mScore && mScore <= 1306) {
					mLevel = 1;
				} else if (1307 <= mScore && mScore <= 1643) {
					mLevel = 2;
				} else if (1644 <= mScore && mScore <= 2036) {
					mLevel = 3;
				} else if (2037 <= mScore && mScore <= 2485) {
					mLevel = 4;
				} else if (2486 <= mScore && mScore <= 2990) {
					mLevel = 5;
				} else if (2991 <= mScore && mScore <= 3607) {
					mLevel = 1;
				} else if (3608 <= mScore && mScore <= 4336) {
					mLevel = 2;
				} else if (4337 <= mScore && mScore <= 5177) {
					mLevel = 3;
				} else if (5178 <= mScore && mScore <= 6130) {
					mLevel = 4;
				} else if (6131 <= mScore && mScore <= 7195) {
					mLevel = 5;
				} else if (mScore >= 7196) {
					mLevel = 5;
				}

				return mLevel;
			},
			getLevelType: function(score) {
				/*if (score <= 30) return 0;

				if (score <= 285) return 1;

				if (score <= 1025) return 2;

				if (score <= 2990) return 3;

				if (score > 2990) return 4;*/

				return 0;
			},
			imgPreview: function(current, urls) {
				if (!current) {
					current = '';
				}
				if (!urls) {
					urls = [];
				}
				wx.previewImage({
					current: current, // 当前显示的图片链接
					urls: urls // 需要预览的图片链接列表
				});
			}
		};

		return obj;
	}
]).service('Request', [
	'$http',
	'$cookies',
	'$rootScope',
	'$window',
	'$cookieStore',
	'$location',
	function($http, $cookies, $rootScope, $window, $cookieStore, $location) {
		var request = {
			post: function(api, map, successCallback) {
				$rootScope.dataLoadCount++;
				$rootScope.isLoading = $rootScope.dataLoadCount != 0;
				var url = '../turn.php?api=' + encodeURIComponent(api);
				console.log('[http requestURL]:' + api);
				//~ alert(api);
				var json = '{}';
				if (angular.isDefined(map)) {
					json = angular.toJson(map);
				}

				console.log('[http requestJson]:' + json);

				url += '&data=' + encodeURIComponent(json);
				var errorCallback = {
					error: function(f) {
						this.fun = f;
					},
					fun: function(data) {}
				};
				var successCallback = {
					success: function(f) {
						return this.fun = f, errorCallback;
					},
					fun: function(data) {}
				};
				$http.get(url).success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					$rootScope.dataLoadCount--;
					$rootScope.isLoading = $rootScope.dataLoadCount != 0;

					console.log('[http success responseData]:' + angular.toJson(data));
					//~ alert('[http success responseData]:'+angular.toJson(data));
					var returnData = {
						code: data.state.code,
						msg: data.state.msg,
						data: data.data
					};
					if (returnData.code == 1) {
						successCallback.fun(returnData);
					} else {
						if (returnData.code == 99) {
							alert(returnData.msg);
							$cookieStore.remove('token');
							$cookieStore.remove('userid');
							delete $cookies.token;
							delete $cookies.userid;
							$rootScope.isLogined = false;
							$rootScope.$broadcast('refreshFooter');

							$location.path('login');

							return;
						}
						errorCallback.fun(returnData);
					}
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					$rootScope.dataLoadCount--;
					$rootScope.isLoading = $rootScope.dataLoadCount != 0;

					console.log('[http error responseData]:' + angular.toJson(data));
					//~ alert('[http error responseData]:status:'+status);
					var returnData = {
						code: 0,
						msg: '网络请求失败',
						data: {}
					};
					errorCallback.fun(returnData);
				});

				return successCallback;
			},
			get: function(url, successCallback) {
				$rootScope.dataLoadCount++;
				$rootScope.isLoading = $rootScope.dataLoadCount != 0;
				var errorCallback = {
					error: function(f) {
						this.fun = f;
					},
					fun: function(data) {}
				};
				var successCallback = {
					success: function(f) {
						return this.fun = f, errorCallback;
					},
					fun: function(data) {}
				};
				$http({
					method: 'GET',
					url: url
				}).success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					$rootScope.dataLoadCount--;
					$rootScope.isLoading = $rootScope.dataLoadCount != 0;

					console.log('[http success responseData]:' + data);
					var returnData = {
						code: 1,
						msg: '请求成功',
						data: data
					};
					successCallback.fun(data);
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					$rootScope.dataLoadCount--;
					$rootScope.isLoading = $rootScope.dataLoadCount != 0;
					console.log('[http error responseData]:' + angular.toJson(data));
					var returnData = {
						code: 0,
						msg: '网络请求失败',
						data: ""
					};
					errorCallback.fun(returnData);
				});
				return successCallback;
			}
		}
		return request;
	}
]), angular.module('papabearApp').factory('Util', [

	function() {
		function a(a) {
			return d || (d = angular.element(document.createElement('div'))),
				angular.element(document.getElementsByTagName('body')).append(d),
				d.attr('class', 'mask'),
				a && setTimeout(function() {
					d.on('click', c)
				}, 600),
				d
		}

		function b() {
			var a = 0,
				b = 0,
				c = 0;
			return document.documentElement && document.documentElement.scrollTop ? a = document.documentElement.scrollTop : document.body && (a = document.body.scrollTop),
				b = document.body.clientHeight && document.documentElement.clientHeight ? document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight : document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight,
				c = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), {
					scrollTop: a,
					clientHeight: b,
					scrollHeight: c
				}
		}

		function c() {
			d && (d.off('click', c), d.html('').remove())
		}
		var d;
		return {
			time2day: function(a) {
				var b = new Date(a);
				return {
					year: b.getFullYear(),
					mon: b.getMonth() + 1 < 10 ? '0' + (b.getMonth() + 1) : b.getMonth() + 1,
					day: b.getDate() < 10 ? '0' + b.getDate() : b.getDate(),
					hour: b.getHours() < 10 ? '0' + b.getHours() : b.getHours(),
					min: b.getMinutes() < 10 ? '0' + b.getMinutes() : b.getMinutes()
				}
			},
			showGuide: function(b) {
				var c = window.localStorage.getItem(b);
				c || (window.localStorage.setItem(b, !0), a(!0).addClass(b))
			},
			showBigImg: function() {
				return a(!0)
			},
			isIOS7: function() {
				var a = window.navigator.userAgent;
				return /iphone\s+os\s+7_?/gi.test(a)
			},
			showMsg: function() {
				a(!1)
			},
			removeMask: c,
			getWidth_height: b
		}
	}
]);