import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateGatewayRouteInput, CreateGatewayRouteOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateGatewayRouteCommandInput extends CreateGatewayRouteInput {}
export interface CreateGatewayRouteCommandOutput extends CreateGatewayRouteOutput, __MetadataBearer {}
/**
 * <p>Creates a gateway route.</p>
 *          <p>A gateway route is attached to a virtual gateway and routes traffic to an existing
 *          virtual service. If a route matches a request, it can distribute traffic to a target
 *          virtual service.</p>
 *          <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGatewayRouteCommand extends $Command<
  CreateGatewayRouteCommandInput,
  CreateGatewayRouteCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: CreateGatewayRouteCommandInput;
  constructor(input: CreateGatewayRouteCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGatewayRouteCommandInput, CreateGatewayRouteCommandOutput>;
  private serialize;
  private deserialize;
}
