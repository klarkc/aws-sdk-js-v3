import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { CreateUsagePlanRequest, UsagePlan } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateUsagePlanCommandInput extends CreateUsagePlanRequest {}
export interface CreateUsagePlanCommandOutput extends UsagePlan, __MetadataBearer {}
/**
 * <p>Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateUsagePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsagePlanCommandInput} for command's `input` shape.
 * @see {@link CreateUsagePlanCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUsagePlanCommand extends $Command<
  CreateUsagePlanCommandInput,
  CreateUsagePlanCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: CreateUsagePlanCommandInput;
  constructor(input: CreateUsagePlanCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUsagePlanCommandInput, CreateUsagePlanCommandOutput>;
  private serialize;
  private deserialize;
}
