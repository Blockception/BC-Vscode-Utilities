import { DiagnosticsBuilder } from "./Builder";

export interface DiagnosticContext<T> {
  Context: T;
  Builder: DiagnosticsBuilder;
}
