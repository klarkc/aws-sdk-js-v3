import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { StopFleetRequest, StopFleetResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StopFleetCommandInput extends StopFleetRequest {}
export interface StopFleetCommandOutput extends StopFleetResult, __MetadataBearer {}
/**
 * <p>Stops the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StopFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StopFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new StopFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopFleetCommandInput} for command's `input` shape.
 * @see {@link StopFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopFleetCommand extends $Command<
  StopFleetCommandInput,
  StopFleetCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: StopFleetCommandInput;
  constructor(input: StopFleetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopFleetCommandInput, StopFleetCommandOutput>;
  private serialize;
  private deserialize;
}
