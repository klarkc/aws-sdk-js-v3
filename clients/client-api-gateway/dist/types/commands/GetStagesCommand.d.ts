import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetStagesRequest, Stages } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetStagesCommandInput extends GetStagesRequest {}
export interface GetStagesCommandOutput extends Stages, __MetadataBearer {}
/**
 * <p>Gets information about one or more <a>Stage</a> resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetStagesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetStagesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetStagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStagesCommandInput} for command's `input` shape.
 * @see {@link GetStagesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStagesCommand extends $Command<
  GetStagesCommandInput,
  GetStagesCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetStagesCommandInput;
  constructor(input: GetStagesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStagesCommandInput, GetStagesCommandOutput>;
  private serialize;
  private deserialize;
}
