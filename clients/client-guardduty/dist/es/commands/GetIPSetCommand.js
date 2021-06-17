import { __extends } from "tslib";
import { GetIPSetRequest, GetIPSetResponse } from "../models/models_0";
import { deserializeAws_restJson1GetIPSetCommand, serializeAws_restJson1GetIPSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the IPSet specified by the <code>ipSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIPSetCommandInput} for command's `input` shape.
 * @see {@link GetIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIPSetCommand = /** @class */ (function (_super) {
    __extends(GetIPSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIPSetCommand(input) {
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
    GetIPSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "GetIPSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIPSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIPSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIPSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIPSetCommand(input, context);
    };
    GetIPSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIPSetCommand(output, context);
    };
    return GetIPSetCommand;
}($Command));
export { GetIPSetCommand };
//# sourceMappingURL=GetIPSetCommand.js.map