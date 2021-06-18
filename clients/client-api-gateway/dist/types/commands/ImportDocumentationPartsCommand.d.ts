import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DocumentationPartIds, ImportDocumentationPartsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ImportDocumentationPartsCommandInput extends ImportDocumentationPartsRequest {}
export interface ImportDocumentationPartsCommandOutput extends DocumentationPartIds, __MetadataBearer {}
export declare class ImportDocumentationPartsCommand extends $Command<
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: ImportDocumentationPartsCommandInput;
  constructor(input: ImportDocumentationPartsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportDocumentationPartsCommandInput, ImportDocumentationPartsCommandOutput>;
  private serialize;
  private deserialize;
}
