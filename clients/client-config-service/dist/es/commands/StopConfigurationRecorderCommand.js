import { __extends } from "tslib";
import { StopConfigurationRecorderRequest } from "../models/models_1";
import { deserializeAws_json1_1StopConfigurationRecorderCommand, serializeAws_json1_1StopConfigurationRecorderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops recording configurations of the AWS resources you have selected to record in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StopConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StopConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new StopConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link StopConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopConfigurationRecorderCommand = /** @class */ (function (_super) {
    __extends(StopConfigurationRecorderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopConfigurationRecorderCommand(input) {
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
    StopConfigurationRecorderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "StopConfigurationRecorderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopConfigurationRecorderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopConfigurationRecorderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopConfigurationRecorderCommand(input, context);
    };
    StopConfigurationRecorderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopConfigurationRecorderCommand(output, context);
    };
    return StopConfigurationRecorderCommand;
}($Command));
export { StopConfigurationRecorderCommand };
//# sourceMappingURL=StopConfigurationRecorderCommand.js.map