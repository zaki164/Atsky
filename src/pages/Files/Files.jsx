import { faFilePdf, faFileWord, faImages } from "@fortawesome/free-regular-svg-icons";
import { faAnglesUp, faDownload, faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from '../../constants'
import "./Files.scss";

const Files = () => {
  return (
    <main className="Files">
      <h1>Files</h1>
      <div className="Files_content d-flex">
        <div className="wrapper flex-grow-1">
          {
            data.FilesData.map((file, i) =>
            (
              <section className="file position-relative" key={i} data-aos="fade-up">
                <FontAwesomeIcon icon={faDownload} className="position-absolute download" />
                <div className="head text-center">
                  <img src={file.img} alt="fileImg" />
                  <p className="fs_16 my-2">my-file.{file.extention}</p>
                  <p className="p_custom mb-0 text-start">{file.name}</p>
                </div>
                <div className="footer flex_between">
                  <span>{file.date}</span>
                  <span>{file.size}MB</span>
                </div>
              </section>
            ))
          }
        </div>
        <section className="stats" data-aos="fade-up">
          <h2>Files Statistics</h2>
          <ul className="flex-column">
            <li className="flex_between">
              <FontAwesomeIcon icon={faFilePdf} className="me-2 blue flex_center" fixedWidth />
              <div className="info flex-grow-1">
                <p className="fs_15 mb-0">PDF Files</p>
                <p className="p_custom mb-0">130 Files</p>
              </div>
              <span className="p_custom">6.5GB</span>
            </li>
            <li className="flex_between">
              <FontAwesomeIcon icon={faImages} className="me-2 green flex_center" fixedWidth />
              <div className="info flex-grow-1">
                <p className="fs_15 mb-0">Images Files</p>
                <p className="p_custom mb-0">115 Files</p>
              </div>
              <span className="p_custom">3.5GB</span>
            </li>
            <li className="flex_between">
              <FontAwesomeIcon icon={faFileWord} className="me-2 red flex_center" fixedWidth />
              <div className="info flex-grow-1">
                <p className="fs_15 mb-0">Word Files</p>
                <p className="p_custom mb-0">110 Files</p>
              </div>
              <span className="p_custom">3.2GB</span>
            </li>
            <li className="flex_between">
              <FontAwesomeIcon icon={faFileCsv} className="me-2 orange flex_center" fixedWidth />
              <div className="info flex-grow-1">
                <p className="fs_15 mb-0">CSV Files</p>
                <p className="p_custom mb-0">99 Files</p>
              </div>
              <span className="p_custom">2.9GB</span>
            </li>
          </ul>
          <span className="d-block m-auto upload custom_btn"><FontAwesomeIcon icon={faAnglesUp} className="me-3" />Upload</span>
        </section>
      </div>
    </main>
  )
}

export default Files