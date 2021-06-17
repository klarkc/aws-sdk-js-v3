import { __extends } from "tslib";
import { UpdatePipelineRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdatePipelineCommand, serializeAws_restJson1UpdatePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings of a pipeline. You must specify both a <code>channel</code> and a
 *         <code>datastore</code> activity and, optionally, as many as 23 additional activities in the
 *         <code>pipelineActivities</code> array.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdatePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdatePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePipelineCommand = /** @class */ (function (_super) {
    __extends(UpdatePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePipelineCommand(input) {
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
    UpdatePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "UpdatePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePipelineCommand(input, context);
    };
    UpdatePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePipelineCommand(output, context);
    };
    return UpdatePipelineCommand;
}($Command));
export { UpdatePipelineCommand };
//# sourceMappingURL=UpdatePipelineCommand.js.map