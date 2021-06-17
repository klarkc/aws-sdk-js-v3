import { __extends } from "tslib";
import { GetFindingsStatisticsRequest, GetFindingsStatisticsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFindingsStatisticsCommand, serializeAws_restJson1GetFindingsStatisticsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists Amazon GuardDuty findings statistics for the specified detector ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFindingsStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFindingsStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetFindingsStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsStatisticsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFindingsStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetFindingsStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFindingsStatisticsCommand(input) {
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
    GetFindingsStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "GetFindingsStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFindingsStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFindingsStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFindingsStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFindingsStatisticsCommand(input, context);
    };
    GetFindingsStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFindingsStatisticsCommand(output, context);
    };
    return GetFindingsStatisticsCommand;
}($Command));
export { GetFindingsStatisticsCommand };
//# sourceMappingURL=GetFindingsStatisticsCommand.js.map