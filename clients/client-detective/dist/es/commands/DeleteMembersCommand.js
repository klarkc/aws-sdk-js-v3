import { __extends } from "tslib";
import { DeleteMembersRequest, DeleteMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteMembersCommand, serializeAws_restJson1DeleteMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more member accounts from the administrator account's behavior graph.
 *          This operation can only be called by a Detective administrator account. That account cannot use
 *             <code>DeleteMembers</code> to delete their own account from the behavior graph. To
 *          disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API
 *          method.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DeleteMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DeleteMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new DeleteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMembersCommandInput} for command's `input` shape.
 * @see {@link DeleteMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMembersCommand = /** @class */ (function (_super) {
    __extends(DeleteMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMembersCommand(input) {
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
    DeleteMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "DeleteMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteMembersCommand(input, context);
    };
    DeleteMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteMembersCommand(output, context);
    };
    return DeleteMembersCommand;
}($Command));
export { DeleteMembersCommand };
//# sourceMappingURL=DeleteMembersCommand.js.map