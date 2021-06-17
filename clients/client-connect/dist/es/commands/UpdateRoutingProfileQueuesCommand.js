import { __extends } from "tslib";
import { UpdateRoutingProfileQueuesRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateRoutingProfileQueuesCommand, serializeAws_restJson1UpdateRoutingProfileQueuesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the properties associated with a set of queues for a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoutingProfileQueuesCommand = /** @class */ (function (_super) {
    __extends(UpdateRoutingProfileQueuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRoutingProfileQueuesCommand(input) {
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
    UpdateRoutingProfileQueuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateRoutingProfileQueuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRoutingProfileQueuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRoutingProfileQueuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRoutingProfileQueuesCommand(input, context);
    };
    UpdateRoutingProfileQueuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRoutingProfileQueuesCommand(output, context);
    };
    return UpdateRoutingProfileQueuesCommand;
}($Command));
export { UpdateRoutingProfileQueuesCommand };
//# sourceMappingURL=UpdateRoutingProfileQueuesCommand.js.map