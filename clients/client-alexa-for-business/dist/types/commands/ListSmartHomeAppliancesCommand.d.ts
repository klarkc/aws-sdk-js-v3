import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSmartHomeAppliancesRequest, ListSmartHomeAppliancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListSmartHomeAppliancesCommandInput extends ListSmartHomeAppliancesRequest {}
export interface ListSmartHomeAppliancesCommandOutput extends ListSmartHomeAppliancesResponse, __MetadataBearer {}
/**
 * <p>Lists all of the smart home appliances associated with a room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSmartHomeAppliancesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSmartHomeAppliancesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListSmartHomeAppliancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSmartHomeAppliancesCommandInput} for command's `input` shape.
 * @see {@link ListSmartHomeAppliancesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSmartHomeAppliancesCommand extends $Command<
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: ListSmartHomeAppliancesCommandInput;
  constructor(input: ListSmartHomeAppliancesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSmartHomeAppliancesCommandInput, ListSmartHomeAppliancesCommandOutput>;
  private serialize;
  private deserialize;
}
