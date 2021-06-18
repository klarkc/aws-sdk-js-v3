import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { StartFleetRequest, StartFleetResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StartFleetCommandInput extends StartFleetRequest {}
export interface StartFleetCommandOutput extends StartFleetResult, __MetadataBearer {}
/**
 * <p>Starts the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StartFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StartFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new StartFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFleetCommandInput} for command's `input` shape.
 * @see {@link StartFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartFleetCommand extends $Command<
  StartFleetCommandInput,
  StartFleetCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: StartFleetCommandInput;
  constructor(input: StartFleetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartFleetCommandInput, StartFleetCommandOutput>;
  private serialize;
  private deserialize;
}
