import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateGatewayGroupRequest, UpdateGatewayGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateGatewayGroupCommandInput extends UpdateGatewayGroupRequest {}
export interface UpdateGatewayGroupCommandOutput extends UpdateGatewayGroupResponse, __MetadataBearer {}
/**
 * <p>Updates the details of a gateway group. If any optional field is not provided, the
 *          existing corresponding value is left unmodified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateGatewayGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGatewayGroupCommand extends $Command<
  UpdateGatewayGroupCommandInput,
  UpdateGatewayGroupCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: UpdateGatewayGroupCommandInput;
  constructor(input: UpdateGatewayGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGatewayGroupCommandInput, UpdateGatewayGroupCommandOutput>;
  private serialize;
  private deserialize;
}
