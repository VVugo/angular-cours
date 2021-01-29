export class Tags {
  name?: string;
  itinerance?: string;
  created: string;

  constructor(obj?: any) {
    this.name = 'name' in obj ? obj.name : '';
    this.itinerance = 'itinerance' in obj ? obj.itinerance : '';
    this.created = 'created' in obj ? obj.created : '';
  }
}
