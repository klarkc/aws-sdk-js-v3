import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { CreateUsagePlanKeyRequest, UsagePlanKey } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateUsagePlanKeyCommandInput extends CreateUsagePlanKeyRequest {}
export interface CreateUsagePlanKeyCommandOutput extends UsagePlanKey, __MetadataBearer {}
/**
 * <p>Creates a usage plan key for adding an existing API key to a usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link CreateUsagePlanKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUsagePlanKeyCommand extends $Command<
  CreateUsagePlanKeyCommandInput,
  CreateUsagePlanKeyCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: CreateUsagePlanKeyCommandInput;
  constructor(input: CreateUsagePlanKeyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUsagePlanKeyCommandInput, CreateUsagePlanKeyCommandOutput>;
  private serialize;
  private deserialize;
}
