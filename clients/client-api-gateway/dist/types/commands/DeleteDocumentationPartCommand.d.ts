import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DeleteDocumentationPartRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteDocumentationPartCommandInput extends DeleteDocumentationPartRequest {}
export interface DeleteDocumentationPartCommandOutput extends __MetadataBearer {}
export declare class DeleteDocumentationPartCommand extends $Command<
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: DeleteDocumentationPartCommandInput;
  constructor(input: DeleteDocumentationPartCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDocumentationPartCommandInput, DeleteDocumentationPartCommandOutput>;
  private serialize;
  private deserialize;
}
