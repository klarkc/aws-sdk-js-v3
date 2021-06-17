import { __extends } from "tslib";
import { PutConfigurationRecorderRequest } from "../models/models_0";
import { deserializeAws_json1_1PutConfigurationRecorderCommand, serializeAws_json1_1PutConfigurationRecorderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new configuration recorder to record the selected
 * 			resource configurations.</p>
 * 		       <p>You can use this action to change the role <code>roleARN</code>
 * 			or the <code>recordingGroup</code> of an existing recorder. To
 * 			change the role, call the action on the existing configuration
 * 			recorder and specify a role.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one configuration recorder
 * 				per region in your account.</p>
 * 			         <p>If <code>ConfigurationRecorder</code> does not have the
 * 					<b>recordingGroup</b> parameter
 * 				specified, the default is to record all supported resource
 * 				types.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConfigurationRecorderCommand = /** @class */ (function (_super) {
    __extends(PutConfigurationRecorderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutConfigurationRecorderCommand(input) {
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
    PutConfigurationRecorderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutConfigurationRecorderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutConfigurationRecorderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutConfigurationRecorderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutConfigurationRecorderCommand(input, context);
    };
    PutConfigurationRecorderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutConfigurationRecorderCommand(output, context);
    };
    return PutConfigurationRecorderCommand;
}($Command));
export { PutConfigurationRecorderCommand };
//# sourceMappingURL=PutConfigurationRecorderCommand.js.map