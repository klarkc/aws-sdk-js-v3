import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContainerServiceDeploymentRequest, CreateContainerServiceDeploymentResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContainerServiceDeploymentCommandInput extends CreateContainerServiceDeploymentRequest {
}
export interface CreateContainerServiceDeploymentCommandOutput extends CreateContainerServiceDeploymentResult, __MetadataBearer {
}
/**
 * <p>Creates a deployment for your Amazon Lightsail container service.</p>
 *
 *          <p>A deployment specifies the containers that will be launched on the container service and
 *       their settings, such as the ports to open, the environment variables to apply, and the launch
 *       command to run. It also specifies the container that will serve as the public endpoint of the
 *       deployment and its settings, such as the HTTP or HTTPS port to use, and the health check
 *       configuration.</p>
 *
 *          <p>You can deploy containers to your container service using container images from a public
 *       registry like Docker Hub, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the
 *         <i>Lightsail Dev Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceDeploymentCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceDeploymentCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateContainerServiceDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerServiceDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceDeploymentCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContainerServiceDeploymentCommand extends $Command<CreateContainerServiceDeploymentCommandInput, CreateContainerServiceDeploymentCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateContainerServiceDeploymentCommandInput;
    constructor(input: CreateContainerServiceDeploymentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContainerServiceDeploymentCommandInput, CreateContainerServiceDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
