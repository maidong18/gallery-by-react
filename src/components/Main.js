//引入css
require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//引入图片
//let yeomanImage = require('../images/yeoman.png');
//获取图片相关的数据
let imageDatas =require('../data/imageDatas.json');

//利用自执行函数，将图片信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
   for(var i=0,j =imageDatasArr.length;i<j;i++){
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL=require('../images'+singleImageData.fileName);

        imageDatasArr[i]=singleImageData;
   }
    return imageDatasArr;

})(imageDatas);


ImageDatas=genImageURL(imageDatas);

//定义组件
class AppComponent extends React.Component {
  render() {
    return (
     <section className="stage">
         <section className="img-sec">
              </section>
              <nav className="controller-nav">

              </nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {
};


//暴露组件
export default AppComponent;
