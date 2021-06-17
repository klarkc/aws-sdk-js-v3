import { __extends } from "tslib";
import { AddSourceIdentifierToSubscriptionMessage, AddSourceIdentifierToSubscriptionResult } from "../models/models_0";
import { deserializeAws_queryAddSourceIdentifierToSubscriptionCommand, serializeAws_queryAddSourceIdentifierToSubscriptionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a source identifier to an existing event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, AddSourceIdentifierToSubscriptionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, AddSourceIdentifierToSubscriptionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new AddSourceIdentifierToSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddSourceIdentifierToSubscriptionCommandInput} for command's `input` shape.
 * @see {@link AddSourceIdentifierToSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddSourceIdentifierToSubscriptionCommand = /** @class */ (function (_super) {
    __extends(AddSourceIdentifierToSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddSourceIdentifierToSubscriptionCommand(input) {
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
    AddSourceIdentifierToSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "AddSourceIdentifierToSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddSourceIdentifierToSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: AddSourceIdentifierToSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddSourceIdentifierToSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddSourceIdentifierToSubscriptionCommand(input, context);
    };
    AddSourceIdentifierToSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddSourceIdentifierToSubscriptionCommand(output, context);
    };
    return AddSourceIdentifierToSubscriptionCommand;
}($Command));
export { AddSourceIdentifierToSubscriptionCommand };
//# sourceMappingURL=AddSourceIdentifierToSubscriptionCommand.js.map