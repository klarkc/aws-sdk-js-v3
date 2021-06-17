import { __extends } from "tslib";
import { StartMonitoringMemberRequest } from "../models/models_0";
import { deserializeAws_restJson1StartMonitoringMemberCommand, serializeAws_restJson1StartMonitoringMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a request to enable data ingest for a member account that has a status of
 *             <code>ACCEPTED_BUT_DISABLED</code>.</p>
 *          <p>For valid member accounts, the status is updated as follows.</p>
 *          <ul>
 *             <li>
 *                <p>If Detective enabled the member account, then the new status is
 *                <code>ENABLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Detective cannot enable the member account, the status remains
 *                   <code>ACCEPTED_BUT_DISABLED</code>. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartMonitoringMemberCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartMonitoringMemberCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new StartMonitoringMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMonitoringMemberCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMemberCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMonitoringMemberCommand = /** @class */ (function (_super) {
    __extends(StartMonitoringMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMonitoringMemberCommand(input) {
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
    StartMonitoringMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "StartMonitoringMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMonitoringMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMonitoringMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartMonitoringMemberCommand(input, context);
    };
    StartMonitoringMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartMonitoringMemberCommand(output, context);
    };
    return StartMonitoringMemberCommand;
}($Command));
export { StartMonitoringMemberCommand };
//# sourceMappingURL=StartMonitoringMemberCommand.js.map