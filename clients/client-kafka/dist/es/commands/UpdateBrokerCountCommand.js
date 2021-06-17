import { __extends } from "tslib";
import { UpdateBrokerCountRequest, UpdateBrokerCountResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateBrokerCountCommand, serializeAws_restJson1UpdateBrokerCountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the number of broker nodes in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerCountCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerCountCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerCountCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerCountCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBrokerCountCommand = /** @class */ (function (_super) {
    __extends(UpdateBrokerCountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBrokerCountCommand(input) {
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
    UpdateBrokerCountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "UpdateBrokerCountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBrokerCountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBrokerCountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBrokerCountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBrokerCountCommand(input, context);
    };
    UpdateBrokerCountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBrokerCountCommand(output, context);
    };
    return UpdateBrokerCountCommand;
}($Command));
export { UpdateBrokerCountCommand };
//# sourceMappingURL=UpdateBrokerCountCommand.js.map