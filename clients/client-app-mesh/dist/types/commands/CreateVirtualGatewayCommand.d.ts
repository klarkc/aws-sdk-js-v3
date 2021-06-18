import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualGatewayInput, CreateVirtualGatewayOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateVirtualGatewayCommandInput extends CreateVirtualGatewayInput {}
export interface CreateVirtualGatewayCommandOutput extends CreateVirtualGatewayOutput, __MetadataBearer {}
/**
 * <p>Creates a virtual gateway.</p>
 *          <p>A virtual gateway allows resources outside your mesh to communicate to resources that
 *          are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS
 *          task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which
 *          represents an Envoy running with an application, a virtual gateway represents Envoy
 *          deployed by itself.</p>
 *          <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVirtualGatewayCommand extends $Command<
  CreateVirtualGatewayCommandInput,
  CreateVirtualGatewayCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: CreateVirtualGatewayCommandInput;
  constructor(input: CreateVirtualGatewayCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualGatewayCommandInput, CreateVirtualGatewayCommandOutput>;
  private serialize;
  private deserialize;
}
