import { __extends } from "tslib";
import { ModifyWorkspaceStateRequest, ModifyWorkspaceStateResult } from "../models/models_0";
import { deserializeAws_json1_1ModifyWorkspaceStateCommand, serializeAws_json1_1ModifyWorkspaceStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the state of the specified WorkSpace.</p>
 *          <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to
 *             <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to
 *          reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
 *          stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code>
 *          state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceStateCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceStateCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspaceStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspaceStateCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceStateCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyWorkspaceStateCommand = /** @class */ (function (_super) {
    __extends(ModifyWorkspaceStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyWorkspaceStateCommand(input) {
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
    ModifyWorkspaceStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ModifyWorkspaceStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyWorkspaceStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyWorkspaceStateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyWorkspaceStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyWorkspaceStateCommand(input, context);
    };
    ModifyWorkspaceStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyWorkspaceStateCommand(output, context);
    };
    return ModifyWorkspaceStateCommand;
}($Command));
export { ModifyWorkspaceStateCommand };
//# sourceMappingURL=ModifyWorkspaceStateCommand.js.map