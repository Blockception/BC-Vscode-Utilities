import { Context } from "mocha";
import { CompletionBuilder } from "./Builder";

export interface CompletionContext<T> {
  Context: T;
  Builder: CompletionBuilder;
}
