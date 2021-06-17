import { __extends } from "tslib";
import { DeleteGroupMembershipRequest, DeleteGroupMembershipResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteGroupMembershipCommand, serializeAws_restJson1DeleteGroupMembershipCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a user from a group so that the user is no longer a member of the group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteGroupMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteGroupMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteGroupMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGroupMembershipCommand = /** @class */ (function (_super) {
    __extends(DeleteGroupMembershipCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGroupMembershipCommand(input) {
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
    DeleteGroupMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteGroupMembershipCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGroupMembershipRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGroupMembershipResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGroupMembershipCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteGroupMembershipCommand(input, context);
    };
    DeleteGroupMembershipCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteGroupMembershipCommand(output, context);
    };
    return DeleteGroupMembershipCommand;
}($Command));
export { DeleteGroupMembershipCommand };
//# sourceMappingURL=DeleteGroupMembershipCommand.js.map