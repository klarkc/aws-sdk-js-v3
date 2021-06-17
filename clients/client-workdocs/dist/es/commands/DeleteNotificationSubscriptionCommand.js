import { __extends } from "tslib";
import { DeleteNotificationSubscriptionRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteNotificationSubscriptionCommand, serializeAws_restJson1DeleteNotificationSubscriptionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified subscription from the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteNotificationSubscriptionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteNotificationSubscriptionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteNotificationSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNotificationSubscriptionCommand = /** @class */ (function (_super) {
    __extends(DeleteNotificationSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNotificationSubscriptionCommand(input) {
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
    DeleteNotificationSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DeleteNotificationSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNotificationSubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNotificationSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteNotificationSubscriptionCommand(input, context);
    };
    DeleteNotificationSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteNotificationSubscriptionCommand(output, context);
    };
    return DeleteNotificationSubscriptionCommand;
}($Command));
export { DeleteNotificationSubscriptionCommand };
//# sourceMappingURL=DeleteNotificationSubscriptionCommand.js.map