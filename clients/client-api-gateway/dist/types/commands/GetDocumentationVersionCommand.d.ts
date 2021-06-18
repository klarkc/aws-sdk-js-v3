import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DocumentationVersion, GetDocumentationVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetDocumentationVersionCommandInput extends GetDocumentationVersionRequest {}
export interface GetDocumentationVersionCommandOutput extends DocumentationVersion, __MetadataBearer {}
export declare class GetDocumentationVersionCommand extends $Command<
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetDocumentationVersionCommandInput;
  constructor(input: GetDocumentationVersionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentationVersionCommandInput, GetDocumentationVersionCommandOutput>;
  private serialize;
  private deserialize;
}
