import { __extends } from "tslib";
import { UpdateBrokerTypeRequest, UpdateBrokerTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateBrokerTypeCommand, serializeAws_restJson1UpdateBrokerTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates EC2 instance type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerTypeCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerTypeCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerTypeCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBrokerTypeCommand = /** @class */ (function (_super) {
    __extends(UpdateBrokerTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBrokerTypeCommand(input) {
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
    UpdateBrokerTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "UpdateBrokerTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBrokerTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBrokerTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBrokerTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBrokerTypeCommand(input, context);
    };
    UpdateBrokerTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBrokerTypeCommand(output, context);
    };
    return UpdateBrokerTypeCommand;
}($Command));
export { UpdateBrokerTypeCommand };
//# sourceMappingURL=UpdateBrokerTypeCommand.js.map