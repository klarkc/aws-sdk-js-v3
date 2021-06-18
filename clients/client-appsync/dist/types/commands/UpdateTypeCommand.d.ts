import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { UpdateTypeRequest, UpdateTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateTypeCommandInput extends UpdateTypeRequest {}
export interface UpdateTypeCommandOutput extends UpdateTypeResponse, __MetadataBearer {}
/**
 * <p>Updates a <code>Type</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateTypeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateTypeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateTypeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTypeCommand extends $Command<
  UpdateTypeCommandInput,
  UpdateTypeCommandOutput,
  AppSyncClientResolvedConfig
> {
  readonly input: UpdateTypeCommandInput;
  constructor(input: UpdateTypeCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTypeCommandInput, UpdateTypeCommandOutput>;
  private serialize;
  private deserialize;
}
