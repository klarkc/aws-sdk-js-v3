import { __extends } from "tslib";
import { ListLoggingConfigurationsRequest, ListLoggingConfigurationsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListLoggingConfigurationsCommand, serializeAws_json1_1ListLoggingConfigurationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an array of your <a>LoggingConfiguration</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListLoggingConfigurationsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListLoggingConfigurationsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListLoggingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLoggingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListLoggingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLoggingConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListLoggingConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLoggingConfigurationsCommand(input) {
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
    ListLoggingConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "ListLoggingConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLoggingConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLoggingConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLoggingConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLoggingConfigurationsCommand(input, context);
    };
    ListLoggingConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLoggingConfigurationsCommand(output, context);
    };
    return ListLoggingConfigurationsCommand;
}($Command));
export { ListLoggingConfigurationsCommand };
//# sourceMappingURL=ListLoggingConfigurationsCommand.js.map