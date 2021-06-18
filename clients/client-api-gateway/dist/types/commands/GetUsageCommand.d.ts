import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetUsageRequest, Usage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetUsageCommandInput extends GetUsageRequest {}
export interface GetUsageCommandOutput extends Usage, __MetadataBearer {}
/**
 * <p>Gets the usage data of a usage plan in a specified time interval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageCommandInput} for command's `input` shape.
 * @see {@link GetUsageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUsageCommand extends $Command<
  GetUsageCommandInput,
  GetUsageCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetUsageCommandInput;
  constructor(input: GetUsageCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsageCommandInput, GetUsageCommandOutput>;
  private serialize;
  private deserialize;
}
