import { __extends } from "tslib";
import { DeauthorizeConnectionRequest, DeauthorizeConnectionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeauthorizeConnectionCommand, serializeAws_json1_1DeauthorizeConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes all authorization parameters from the connection. This lets you remove the secret
 *       from the connection so you can reuse it without having to create a new connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeauthorizeConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeauthorizeConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DeauthorizeConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeauthorizeConnectionCommandInput} for command's `input` shape.
 * @see {@link DeauthorizeConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeauthorizeConnectionCommand = /** @class */ (function (_super) {
    __extends(DeauthorizeConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeauthorizeConnectionCommand(input) {
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
    DeauthorizeConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "DeauthorizeConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeauthorizeConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeauthorizeConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeauthorizeConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeauthorizeConnectionCommand(input, context);
    };
    DeauthorizeConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeauthorizeConnectionCommand(output, context);
    };
    return DeauthorizeConnectionCommand;
}($Command));
export { DeauthorizeConnectionCommand };
//# sourceMappingURL=DeauthorizeConnectionCommand.js.map