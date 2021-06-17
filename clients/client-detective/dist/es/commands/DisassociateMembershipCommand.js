import { __extends } from "tslib";
import { DisassociateMembershipRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateMembershipCommand, serializeAws_restJson1DisassociateMembershipCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the member account from the specified behavior graph. This operation can only be
 *          called by a member account that has the <code>ENABLED</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DisassociateMembershipCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DisassociateMembershipCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new DisassociateMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMembershipCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembershipCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateMembershipCommand = /** @class */ (function (_super) {
    __extends(DisassociateMembershipCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateMembershipCommand(input) {
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
    DisassociateMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "DisassociateMembershipCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateMembershipRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateMembershipCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateMembershipCommand(input, context);
    };
    DisassociateMembershipCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateMembershipCommand(output, context);
    };
    return DisassociateMembershipCommand;
}($Command));
export { DisassociateMembershipCommand };
//# sourceMappingURL=DisassociateMembershipCommand.js.map