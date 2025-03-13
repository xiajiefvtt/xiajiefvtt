import XiaJieFvttDataModel from "./base-model.mjs";

export default class XiaJieFvttItemBase extends XiaJieFvttDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}