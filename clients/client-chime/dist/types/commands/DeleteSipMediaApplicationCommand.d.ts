import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DeleteSipMediaApplicationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteSipMediaApplicationCommandInput extends DeleteSipMediaApplicationRequest {}
export interface DeleteSipMediaApplicationCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes a SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteSipMediaApplicationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteSipMediaApplicationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSipMediaApplicationCommand extends $Command<
  DeleteSipMediaApplicationCommandInput,
  DeleteSipMediaApplicationCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: DeleteSipMediaApplicationCommandInput;
  constructor(input: DeleteSipMediaApplicationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSipMediaApplicationCommandInput, DeleteSipMediaApplicationCommandOutput>;
  private serialize;
  private deserialize;
}
