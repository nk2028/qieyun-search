import React, { Component } from "react";

import BookImage from "./bookImage";

export default class RhymeTable extends Component {
  render() {
    const {
      韻圖出處: {
        資料名稱,
        韻圖韻,
        韻圖開合修正後,
        韻圖母位置,
        韻圖母,
        韻圖等,
        韻圖聲,
        對應韻圖字頭,
        縮略圖,
        書影,
      },
    } = this.props;

    return (
      <div className="row padding-vertical">
        <div className="col-md-12 col-lg-6 col-xl-7 paragraph-condensed">
          <p>
            <b>資料名稱：</b>
            {資料名稱}
          </p>
          <p>
            <b>韻圖韻：</b>
            {韻圖韻}
          </p>
          <p>
            <b>韻圖開合（修正後）：</b>
            {韻圖開合修正後 || "無需指定開合"}
          </p>
          <p>
            <b>韻圖母：</b>
            {韻圖母位置}（{韻圖母}母）
          </p>
          <p>
            <b>韻圖等：</b>
            {韻圖等}
          </p>
          <p>
            <b>韻圖聲：</b>
            {韻圖聲}
          </p>
          <p>
            <b>對應韻圖字頭：</b>
            {對應韻圖字頭}
          </p>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-5">
          <BookImage
            thumbUrl={縮略圖}
            imageUrl={書影}
            title={資料名稱 + "書影"}
          />
        </div>
      </div>
    );
  }
}
