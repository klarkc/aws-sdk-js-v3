import { __extends } from "tslib";
import { GetFindingsRequest, GetFindingsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFindingsCommand, serializeAws_restJson1GetFindingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes Amazon GuardDuty findings specified by finding IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFindingsCommand = /** @class */ (function (_super) {
    __extends(GetFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFindingsCommand(input) {
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
    GetFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "GetFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFindingsCommand(input, context);
    };
    GetFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFindingsCommand(output, context);
    };
    return GetFindingsCommand;
}($Command));
export { GetFindingsCommand };
//# sourceMappingURL=GetFindingsCommand.js.map