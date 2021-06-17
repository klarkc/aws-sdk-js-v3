import { __extends } from "tslib";
import { DeleteMetricStreamInput, DeleteMetricStreamOutput } from "../models/models_0";
import { deserializeAws_queryDeleteMetricStreamCommand, serializeAws_queryDeleteMetricStreamCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently deletes the metric stream that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteMetricStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMetricStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMetricStreamCommand = /** @class */ (function (_super) {
    __extends(DeleteMetricStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMetricStreamCommand(input) {
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
    DeleteMetricStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DeleteMetricStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMetricStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMetricStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMetricStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteMetricStreamCommand(input, context);
    };
    DeleteMetricStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteMetricStreamCommand(output, context);
    };
    return DeleteMetricStreamCommand;
}($Command));
export { DeleteMetricStreamCommand };
//# sourceMappingURL=DeleteMetricStreamCommand.js.map