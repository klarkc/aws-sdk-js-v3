import { __extends } from "tslib";
import { ListIPSetsRequest, ListIPSetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListIPSetsCommand, serializeAws_restJson1ListIPSetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this
 *       operation from a member account, the IPSets returned are the IPSets from the associated administrator
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListIPSetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListIPSetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListIPSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIPSetsCommandInput} for command's `input` shape.
 * @see {@link ListIPSetsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIPSetsCommand = /** @class */ (function (_super) {
    __extends(ListIPSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIPSetsCommand(input) {
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
    ListIPSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ListIPSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIPSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIPSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIPSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIPSetsCommand(input, context);
    };
    ListIPSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIPSetsCommand(output, context);
    };
    return ListIPSetsCommand;
}($Command));
export { ListIPSetsCommand };
//# sourceMappingURL=ListIPSetsCommand.js.map