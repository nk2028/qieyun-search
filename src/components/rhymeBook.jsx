import React, { Component } from "react";
import BookImage from "./bookImage";

export default class RhymeBook extends Component {
  render() {
    const {
      韻書出處: { 資料名稱, 韻部原貌, 反切, 釋義, 釋義補充, 縮略圖, 書影 },
    } = this.props;

    return (
      <div className="row padding-vertical">
        <div className="col-md-12 col-lg-6 col-xl-7 paragraph-condensed">
          <p>
            <b>資料名稱：</b>
            {資料名稱}
          </p>
          <p>
            <b>韻部原貌：</b>
            {韻部原貌}
          </p>
          <p>
            <b>反切：</b>
            {反切}
          </p>
          <p>
            <b>釋義：</b>
            {釋義}
          </p>
          {釋義補充 && (
            <p>
              <b>釋義補充：</b>
              {釋義補充}
            </p>
          )}
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
