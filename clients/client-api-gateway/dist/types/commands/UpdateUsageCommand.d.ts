import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { UpdateUsageRequest, Usage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateUsageCommandInput extends UpdateUsageRequest {}
export interface UpdateUsageCommandOutput extends Usage, __MetadataBearer {}
/**
 * <p>Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateUsageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateUsageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUsageCommandInput} for command's `input` shape.
 * @see {@link UpdateUsageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUsageCommand extends $Command<
  UpdateUsageCommandInput,
  UpdateUsageCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: UpdateUsageCommandInput;
  constructor(input: UpdateUsageCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUsageCommandInput, UpdateUsageCommandOutput>;
  private serialize;
  private deserialize;
}
