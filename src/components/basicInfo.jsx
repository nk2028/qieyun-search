import React, { Component } from "react";

import { 音韻地位 } from "qieyun";
import {
  baxter,
  blankego,
  kyonh,
  zyepheng,
  panwuyun,
  unt_j,
  msoeg_v8,
  chiangxhua,
  fanwan,
  putonghua,
  gwongzau,
} from "qieyun-examples";

import "./basicInfo.css";

export default class BasicInfo extends Component {
  render() {
    const { 描述 } = this.props;
    const 當前音韻地位 = 音韻地位.from描述(描述);
    return (
      <table className="table basic-info-table">
        <tbody>
          <tr>
            <th colSpan="2">切韻音系拼音或轉寫</th>
          </tr>
          <tr>
            <th>白一平轉寫</th>
            <td lang="ltc-Latn">{baxter(當前音韻地位)}</td>
          </tr>
          <tr>
            <th>有女羅馬字</th>
            <td lang="ltc-Latn">{blankego(當前音韻地位)}</td>
          </tr>
          <tr>
            <th>古韻羅馬字</th>
            <td lang="ltc-Latn">{kyonh(當前音韻地位)}</td>
          </tr>
          <tr>
            <th>隋拼</th>
            <td lang="ltc-Latn">{zyepheng(當前音韻地位)}</td>
          </tr>
          <tr>
            <th colSpan="2">切韻音系擬音</th>
          </tr>
          <tr>
            <th>潘悟雲擬音</th>
            <td lang="ltc-Latn">{panwuyun(當前音韻地位)}</td>
          </tr>
          <tr>
            <th>unt 切韻擬音 J</th>
            <td lang="ltc-Latn">{unt_j(當前音韻地位)}</td>
          </tr>
          <tr>
            <th>msoeg 中古拟音 V8</th>
            <td lang="ltc-Latn">{msoeg_v8(當前音韻地位)}</td>
          </tr>
          <tr>
            <th colSpan="2">推導後世音系</th>
          </tr>
          <tr>
            <th>推導《聲音唱和圖》擬音</th>
            <td lang="zh-Latn">{chiangxhua(當前音韻地位)}</td>
          </tr>
          <tr>
            <th>推導《分韻撮要》擬音</th>
            <td lang="zh-Latn">{fanwan(當前音韻地位)}</td>
          </tr>
          <tr>
            <th colSpan="2">推導今音</th>
          </tr>
          <tr>
            <th>推導普通話</th>
            <td lang="zh-Latn">{putonghua(當前音韻地位)}</td>
          </tr>
          <tr>
            <th>推導廣州音</th>
            <td lang="zh-Latn">{gwongzau(當前音韻地位)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
