import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteGatewayGroupRequest, DeleteGatewayGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteGatewayGroupCommandInput extends DeleteGatewayGroupRequest {}
export interface DeleteGatewayGroupCommandOutput extends DeleteGatewayGroupResponse, __MetadataBearer {}
/**
 * <p>Deletes a gateway group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteGatewayGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGatewayGroupCommand extends $Command<
  DeleteGatewayGroupCommandInput,
  DeleteGatewayGroupCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: DeleteGatewayGroupCommandInput;
  constructor(input: DeleteGatewayGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGatewayGroupCommandInput, DeleteGatewayGroupCommandOutput>;
  private serialize;
  private deserialize;
}
