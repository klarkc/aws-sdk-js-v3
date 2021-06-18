import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetUsagePlansRequest, UsagePlans } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetUsagePlansCommandInput extends GetUsagePlansRequest {}
export interface GetUsagePlansCommandOutput extends UsagePlans, __MetadataBearer {}
/**
 * <p>Gets all the usage plans of the caller's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlansCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlansCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsagePlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsagePlansCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlansCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUsagePlansCommand extends $Command<
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetUsagePlansCommandInput;
  constructor(input: GetUsagePlansCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsagePlansCommandInput, GetUsagePlansCommandOutput>;
  private serialize;
  private deserialize;
}
