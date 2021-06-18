import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { RestApi, UpdateRestApiRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateRestApiCommandInput extends UpdateRestApiRequest {}
export interface UpdateRestApiCommandOutput extends RestApi, __MetadataBearer {}
/**
 * <p>Changes information about the specified API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRestApiCommandInput} for command's `input` shape.
 * @see {@link UpdateRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRestApiCommand extends $Command<
  UpdateRestApiCommandInput,
  UpdateRestApiCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: UpdateRestApiCommandInput;
  constructor(input: UpdateRestApiCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRestApiCommandInput, UpdateRestApiCommandOutput>;
  private serialize;
  private deserialize;
}
