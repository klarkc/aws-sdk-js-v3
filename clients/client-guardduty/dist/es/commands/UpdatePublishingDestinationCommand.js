import { __extends } from "tslib";
import { UpdatePublishingDestinationRequest, UpdatePublishingDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePublishingDestinationCommand, serializeAws_restJson1UpdatePublishingDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates information about the publishing destination specified by the
 *         <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdatePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdatePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdatePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdatePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePublishingDestinationCommand = /** @class */ (function (_super) {
    __extends(UpdatePublishingDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePublishingDestinationCommand(input) {
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
    UpdatePublishingDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "UpdatePublishingDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePublishingDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePublishingDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePublishingDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePublishingDestinationCommand(input, context);
    };
    UpdatePublishingDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePublishingDestinationCommand(output, context);
    };
    return UpdatePublishingDestinationCommand;
}($Command));
export { UpdatePublishingDestinationCommand };
//# sourceMappingURL=UpdatePublishingDestinationCommand.js.map