import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DocumentationPart, UpdateDocumentationPartRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateDocumentationPartCommandInput extends UpdateDocumentationPartRequest {}
export interface UpdateDocumentationPartCommandOutput extends DocumentationPart, __MetadataBearer {}
export declare class UpdateDocumentationPartCommand extends $Command<
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: UpdateDocumentationPartCommandInput;
  constructor(input: UpdateDocumentationPartCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentationPartCommandInput, UpdateDocumentationPartCommandOutput>;
  private serialize;
  private deserialize;
}
