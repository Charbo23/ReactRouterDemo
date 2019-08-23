import React, { Component } from 'react';
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import {Row,Col} from 'antd';
// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        // {
        //   source: "index.html",
        //   options: {
        //     type: "local"
        //   }
        // }
      ],
      files2: [
        // {
        //   source: "index.html",
        //   options: {
        //     type: "local"
        //   }
        // }
      ]
    };
  }

  // handleInit() {
  //   console.log("FilePond instance has initialised", this.pond);
  // }

  render() {
    return (
      <Row type='flex' justify='space-around'>
        <Col  span={11}>
        {/* Pass FilePond properties as attributes */}
        <FilePond
          ref={ref => (this.pond = ref)}
          files={this.state.files}
          allowMultiple={true}
          maxFiles={3}
          server="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          // oninit={() => this.handleInit()}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
          }}
        />
        </Col>
        <Col  span={11}>
       <FilePond
          ref={ref => (this.pond2 = ref)}
          files={this.state.files2}
          allowMultiple={true}
          maxFiles={3}
          server="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          // oninit={() => this.handleInit()}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files2: fileItems.map(fileItem => fileItem.file)
            });
          }}
        />
         
        </Col>
      </Row>
    );
  }
}
export default FileUpload;