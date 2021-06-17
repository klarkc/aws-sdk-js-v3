import { __extends } from "tslib";
import { DeleteIPSetRequest, DeleteIPSetResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteIPSetCommand, serializeAws_restJson1DeleteIPSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP
 *       lists in the console user interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIPSetCommandInput} for command's `input` shape.
 * @see {@link DeleteIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIPSetCommand = /** @class */ (function (_super) {
    __extends(DeleteIPSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIPSetCommand(input) {
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
    DeleteIPSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DeleteIPSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIPSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteIPSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIPSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteIPSetCommand(input, context);
    };
    DeleteIPSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteIPSetCommand(output, context);
    };
    return DeleteIPSetCommand;
}($Command));
export { DeleteIPSetCommand };
//# sourceMappingURL=DeleteIPSetCommand.js.map