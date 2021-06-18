import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DocumentationVersion, UpdateDocumentationVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateDocumentationVersionCommandInput extends UpdateDocumentationVersionRequest {}
export interface UpdateDocumentationVersionCommandOutput extends DocumentationVersion, __MetadataBearer {}
export declare class UpdateDocumentationVersionCommand extends $Command<
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: UpdateDocumentationVersionCommandInput;
  constructor(input: UpdateDocumentationVersionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentationVersionCommandInput, UpdateDocumentationVersionCommandOutput>;
  private serialize;
  private deserialize;
}
