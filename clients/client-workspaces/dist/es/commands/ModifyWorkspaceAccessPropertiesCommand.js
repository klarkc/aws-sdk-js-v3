import { __extends } from "tslib";
import { ModifyWorkspaceAccessPropertiesRequest, ModifyWorkspaceAccessPropertiesResult } from "../models/models_0";
import { deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand, serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specifies which devices and operating systems users can use to access their WorkSpaces.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access">
 *             Control Device Access</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceAccessPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceAccessPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspaceAccessPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspaceAccessPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceAccessPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyWorkspaceAccessPropertiesCommand = /** @class */ (function (_super) {
    __extends(ModifyWorkspaceAccessPropertiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyWorkspaceAccessPropertiesCommand(input) {
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
    ModifyWorkspaceAccessPropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ModifyWorkspaceAccessPropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyWorkspaceAccessPropertiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyWorkspaceAccessPropertiesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyWorkspaceAccessPropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(input, context);
    };
    ModifyWorkspaceAccessPropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(output, context);
    };
    return ModifyWorkspaceAccessPropertiesCommand;
}($Command));
export { ModifyWorkspaceAccessPropertiesCommand };
//# sourceMappingURL=ModifyWorkspaceAccessPropertiesCommand.js.map