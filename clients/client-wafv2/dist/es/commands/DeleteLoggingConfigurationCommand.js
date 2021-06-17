import { __extends } from "tslib";
import { DeleteLoggingConfigurationRequest, DeleteLoggingConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteLoggingConfigurationCommand, serializeAws_json1_1DeleteLoggingConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the <a>LoggingConfiguration</a> from the specified web
 *          ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteLoggingConfigurationCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteLoggingConfigurationCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLoggingConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteLoggingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLoggingConfigurationCommand(input) {
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
    DeleteLoggingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "DeleteLoggingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLoggingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLoggingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLoggingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLoggingConfigurationCommand(input, context);
    };
    DeleteLoggingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLoggingConfigurationCommand(output, context);
    };
    return DeleteLoggingConfigurationCommand;
}($Command));
export { DeleteLoggingConfigurationCommand };
//# sourceMappingURL=DeleteLoggingConfigurationCommand.js.map