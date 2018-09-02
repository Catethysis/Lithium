import React, { Component } from 'react';

import ContentPage1 from './page1';
import ContentPage2 from './page2';
import ContentPage3 from './page3';
import ContentPage4 from './page4';
import ContentPage5 from './page5';
import ContentPage6 from './page6';
import ContentPage7 from './page7';
import ContentPage8 from './page8';

export default class ContentPage extends Component {
  constructor() {
    super();
    this.ContentPages = [
      ContentPage1,
      ContentPage2,
      ContentPage3,
      ContentPage4,
      ContentPage5,
      ContentPage6,
      ContentPage7,
      ContentPage8];
  }
  render() {
    const TagName = this.ContentPages[this.props.page];
    return <TagName />
  }
}
