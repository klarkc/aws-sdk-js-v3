import { __extends } from "tslib";
import { UpdateFindingsFeedbackRequest, UpdateFindingsFeedbackResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFindingsFeedbackCommand, serializeAws_restJson1UpdateFindingsFeedbackCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Marks the specified GuardDuty findings as useful or not useful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateFindingsFeedbackCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateFindingsFeedbackCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateFindingsFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingsFeedbackCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsFeedbackCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFindingsFeedbackCommand = /** @class */ (function (_super) {
    __extends(UpdateFindingsFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFindingsFeedbackCommand(input) {
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
    UpdateFindingsFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "UpdateFindingsFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFindingsFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFindingsFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFindingsFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFindingsFeedbackCommand(input, context);
    };
    UpdateFindingsFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFindingsFeedbackCommand(output, context);
    };
    return UpdateFindingsFeedbackCommand;
}($Command));
export { UpdateFindingsFeedbackCommand };
//# sourceMappingURL=UpdateFindingsFeedbackCommand.js.map