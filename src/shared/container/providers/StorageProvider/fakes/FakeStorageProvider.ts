import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private storage: string[] = [];

  public async save(file: string): Promise<string> {
    this.storage.push(file);
    return file;
  }

  public async delete(file: string): Promise<void> {
    const foundIndex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    this.storage.splice(foundIndex, 1);
  }
}

export default FakeStorageProvider;
