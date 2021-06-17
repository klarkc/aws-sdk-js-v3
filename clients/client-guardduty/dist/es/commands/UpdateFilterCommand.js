import { __extends } from "tslib";
import { UpdateFilterRequest, UpdateFilterResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFilterCommand, serializeAws_restJson1UpdateFilterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFilterCommand = /** @class */ (function (_super) {
    __extends(UpdateFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFilterCommand(input) {
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
    UpdateFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "UpdateFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFilterCommand(input, context);
    };
    UpdateFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFilterCommand(output, context);
    };
    return UpdateFilterCommand;
}($Command));
export { UpdateFilterCommand };
//# sourceMappingURL=UpdateFilterCommand.js.map