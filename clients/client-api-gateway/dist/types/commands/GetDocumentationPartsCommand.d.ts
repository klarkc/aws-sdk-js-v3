import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DocumentationParts, GetDocumentationPartsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetDocumentationPartsCommandInput extends GetDocumentationPartsRequest {}
export interface GetDocumentationPartsCommandOutput extends DocumentationParts, __MetadataBearer {}
export declare class GetDocumentationPartsCommand extends $Command<
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetDocumentationPartsCommandInput;
  constructor(input: GetDocumentationPartsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentationPartsCommandInput, GetDocumentationPartsCommandOutput>;
  private serialize;
  private deserialize;
}
