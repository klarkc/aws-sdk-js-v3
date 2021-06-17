import { __extends } from "tslib";
import { ModifyWorkspaceCreationPropertiesRequest, ModifyWorkspaceCreationPropertiesResult } from "../models/models_0";
import { deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand, serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modify the default properties used to create WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceCreationPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceCreationPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspaceCreationPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspaceCreationPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceCreationPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyWorkspaceCreationPropertiesCommand = /** @class */ (function (_super) {
    __extends(ModifyWorkspaceCreationPropertiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyWorkspaceCreationPropertiesCommand(input) {
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
    ModifyWorkspaceCreationPropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ModifyWorkspaceCreationPropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyWorkspaceCreationPropertiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyWorkspaceCreationPropertiesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyWorkspaceCreationPropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(input, context);
    };
    ModifyWorkspaceCreationPropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(output, context);
    };
    return ModifyWorkspaceCreationPropertiesCommand;
}($Command));
export { ModifyWorkspaceCreationPropertiesCommand };
//# sourceMappingURL=ModifyWorkspaceCreationPropertiesCommand.js.map