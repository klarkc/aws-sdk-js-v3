import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateMeshInput, CreateMeshOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateMeshCommandInput extends CreateMeshInput {}
export interface CreateMeshCommandOutput extends CreateMeshOutput, __MetadataBearer {}
/**
 * <p>Creates a service mesh.</p>
 *          <p> A service mesh is a logical boundary for network traffic between services that are
 *          represented by resources within the mesh. After you create your service mesh, you can
 *          create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
 *          between the applications in your mesh.</p>
 *          <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMeshCommandInput} for command's `input` shape.
 * @see {@link CreateMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMeshCommand extends $Command<
  CreateMeshCommandInput,
  CreateMeshCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: CreateMeshCommandInput;
  constructor(input: CreateMeshCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMeshCommandInput, CreateMeshCommandOutput>;
  private serialize;
  private deserialize;
}
