import { __extends } from "tslib";
import { RestoreWorkspaceRequest, RestoreWorkspaceResult } from "../models/models_0";
import { deserializeAws_json1_1RestoreWorkspaceCommand, serializeAws_json1_1RestoreWorkspaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores the specified WorkSpace to its last known healthy state.</p>
 *          <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p>
 *          <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of
 *          data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpace is completely
 *          restored.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RestoreWorkspaceCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RestoreWorkspaceCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RestoreWorkspaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreWorkspaceCommandInput} for command's `input` shape.
 * @see {@link RestoreWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreWorkspaceCommand = /** @class */ (function (_super) {
    __extends(RestoreWorkspaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreWorkspaceCommand(input) {
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
    RestoreWorkspaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "RestoreWorkspaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreWorkspaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreWorkspaceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreWorkspaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RestoreWorkspaceCommand(input, context);
    };
    RestoreWorkspaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RestoreWorkspaceCommand(output, context);
    };
    return RestoreWorkspaceCommand;
}($Command));
export { RestoreWorkspaceCommand };
//# sourceMappingURL=RestoreWorkspaceCommand.js.map