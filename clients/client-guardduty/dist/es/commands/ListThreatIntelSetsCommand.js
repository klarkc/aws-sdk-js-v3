import { __extends } from "tslib";
import { ListThreatIntelSetsRequest, ListThreatIntelSetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListThreatIntelSetsCommand, serializeAws_restJson1ListThreatIntelSetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you
 *       use this operation from a member account, the ThreatIntelSets associated with the administrator
 *       account are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListThreatIntelSetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListThreatIntelSetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListThreatIntelSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThreatIntelSetsCommandInput} for command's `input` shape.
 * @see {@link ListThreatIntelSetsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThreatIntelSetsCommand = /** @class */ (function (_super) {
    __extends(ListThreatIntelSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThreatIntelSetsCommand(input) {
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
    ListThreatIntelSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ListThreatIntelSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThreatIntelSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThreatIntelSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThreatIntelSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThreatIntelSetsCommand(input, context);
    };
    ListThreatIntelSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThreatIntelSetsCommand(output, context);
    };
    return ListThreatIntelSetsCommand;
}($Command));
export { ListThreatIntelSetsCommand };
//# sourceMappingURL=ListThreatIntelSetsCommand.js.map