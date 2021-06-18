import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { BatchUpdateUserRequest, BatchUpdateUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchUpdateUserCommandInput extends BatchUpdateUserRequest {}
export interface BatchUpdateUserCommandOutput extends BatchUpdateUserResponse, __MetadataBearer {}
/**
 * <p>
 * Updates user details within the
 * <a>UpdateUserRequestItem</a>
 * object for up to 20 users for the specified Amazon Chime account.
 * Currently, only <code>LicenseType</code>
 * updates are supported for this action.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUpdateUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUpdateUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchUpdateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateUserCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchUpdateUserCommand extends $Command<
  BatchUpdateUserCommandInput,
  BatchUpdateUserCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: BatchUpdateUserCommandInput;
  constructor(input: BatchUpdateUserCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateUserCommandInput, BatchUpdateUserCommandOutput>;
  private serialize;
  private deserialize;
}
