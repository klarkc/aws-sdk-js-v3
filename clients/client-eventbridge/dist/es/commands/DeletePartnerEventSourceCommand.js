import { __extends } from "tslib";
import { DeletePartnerEventSourceRequest } from "../models/models_0";
import { deserializeAws_json1_1DeletePartnerEventSourceCommand, serializeAws_json1_1DeletePartnerEventSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation is used by SaaS partners to delete a partner event source. This operation
 *       is not used by AWS customers.</p>
 *          <p>When you delete an event source, the status of the corresponding partner event bus in the
 *       AWS customer account becomes DELETED.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeletePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeletePartnerEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DeletePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePartnerEventSourceCommand = /** @class */ (function (_super) {
    __extends(DeletePartnerEventSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePartnerEventSourceCommand(input) {
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
    DeletePartnerEventSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "DeletePartnerEventSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePartnerEventSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePartnerEventSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePartnerEventSourceCommand(input, context);
    };
    DeletePartnerEventSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePartnerEventSourceCommand(output, context);
    };
    return DeletePartnerEventSourceCommand;
}($Command));
export { DeletePartnerEventSourceCommand };
//# sourceMappingURL=DeletePartnerEventSourceCommand.js.map