import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { CreateDeploymentRequest, CreateDeploymentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDeploymentCommandInput extends CreateDeploymentRequest {
}
export interface CreateDeploymentCommandOutput extends CreateDeploymentResponse, __MetadataBearer {
}
/**
 * <p>Creates a continuous deployment for a target, which is a AWS IoT Greengrass core device or group of core
 *       devices. When you add a new core device to a group of core devices that has a deployment, AWS IoT Greengrass
 *       deploys that group's deployment to the new device.</p>
 *          <p>You can define one deployment for each target. When you create a new deployment for a
 *       target that has an existing deployment, you replace the previous deployment. AWS IoT Greengrass applies the
 *       new deployment to the target devices.</p>
 *          <p>Every deployment has a revision number that indicates how many deployment revisions you
 *       define for a target. Use this operation to create a new revision of an existing deployment.
 *       This operation returns the revision number of the new deployment when you create it.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the
 *         <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, CreateDeploymentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, CreateDeploymentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDeploymentCommand extends $Command<CreateDeploymentCommandInput, CreateDeploymentCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: CreateDeploymentCommandInput;
    constructor(input: CreateDeploymentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeploymentCommandInput, CreateDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
