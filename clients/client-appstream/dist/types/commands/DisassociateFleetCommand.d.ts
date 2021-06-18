import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DisassociateFleetRequest, DisassociateFleetResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DisassociateFleetCommandInput extends DisassociateFleetRequest {}
export interface DisassociateFleetCommandOutput extends DisassociateFleetResult, __MetadataBearer {}
/**
 * <p>Disassociates the specified fleet from the specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DisassociateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFleetCommandInput} for command's `input` shape.
 * @see {@link DisassociateFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateFleetCommand extends $Command<
  DisassociateFleetCommandInput,
  DisassociateFleetCommandOutput,
  AppStreamClientResolvedConfig
> {
  readonly input: DisassociateFleetCommandInput;
  constructor(input: DisassociateFleetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateFleetCommandInput, DisassociateFleetCommandOutput>;
  private serialize;
  private deserialize;
}
