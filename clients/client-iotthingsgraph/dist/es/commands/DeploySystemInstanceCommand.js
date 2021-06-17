import { __extends } from "tslib";
import { DeploySystemInstanceRequest, DeploySystemInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeploySystemInstanceCommand, serializeAws_json1_1DeploySystemInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>Greengrass and Cloud Deployments</b>
 *          </p>
 *          <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p>
 *          <p>
 *             <b>Greengrass Deployments</b>
 *          </p>
 *          <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service
 *          resource file and then deploy it.</p>
 *          <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions
 *          to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p>
 *          <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeploySystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeploySystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeploySystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeploySystemInstanceCommandInput} for command's `input` shape.
 * @see {@link DeploySystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeploySystemInstanceCommand = /** @class */ (function (_super) {
    __extends(DeploySystemInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeploySystemInstanceCommand(input) {
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
    DeploySystemInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "DeploySystemInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeploySystemInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeploySystemInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeploySystemInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeploySystemInstanceCommand(input, context);
    };
    DeploySystemInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeploySystemInstanceCommand(output, context);
    };
    return DeploySystemInstanceCommand;
}($Command));
export { DeploySystemInstanceCommand };
//# sourceMappingURL=DeploySystemInstanceCommand.js.map