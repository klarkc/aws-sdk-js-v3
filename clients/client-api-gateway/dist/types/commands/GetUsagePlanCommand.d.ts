import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetUsagePlanRequest, UsagePlan } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetUsagePlanCommandInput extends GetUsagePlanRequest {}
export interface GetUsagePlanCommandOutput extends UsagePlan, __MetadataBearer {}
/**
 * <p>Gets a usage plan of a given plan identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsagePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsagePlanCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlanCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUsagePlanCommand extends $Command<
  GetUsagePlanCommandInput,
  GetUsagePlanCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetUsagePlanCommandInput;
  constructor(input: GetUsagePlanCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsagePlanCommandInput, GetUsagePlanCommandOutput>;
  private serialize;
  private deserialize;
}
