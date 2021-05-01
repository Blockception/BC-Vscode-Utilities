import { CompletionItem, CompletionItemKind, MarkupContent } from "vscode-languageserver-types";

/**An object that helps with creating completion items */
export class CompletionBuilder {
  public items: CompletionItem[];
  public OnNewItem: ((NewItem: CompletionItem) => void) | undefined;

  constructor() {
    this.items = [];
    this.OnNewItem = undefined;
  }

  /**Creates a new completion item
   * @param label
   * @param documentation
   * @param kind
   * @param insertText
   */
  Add(label: string, documentation: string | MarkupContent, kind: CompletionItemKind = CompletionItemKind.Keyword, insertText: string | undefined = undefined): CompletionItem {
    let item = CompletionItem.create(label);

    if (typeof documentation === "string") {
      item.documentation = { kind: "markdown", value: documentation };
    } else {
      item.documentation = documentation;
    }

    if (insertText) item.insertText = insertText;
    item.kind = kind;

    this.Push(item);

    return item;
  }

  /**Pushes the item onto the collection and raises a possible event
   * @param Item The item to add
   */
  Push(Item: CompletionItem): void {
    if (this.OnNewItem) {
      this.OnNewItem(Item);
    }

    this.items.push(Item);
  }
}
