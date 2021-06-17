import { __extends } from "tslib";
import { ListDetectorsRequest, ListDetectorsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDetectorsCommand, serializeAws_restJson1ListDetectorsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists detectorIds of all the existing Amazon GuardDuty detector resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDetectorsCommand = /** @class */ (function (_super) {
    __extends(ListDetectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDetectorsCommand(input) {
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
    ListDetectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ListDetectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDetectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDetectorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDetectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDetectorsCommand(input, context);
    };
    ListDetectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDetectorsCommand(output, context);
    };
    return ListDetectorsCommand;
}($Command));
export { ListDetectorsCommand };
//# sourceMappingURL=ListDetectorsCommand.js.map