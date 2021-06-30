import { Component } from '@angular/core';
import { ConfigInterface, DownloadModeEnum, TreeModel } from 'ng6-file-man';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  tree: TreeModel;
  appLanguage = 'sk';

  constructor() {
    const treeConfig: ConfigInterface = {
      baseURL: 'http://localhost:8080/',
      api: {
        listFile: 'api/list',
        uploadFile: 'api/upload',
        downloadFile: 'api/download',
        deleteFile: 'api/remove',
        createFolder: 'api/directory',
        renameFile: 'api/rename',
        searchFiles: 'api/search'
      },
      options: {
        allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES,
        showFilesInsideTree: false
      }
    };

    this.tree = new TreeModel(treeConfig);
  }

  // noinspection JSUnusedLocalSymbols
  // noinspection JSMethodCanBeStatic
  itemClicked(event: any) {
    console.log(event);
  }
}
