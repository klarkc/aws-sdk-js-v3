import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualRouterInput, CreateVirtualRouterOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateVirtualRouterCommandInput extends CreateVirtualRouterInput {}
export interface CreateVirtualRouterCommandOutput extends CreateVirtualRouterOutput, __MetadataBearer {}
/**
 * <p>Creates a virtual router within a service mesh.</p>
 *          <p>Specify a <code>listener</code> for any inbound traffic that your virtual router
 *          receives. Create a virtual router for each protocol and port that you need to route.
 *          Virtual routers handle traffic for one or more virtual services within your mesh. After you
 *          create your virtual router, create and associate routes for your virtual router that direct
 *          incoming requests to different virtual nodes.</p>
 *          <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVirtualRouterCommand extends $Command<
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: CreateVirtualRouterCommandInput;
  constructor(input: CreateVirtualRouterCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualRouterCommandInput, CreateVirtualRouterCommandOutput>;
  private serialize;
  private deserialize;
}
