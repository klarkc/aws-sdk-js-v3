import { __extends } from "tslib";
import { GetFilterRequest, GetFilterResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFilterCommand, serializeAws_restJson1GetFilterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details of the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFilterCommandInput} for command's `input` shape.
 * @see {@link GetFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFilterCommand = /** @class */ (function (_super) {
    __extends(GetFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFilterCommand(input) {
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
    GetFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "GetFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFilterCommand(input, context);
    };
    GetFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFilterCommand(output, context);
    };
    return GetFilterCommand;
}($Command));
export { GetFilterCommand };
//# sourceMappingURL=GetFilterCommand.js.map