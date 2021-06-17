import { __extends } from "tslib";
import { UpdateBrokerStorageRequest, UpdateBrokerStorageResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateBrokerStorageCommand, serializeAws_restJson1UpdateBrokerStorageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the EBS storage associated with MSK brokers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerStorageCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerStorageCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerStorageCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBrokerStorageCommand = /** @class */ (function (_super) {
    __extends(UpdateBrokerStorageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBrokerStorageCommand(input) {
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
    UpdateBrokerStorageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "UpdateBrokerStorageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBrokerStorageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBrokerStorageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBrokerStorageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBrokerStorageCommand(input, context);
    };
    UpdateBrokerStorageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBrokerStorageCommand(output, context);
    };
    return UpdateBrokerStorageCommand;
}($Command));
export { UpdateBrokerStorageCommand };
//# sourceMappingURL=UpdateBrokerStorageCommand.js.map