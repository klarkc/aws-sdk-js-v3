import { __extends } from "tslib";
import { UpdateBrokerRequest, UpdateBrokerResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateBrokerCommand, serializeAws_restJson1UpdateBrokerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Adds a pending configuration change to a broker.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new UpdateBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBrokerCommand = /** @class */ (function (_super) {
    __extends(UpdateBrokerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBrokerCommand(input) {
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
    UpdateBrokerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "UpdateBrokerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBrokerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBrokerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBrokerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBrokerCommand(input, context);
    };
    UpdateBrokerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBrokerCommand(output, context);
    };
    return UpdateBrokerCommand;
}($Command));
export { UpdateBrokerCommand };
//# sourceMappingURL=UpdateBrokerCommand.js.map