import { __extends } from "tslib";
import { DeleteLogGroupRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteLogGroupCommand, serializeAws_json1_1DeleteLogGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified log group and permanently deletes all the archived
 *       log events associated with the log group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteLogGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLogGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLogGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteLogGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLogGroupCommand(input) {
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
    DeleteLogGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "DeleteLogGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLogGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLogGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLogGroupCommand(input, context);
    };
    DeleteLogGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLogGroupCommand(output, context);
    };
    return DeleteLogGroupCommand;
}($Command));
export { DeleteLogGroupCommand };
//# sourceMappingURL=DeleteLogGroupCommand.js.map