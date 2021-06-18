import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeGatewayRouteInput, DescribeGatewayRouteOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeGatewayRouteCommandInput extends DescribeGatewayRouteInput {}
export interface DescribeGatewayRouteCommandOutput extends DescribeGatewayRouteOutput, __MetadataBearer {}
/**
 * <p>Describes an existing gateway route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGatewayRouteCommand extends $Command<
  DescribeGatewayRouteCommandInput,
  DescribeGatewayRouteCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: DescribeGatewayRouteCommandInput;
  constructor(input: DescribeGatewayRouteCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGatewayRouteCommandInput, DescribeGatewayRouteCommandOutput>;
  private serialize;
  private deserialize;
}
