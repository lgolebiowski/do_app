import React from 'react';
import './UploadImage.css';
import * as ReactBootstrap from 'react-bootstrap';
import UserOutput from '../UserOutput/UserOutput';


class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    alert('backend not ready yet..' + this.state.file);
  }

  _handleImageChange(e) {
    debugger;
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    

      if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (
    <img
      className="img_preview"
      src={require('../images/cieply_plakat_2.png')}
    />)
}
    return (
      <div className="previewComponent">
        <div className="row">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <div className="col-sm-6 col-xs-12">
              <label className="custom_file_upload">
              <input className="file_input" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
              <i className="custom_text_upload"></i> Custom Upload
              </label>
            </div>
            <div className="col-sm-6 col-xs-12">
            <button className="custom_file_upload" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>create hCard</button>
            </div>
          </form>
          
          <div className="img_preview">
            {$imagePreview}
          </div>

        </div>
      </div>
    )
  }
}
 

export default UploadImage;










