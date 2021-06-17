import { __extends } from "tslib";
import { CreateContainerServiceDeploymentRequest, CreateContainerServiceDeploymentResult } from "../models/models_0";
import { deserializeAws_json1_1CreateContainerServiceDeploymentCommand, serializeAws_json1_1CreateContainerServiceDeploymentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateContainerServiceDeploymentCommand = /** @class */ (function (_super) {
    __extends(CreateContainerServiceDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContainerServiceDeploymentCommand(input) {
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
    CreateContainerServiceDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateContainerServiceDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContainerServiceDeploymentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContainerServiceDeploymentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContainerServiceDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateContainerServiceDeploymentCommand(input, context);
    };
    CreateContainerServiceDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateContainerServiceDeploymentCommand(output, context);
    };
    return CreateContainerServiceDeploymentCommand;
}($Command));
export { CreateContainerServiceDeploymentCommand };
//# sourceMappingURL=CreateContainerServiceDeploymentCommand.js.map