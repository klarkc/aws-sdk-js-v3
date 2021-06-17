import { __extends } from "tslib";
import { DeleteFilterRequest, DeleteFilterResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteFilterCommand, serializeAws_restJson1DeleteFilterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFilterCommand = /** @class */ (function (_super) {
    __extends(DeleteFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFilterCommand(input) {
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
    DeleteFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DeleteFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFilterCommand(input, context);
    };
    DeleteFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFilterCommand(output, context);
    };
    return DeleteFilterCommand;
}($Command));
export { DeleteFilterCommand };
//# sourceMappingURL=DeleteFilterCommand.js.map