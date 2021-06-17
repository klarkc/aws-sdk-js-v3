import { __extends } from "tslib";
import { UpdateMonitoringRequest, UpdateMonitoringResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateMonitoringCommand, serializeAws_restJson1UpdateMonitoringCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateMonitoringCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateMonitoringCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateMonitoringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMonitoringCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMonitoringCommand = /** @class */ (function (_super) {
    __extends(UpdateMonitoringCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMonitoringCommand(input) {
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
    UpdateMonitoringCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "UpdateMonitoringCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMonitoringRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMonitoringResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMonitoringCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMonitoringCommand(input, context);
    };
    UpdateMonitoringCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMonitoringCommand(output, context);
    };
    return UpdateMonitoringCommand;
}($Command));
export { UpdateMonitoringCommand };
//# sourceMappingURL=UpdateMonitoringCommand.js.map