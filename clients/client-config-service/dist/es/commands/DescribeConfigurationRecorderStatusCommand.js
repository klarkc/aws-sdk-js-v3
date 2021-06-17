import { __extends } from "tslib";
import { DescribeConfigurationRecorderStatusRequest, DescribeConfigurationRecorderStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand, serializeAws_json1_1DescribeConfigurationRecorderStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current status of the specified configuration
 * 			recorder. If a configuration recorder is not specified, this action
 * 			returns the status of all configuration recorders associated with
 * 			the account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one configuration recorder
 * 				per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigurationRecorderStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationRecorderStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRecorderStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConfigurationRecorderStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeConfigurationRecorderStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConfigurationRecorderStatusCommand(input) {
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
    DescribeConfigurationRecorderStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeConfigurationRecorderStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConfigurationRecorderStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConfigurationRecorderStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConfigurationRecorderStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConfigurationRecorderStatusCommand(input, context);
    };
    DescribeConfigurationRecorderStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand(output, context);
    };
    return DescribeConfigurationRecorderStatusCommand;
}($Command));
export { DescribeConfigurationRecorderStatusCommand };
//# sourceMappingURL=DescribeConfigurationRecorderStatusCommand.js.map