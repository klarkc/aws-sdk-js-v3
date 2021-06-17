import { __extends } from "tslib";
import { GetLoggingConfigurationRequest, GetLoggingConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLoggingConfigurationCommand, serializeAws_json1_1GetLoggingConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetLoggingConfigurationCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetLoggingConfigurationCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLoggingConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetLoggingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLoggingConfigurationCommand(input) {
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
    GetLoggingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "GetLoggingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLoggingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLoggingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLoggingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLoggingConfigurationCommand(input, context);
    };
    GetLoggingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLoggingConfigurationCommand(output, context);
    };
    return GetLoggingConfigurationCommand;
}($Command));
export { GetLoggingConfigurationCommand };
//# sourceMappingURL=GetLoggingConfigurationCommand.js.map