import { __extends } from "tslib";
import { AssociateQueueQuickConnectsRequest } from "../models/models_0";
import { deserializeAws_restJson1AssociateQueueQuickConnectsCommand, serializeAws_restJson1AssociateQueueQuickConnectsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a set of quick connects with a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateQueueQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateQueueQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateQueueQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateQueueQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link AssociateQueueQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateQueueQuickConnectsCommand = /** @class */ (function (_super) {
    __extends(AssociateQueueQuickConnectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateQueueQuickConnectsCommand(input) {
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
    AssociateQueueQuickConnectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "AssociateQueueQuickConnectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateQueueQuickConnectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateQueueQuickConnectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateQueueQuickConnectsCommand(input, context);
    };
    AssociateQueueQuickConnectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateQueueQuickConnectsCommand(output, context);
    };
    return AssociateQueueQuickConnectsCommand;
}($Command));
export { AssociateQueueQuickConnectsCommand };
//# sourceMappingURL=AssociateQueueQuickConnectsCommand.js.map