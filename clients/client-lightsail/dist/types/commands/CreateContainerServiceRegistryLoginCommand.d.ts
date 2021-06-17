import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContainerServiceRegistryLoginRequest, CreateContainerServiceRegistryLoginResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContainerServiceRegistryLoginCommandInput extends CreateContainerServiceRegistryLoginRequest {
}
export interface CreateContainerServiceRegistryLoginCommandOutput extends CreateContainerServiceRegistryLoginResult, __MetadataBearer {
}
/**
 * <p>Creates a temporary set of log in credentials that you can use to log in to the Docker
 *       process on your local machine. After you're logged in, you can use the native Docker commands
 *       to push your local container images to the container image registry of your Amazon Lightsail
 *       account so that you can use them with your Lightsail container service. The log in
 *       credentials expire 12 hours after they are created, at which point you will need to create a
 *       new set of log in credentials.</p>
 *
 *          <note>
 *             <p>You can only push container images to the container service registry of your Lightsail
 *         account. You cannot pull container images or perform any other container image management
 *         actions on the container service registry.</p>
 *          </note>
 *
 *          <p>After you push your container images to the container image registry of your Lightsail
 *       account, use the <code>RegisterContainerImage</code> action to register the pushed images to a
 *       specific Lightsail container service.</p>
 *
 *          <note>
 *             <p>This action is not required if you install and use the Lightsail Control
 *         (lightsailctl) plugin to push container images to your Lightsail container service. For
 *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
 *         in the <i>Lightsail Dev Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceRegistryLoginCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceRegistryLoginCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateContainerServiceRegistryLoginCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerServiceRegistryLoginCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceRegistryLoginCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContainerServiceRegistryLoginCommand extends $Command<CreateContainerServiceRegistryLoginCommandInput, CreateContainerServiceRegistryLoginCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateContainerServiceRegistryLoginCommandInput;
    constructor(input: CreateContainerServiceRegistryLoginCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContainerServiceRegistryLoginCommandInput, CreateContainerServiceRegistryLoginCommandOutput>;
    private serialize;
    private deserialize;
}
