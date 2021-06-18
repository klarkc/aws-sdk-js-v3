import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DeleteUsagePlanKeyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteUsagePlanKeyCommandInput extends DeleteUsagePlanKeyRequest {}
export interface DeleteUsagePlanKeyCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes a usage plan key  and remove the underlying API key from the associated usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteUsagePlanKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUsagePlanKeyCommand extends $Command<
  DeleteUsagePlanKeyCommandInput,
  DeleteUsagePlanKeyCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: DeleteUsagePlanKeyCommandInput;
  constructor(input: DeleteUsagePlanKeyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUsagePlanKeyCommandInput, DeleteUsagePlanKeyCommandOutput>;
  private serialize;
  private deserialize;
}
