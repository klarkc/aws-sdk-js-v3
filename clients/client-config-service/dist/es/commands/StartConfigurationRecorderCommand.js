import { __extends } from "tslib";
import { StartConfigurationRecorderRequest } from "../models/models_1";
import { deserializeAws_json1_1StartConfigurationRecorderCommand, serializeAws_json1_1StartConfigurationRecorderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts recording configurations of the AWS resources you have
 * 			selected to record in your AWS account.</p>
 * 		       <p>You must have created at least one delivery channel to
 * 			successfully start the configuration recorder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new StartConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartConfigurationRecorderCommand = /** @class */ (function (_super) {
    __extends(StartConfigurationRecorderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartConfigurationRecorderCommand(input) {
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
    StartConfigurationRecorderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "StartConfigurationRecorderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartConfigurationRecorderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartConfigurationRecorderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartConfigurationRecorderCommand(input, context);
    };
    StartConfigurationRecorderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartConfigurationRecorderCommand(output, context);
    };
    return StartConfigurationRecorderCommand;
}($Command));
export { StartConfigurationRecorderCommand };
//# sourceMappingURL=StartConfigurationRecorderCommand.js.map