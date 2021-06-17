import { __extends } from "tslib";
import { RemoveNotificationChannelRequest, RemoveNotificationChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1RemoveNotificationChannelCommand, serializeAws_restJson1RemoveNotificationChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove one anomaly notifications channel for a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, RemoveNotificationChannelCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, RemoveNotificationChannelCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new RemoveNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link RemoveNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveNotificationChannelCommand = /** @class */ (function (_super) {
    __extends(RemoveNotificationChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveNotificationChannelCommand(input) {
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
    RemoveNotificationChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "RemoveNotificationChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveNotificationChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveNotificationChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveNotificationChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveNotificationChannelCommand(input, context);
    };
    RemoveNotificationChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveNotificationChannelCommand(output, context);
    };
    return RemoveNotificationChannelCommand;
}($Command));
export { RemoveNotificationChannelCommand };
//# sourceMappingURL=RemoveNotificationChannelCommand.js.map