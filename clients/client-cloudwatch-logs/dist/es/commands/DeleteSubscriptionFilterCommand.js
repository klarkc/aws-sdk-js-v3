import { __extends } from "tslib";
import { DeleteSubscriptionFilterRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteSubscriptionFilterCommand, serializeAws_json1_1DeleteSubscriptionFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified subscription filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteSubscriptionFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteSubscriptionFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteSubscriptionFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubscriptionFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSubscriptionFilterCommand = /** @class */ (function (_super) {
    __extends(DeleteSubscriptionFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSubscriptionFilterCommand(input) {
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
    DeleteSubscriptionFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "DeleteSubscriptionFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSubscriptionFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSubscriptionFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteSubscriptionFilterCommand(input, context);
    };
    DeleteSubscriptionFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteSubscriptionFilterCommand(output, context);
    };
    return DeleteSubscriptionFilterCommand;
}($Command));
export { DeleteSubscriptionFilterCommand };
//# sourceMappingURL=DeleteSubscriptionFilterCommand.js.map