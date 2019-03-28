// maskwindow/maskwindow.js
Page({

  /**
 * 页面的初始数据
 */
  data: {
    isMaskWindowShow: false,
    maskWindowList: ['时间太早', '时间太晚', '距离太远', '交通不方便', '其他（输入）', '没有原因'],
    selectIndex: -1,
    isMaskWindowInputShow: false,
    maskWindowInputValue: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 取消操作
   */
  cancel: function (text) {
    // 实际取消操作
  },

  /**
   * 页面取消按钮功能
   */
  cancelBtn: function (e) {
    this.showMaskWindow();
  },

  //弹框以外区域点击
  maskWindowBgClick: function (e) {
    this.dismissMaskWindow();
  },

  //弹窗区域点击事件
  clickTap: function (e) {

  },

  //切换选择项事件
  maskWindowTableSelect: function (e) {
    var index = e.currentTarget.dataset.windowIndex;
    this.setData({
      selectIndex: e.currentTarget.dataset.windowIndex,
      isMaskWindowInputShow: index == 4
    })
  },

  //输入框输入绑定事件
  maskWindowInput: function (e) {
    var value = e.detail.value;
    this.setData({
      maskWindowInputValue: value
    })
  },

  maskWindowOk: function (e) {
    var index = this.data.selectIndex;
    var text;
    if (index >= 0 && index < 4) {
      text = this.data.maskWindowList[index];
    } else if (index == 4) {
      text = this.data.maskWindowInputValue;
    } else {
      text = "";
    }
    this.cancel(text); // 真正的取消操作
    this.dismissMaskWindow();
  },

  maskWindowCancel: function (e) {
    this.dismissMaskWindow();
  },

  // 显示蒙版弹窗
  showMaskWindow: function () {
    this.setData({
      isMaskWindowShow: true,
      selectIndex: -1,
      isMaskWindowInputShow: false,
      maskWindowInputValue: ""
    })
  },

  // 隐藏蒙版窗体
  dismissMaskWindow: function () {
    this.setData({
      isMaskWindowShow: false,
      selectIndex: -1,
      isMaskWindowInputShow: false,
      maskWindowInputValue: ""
    })
  } 
})
