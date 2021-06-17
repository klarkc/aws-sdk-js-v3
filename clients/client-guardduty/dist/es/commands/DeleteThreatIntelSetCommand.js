import { __extends } from "tslib";
import { DeleteThreatIntelSetRequest, DeleteThreatIntelSetResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteThreatIntelSetCommand, serializeAws_restJson1DeleteThreatIntelSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link DeleteThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteThreatIntelSetCommand = /** @class */ (function (_super) {
    __extends(DeleteThreatIntelSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteThreatIntelSetCommand(input) {
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
    DeleteThreatIntelSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DeleteThreatIntelSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteThreatIntelSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteThreatIntelSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteThreatIntelSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteThreatIntelSetCommand(input, context);
    };
    DeleteThreatIntelSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteThreatIntelSetCommand(output, context);
    };
    return DeleteThreatIntelSetCommand;
}($Command));
export { DeleteThreatIntelSetCommand };
//# sourceMappingURL=DeleteThreatIntelSetCommand.js.map