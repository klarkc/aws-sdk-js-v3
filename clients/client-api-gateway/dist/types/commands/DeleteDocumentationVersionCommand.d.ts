import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DeleteDocumentationVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteDocumentationVersionCommandInput extends DeleteDocumentationVersionRequest {}
export interface DeleteDocumentationVersionCommandOutput extends __MetadataBearer {}
export declare class DeleteDocumentationVersionCommand extends $Command<
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: DeleteDocumentationVersionCommandInput;
  constructor(input: DeleteDocumentationVersionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDocumentationVersionCommandInput, DeleteDocumentationVersionCommandOutput>;
  private serialize;
  private deserialize;
}
