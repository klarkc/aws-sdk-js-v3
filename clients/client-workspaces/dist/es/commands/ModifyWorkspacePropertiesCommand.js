import { __extends } from "tslib";
import { ModifyWorkspacePropertiesRequest, ModifyWorkspacePropertiesResult } from "../models/models_0";
import { deserializeAws_json1_1ModifyWorkspacePropertiesCommand, serializeAws_json1_1ModifyWorkspacePropertiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified WorkSpace properties. For important information about how
 *          to modify the size of the root and user volumes, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">
 *             Modify a WorkSpace</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspacePropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspacePropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspacePropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspacePropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspacePropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyWorkspacePropertiesCommand = /** @class */ (function (_super) {
    __extends(ModifyWorkspacePropertiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyWorkspacePropertiesCommand(input) {
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
    ModifyWorkspacePropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ModifyWorkspacePropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyWorkspacePropertiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyWorkspacePropertiesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyWorkspacePropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyWorkspacePropertiesCommand(input, context);
    };
    ModifyWorkspacePropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyWorkspacePropertiesCommand(output, context);
    };
    return ModifyWorkspacePropertiesCommand;
}($Command));
export { ModifyWorkspacePropertiesCommand };
//# sourceMappingURL=ModifyWorkspacePropertiesCommand.js.map