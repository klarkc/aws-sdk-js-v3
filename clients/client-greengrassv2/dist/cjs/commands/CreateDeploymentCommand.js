"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeploymentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateDeploymentCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GreengrassV2Client";
        const commandName = "CreateDeploymentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDeploymentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDeploymentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateDeploymentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateDeploymentCommand(output, context);
    }
}
exports.CreateDeploymentCommand = CreateDeploymentCommand;
//# sourceMappingURL=CreateDeploymentCommand.js.map