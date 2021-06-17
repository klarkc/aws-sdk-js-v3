import { __extends } from "tslib";
import { UpdateClusterKafkaVersionRequest, UpdateClusterKafkaVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateClusterKafkaVersionCommand, serializeAws_restJson1UpdateClusterKafkaVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the Apache Kafka version for the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterKafkaVersionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateClusterKafkaVersionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateClusterKafkaVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterKafkaVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterKafkaVersionCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClusterKafkaVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateClusterKafkaVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClusterKafkaVersionCommand(input) {
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
    UpdateClusterKafkaVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "UpdateClusterKafkaVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClusterKafkaVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClusterKafkaVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClusterKafkaVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateClusterKafkaVersionCommand(input, context);
    };
    UpdateClusterKafkaVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateClusterKafkaVersionCommand(output, context);
    };
    return UpdateClusterKafkaVersionCommand;
}($Command));
export { UpdateClusterKafkaVersionCommand };
//# sourceMappingURL=UpdateClusterKafkaVersionCommand.js.map