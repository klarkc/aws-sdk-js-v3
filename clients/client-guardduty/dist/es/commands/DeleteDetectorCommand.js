import { __extends } from "tslib";
import { DeleteDetectorRequest, DeleteDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDetectorCommand, serializeAws_restJson1DeleteDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon GuardDuty detector that is specified by the detector ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDetectorCommand = /** @class */ (function (_super) {
    __extends(DeleteDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDetectorCommand(input) {
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
    DeleteDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DeleteDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDetectorCommand(input, context);
    };
    DeleteDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDetectorCommand(output, context);
    };
    return DeleteDetectorCommand;
}($Command));
export { DeleteDetectorCommand };
//# sourceMappingURL=DeleteDetectorCommand.js.map