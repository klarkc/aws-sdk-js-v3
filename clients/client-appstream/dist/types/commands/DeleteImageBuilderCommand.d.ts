import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteImageBuilderRequest, DeleteImageBuilderResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteImageBuilderCommandInput extends DeleteImageBuilderRequest {}
export interface DeleteImageBuilderCommandOutput extends DeleteImageBuilderResult, __MetadataBearer {}
/**
 * <p>Deletes the specified image builder and releases the capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DeleteImageBuilderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImageBuilderCommandInput} for command's `input` shape.
 * @see {@link DeleteImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteImageBuilderCommand extends $Command<
  DeleteImageBuilderCommandInput,
  DeleteImageBuilderCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: DeleteImageBuilderCommandInput;
  constructor(input: DeleteImageBuilderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteImageBuilderCommandInput, DeleteImageBuilderCommandOutput>;
  private serialize;
  private deserialize;
}
