import { __extends } from "tslib";
import { CreateDeploymentRequest, CreateDeploymentResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDeploymentCommand, serializeAws_restJson1CreateDeploymentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateDeploymentCommand = /** @class */ (function (_super) {
    __extends(CreateDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeploymentCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "CreateDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeploymentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeploymentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDeploymentCommand(input, context);
    };
    CreateDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDeploymentCommand(output, context);
    };
    return CreateDeploymentCommand;
}($Command));
export { CreateDeploymentCommand };
//# sourceMappingURL=CreateDeploymentCommand.js.map