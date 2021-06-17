import { __extends } from "tslib";
import { UpdateMemberDetectorsRequest, UpdateMemberDetectorsResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateMemberDetectorsCommand, serializeAws_restJson1UpdateMemberDetectorsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Contains information on member accounts to be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberDetectorsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMemberDetectorsCommand = /** @class */ (function (_super) {
    __extends(UpdateMemberDetectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMemberDetectorsCommand(input) {
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
    UpdateMemberDetectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "UpdateMemberDetectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMemberDetectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMemberDetectorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMemberDetectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMemberDetectorsCommand(input, context);
    };
    UpdateMemberDetectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMemberDetectorsCommand(output, context);
    };
    return UpdateMemberDetectorsCommand;
}($Command));
export { UpdateMemberDetectorsCommand };
//# sourceMappingURL=UpdateMemberDetectorsCommand.js.map