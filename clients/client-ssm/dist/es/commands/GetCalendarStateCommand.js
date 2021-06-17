import { __extends } from "tslib";
import { GetCalendarStateRequest, GetCalendarStateResponse } from "../models/models_1";
import { deserializeAws_json1_1GetCalendarStateCommand, serializeAws_json1_1GetCalendarStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the state of the AWS Systems Manager Change Calendar at an optional, specified time. If you
 *    specify a time, <code>GetCalendarState</code> returns the state of the calendar at a specific
 *    time, and returns the next time that the Change Calendar state will transition. If you do not
 *    specify a time, <code>GetCalendarState</code> assumes the current time. Change Calendar entries
 *    have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p>
 *          <p>If you specify more than one calendar in a request, the command returns the status of
 *     <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the
 *    request are closed, the status returned is <code>CLOSED</code>.</p>
 *          <p>For more information about Systems Manager Change Calendar, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">AWS Systems Manager Change
 *     Calendar</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCalendarStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCalendarStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetCalendarStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCalendarStateCommandInput} for command's `input` shape.
 * @see {@link GetCalendarStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCalendarStateCommand = /** @class */ (function (_super) {
    __extends(GetCalendarStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCalendarStateCommand(input) {
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
    GetCalendarStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetCalendarStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCalendarStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCalendarStateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCalendarStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCalendarStateCommand(input, context);
    };
    GetCalendarStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCalendarStateCommand(output, context);
    };
    return GetCalendarStateCommand;
}($Command));
export { GetCalendarStateCommand };
//# sourceMappingURL=GetCalendarStateCommand.js.map