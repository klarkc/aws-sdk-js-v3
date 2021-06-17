import { __extends } from "tslib";
import { DeleteBrokerRequest, DeleteBrokerResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteBrokerCommand, serializeAws_restJson1DeleteBrokerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a broker. Note: This API is asynchronous.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DeleteBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DeleteBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DeleteBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBrokerCommandInput} for command's `input` shape.
 * @see {@link DeleteBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBrokerCommand = /** @class */ (function (_super) {
    __extends(DeleteBrokerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBrokerCommand(input) {
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
    DeleteBrokerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "DeleteBrokerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBrokerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBrokerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBrokerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteBrokerCommand(input, context);
    };
    DeleteBrokerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteBrokerCommand(output, context);
    };
    return DeleteBrokerCommand;
}($Command));
export { DeleteBrokerCommand };
//# sourceMappingURL=DeleteBrokerCommand.js.map