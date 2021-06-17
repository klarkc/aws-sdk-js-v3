import { __extends } from "tslib";
import { GetThreatIntelSetRequest, GetThreatIntelSetResponse } from "../models/models_0";
import { deserializeAws_restJson1GetThreatIntelSetCommand, serializeAws_restJson1GetThreatIntelSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link GetThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetThreatIntelSetCommand = /** @class */ (function (_super) {
    __extends(GetThreatIntelSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetThreatIntelSetCommand(input) {
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
    GetThreatIntelSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "GetThreatIntelSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetThreatIntelSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetThreatIntelSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetThreatIntelSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetThreatIntelSetCommand(input, context);
    };
    GetThreatIntelSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetThreatIntelSetCommand(output, context);
    };
    return GetThreatIntelSetCommand;
}($Command));
export { GetThreatIntelSetCommand };
//# sourceMappingURL=GetThreatIntelSetCommand.js.map