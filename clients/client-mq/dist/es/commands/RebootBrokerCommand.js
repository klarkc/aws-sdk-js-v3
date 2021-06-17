import { __extends } from "tslib";
import { RebootBrokerRequest, RebootBrokerResponse } from "../models/models_0";
import { deserializeAws_restJson1RebootBrokerCommand, serializeAws_restJson1RebootBrokerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Reboots a broker. Note: This API is asynchronous.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, RebootBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, RebootBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new RebootBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootBrokerCommandInput} for command's `input` shape.
 * @see {@link RebootBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootBrokerCommand = /** @class */ (function (_super) {
    __extends(RebootBrokerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootBrokerCommand(input) {
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
    RebootBrokerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "RebootBrokerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootBrokerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RebootBrokerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootBrokerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RebootBrokerCommand(input, context);
    };
    RebootBrokerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RebootBrokerCommand(output, context);
    };
    return RebootBrokerCommand;
}($Command));
export { RebootBrokerCommand };
//# sourceMappingURL=RebootBrokerCommand.js.map