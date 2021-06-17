import { __extends } from "tslib";
import { DisassociateMemberFromGroupRequest, DisassociateMemberFromGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateMemberFromGroupCommand, serializeAws_json1_1DisassociateMemberFromGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a member from a group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DisassociateMemberFromGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DisassociateMemberFromGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DisassociateMemberFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberFromGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberFromGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateMemberFromGroupCommand = /** @class */ (function (_super) {
    __extends(DisassociateMemberFromGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateMemberFromGroupCommand(input) {
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
    DisassociateMemberFromGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DisassociateMemberFromGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateMemberFromGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateMemberFromGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateMemberFromGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateMemberFromGroupCommand(input, context);
    };
    DisassociateMemberFromGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateMemberFromGroupCommand(output, context);
    };
    return DisassociateMemberFromGroupCommand;
}($Command));
export { DisassociateMemberFromGroupCommand };
//# sourceMappingURL=DisassociateMemberFromGroupCommand.js.map