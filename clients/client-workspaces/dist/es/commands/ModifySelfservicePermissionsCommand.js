import { __extends } from "tslib";
import { ModifySelfservicePermissionsRequest, ModifySelfservicePermissionsResult } from "../models/models_0";
import { deserializeAws_json1_1ModifySelfservicePermissionsCommand, serializeAws_json1_1ModifySelfservicePermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the self-service WorkSpace management capabilities for your users. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifySelfservicePermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifySelfservicePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifySelfservicePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySelfservicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifySelfservicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifySelfservicePermissionsCommand = /** @class */ (function (_super) {
    __extends(ModifySelfservicePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifySelfservicePermissionsCommand(input) {
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
    ModifySelfservicePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ModifySelfservicePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifySelfservicePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifySelfservicePermissionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifySelfservicePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifySelfservicePermissionsCommand(input, context);
    };
    ModifySelfservicePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifySelfservicePermissionsCommand(output, context);
    };
    return ModifySelfservicePermissionsCommand;
}($Command));
export { ModifySelfservicePermissionsCommand };
//# sourceMappingURL=ModifySelfservicePermissionsCommand.js.map