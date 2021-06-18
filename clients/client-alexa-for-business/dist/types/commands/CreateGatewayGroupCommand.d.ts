import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateGatewayGroupRequest, CreateGatewayGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateGatewayGroupCommandInput extends CreateGatewayGroupRequest {}
export interface CreateGatewayGroupCommandOutput extends CreateGatewayGroupResponse, __MetadataBearer {}
/**
 * <p>Creates a gateway group with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateGatewayGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGatewayGroupCommand extends $Command<
  CreateGatewayGroupCommandInput,
  CreateGatewayGroupCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: CreateGatewayGroupCommandInput;
  constructor(input: CreateGatewayGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGatewayGroupCommandInput, CreateGatewayGroupCommandOutput>;
  private serialize;
  private deserialize;
}
