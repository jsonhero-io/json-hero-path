import { PathComponent } from './path-component';
import QueryResult from './query-result';

class StartPathComponent implements PathComponent {
  static fromString(string: string): StartPathComponent | null {
    if (string === '$') {
      return new StartPathComponent();
    }

    return null;
  }

  toString(): string {
    return '$';
  }

  query(objects: QueryResult[]): QueryResult[] {
    //we don't want to actually do anything, this is just a marker for the start
    return objects;
  }
}

export default StartPathComponent;