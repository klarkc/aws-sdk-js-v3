import { __extends } from "tslib";
import { DeletePublishingDestinationRequest, DeletePublishingDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePublishingDestinationCommand, serializeAws_restJson1DeletePublishingDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the publishing definition with the specified <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeletePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeletePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeletePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link DeletePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePublishingDestinationCommand = /** @class */ (function (_super) {
    __extends(DeletePublishingDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePublishingDestinationCommand(input) {
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
    DeletePublishingDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DeletePublishingDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePublishingDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePublishingDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePublishingDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePublishingDestinationCommand(input, context);
    };
    DeletePublishingDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePublishingDestinationCommand(output, context);
    };
    return DeletePublishingDestinationCommand;
}($Command));
export { DeletePublishingDestinationCommand };
//# sourceMappingURL=DeletePublishingDestinationCommand.js.map