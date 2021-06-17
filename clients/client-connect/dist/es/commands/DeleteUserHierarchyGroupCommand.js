import { __extends } from "tslib";
import { DeleteUserHierarchyGroupRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteUserHierarchyGroupCommand, serializeAws_restJson1DeleteUserHierarchyGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing user hierarchy group. It must not be associated with any agents or have
 *    any active child groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserHierarchyGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteUserHierarchyGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserHierarchyGroupCommand(input) {
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
    DeleteUserHierarchyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DeleteUserHierarchyGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserHierarchyGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserHierarchyGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteUserHierarchyGroupCommand(input, context);
    };
    DeleteUserHierarchyGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteUserHierarchyGroupCommand(output, context);
    };
    return DeleteUserHierarchyGroupCommand;
}($Command));
export { DeleteUserHierarchyGroupCommand };
//# sourceMappingURL=DeleteUserHierarchyGroupCommand.js.map