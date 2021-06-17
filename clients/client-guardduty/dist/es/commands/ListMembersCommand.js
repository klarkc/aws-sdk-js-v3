import { __extends } from "tslib";
import { ListMembersRequest, ListMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListMembersCommand, serializeAws_restJson1ListMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists details about all member accounts for the current GuardDuty administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMembersCommandInput} for command's `input` shape.
 * @see {@link ListMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMembersCommand = /** @class */ (function (_super) {
    __extends(ListMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMembersCommand(input) {
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
    ListMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ListMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListMembersCommand(input, context);
    };
    ListMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListMembersCommand(output, context);
    };
    return ListMembersCommand;
}($Command));
export { ListMembersCommand };
//# sourceMappingURL=ListMembersCommand.js.map