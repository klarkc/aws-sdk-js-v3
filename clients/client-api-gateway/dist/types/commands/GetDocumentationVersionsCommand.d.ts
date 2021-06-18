import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DocumentationVersions, GetDocumentationVersionsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetDocumentationVersionsCommandInput extends GetDocumentationVersionsRequest {}
export interface GetDocumentationVersionsCommandOutput extends DocumentationVersions, __MetadataBearer {}
export declare class GetDocumentationVersionsCommand extends $Command<
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetDocumentationVersionsCommandInput;
  constructor(input: GetDocumentationVersionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentationVersionsCommandInput, GetDocumentationVersionsCommandOutput>;
  private serialize;
  private deserialize;
}
