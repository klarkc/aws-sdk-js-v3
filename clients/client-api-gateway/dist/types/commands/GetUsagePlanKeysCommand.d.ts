import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetUsagePlanKeysRequest, UsagePlanKeys } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetUsagePlanKeysCommandInput extends GetUsagePlanKeysRequest {}
export interface GetUsagePlanKeysCommandOutput extends UsagePlanKeys, __MetadataBearer {}
/**
 * <p>Gets all the usage plan keys representing the API keys added to a specified usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlanKeysCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlanKeysCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsagePlanKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsagePlanKeysCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlanKeysCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUsagePlanKeysCommand extends $Command<
  GetUsagePlanKeysCommandInput,
  GetUsagePlanKeysCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetUsagePlanKeysCommandInput;
  constructor(input: GetUsagePlanKeysCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsagePlanKeysCommandInput, GetUsagePlanKeysCommandOutput>;
  private serialize;
  private deserialize;
}
