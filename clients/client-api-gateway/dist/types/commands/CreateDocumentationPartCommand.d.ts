import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { CreateDocumentationPartRequest, DocumentationPart } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateDocumentationPartCommandInput extends CreateDocumentationPartRequest {}
export interface CreateDocumentationPartCommandOutput extends DocumentationPart, __MetadataBearer {}
export declare class CreateDocumentationPartCommand extends $Command<
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: CreateDocumentationPartCommandInput;
  constructor(input: CreateDocumentationPartCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDocumentationPartCommandInput, CreateDocumentationPartCommandOutput>;
  private serialize;
  private deserialize;
}
