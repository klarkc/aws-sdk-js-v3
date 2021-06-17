import { __extends } from "tslib";
import { RegisterWorkspaceDirectoryRequest, RegisterWorkspaceDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1RegisterWorkspaceDirectoryCommand, serializeAws_json1_1RegisterWorkspaceDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers the specified directory. This operation is asynchronous
 *          and returns before the WorkSpace directory is registered. If this is the first time you are
 *          registering a directory, you will need to create the workspaces_DefaultRole role before you can
 *          register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">
 *             Creating the workspaces_DefaultRole Role</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RegisterWorkspaceDirectoryCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RegisterWorkspaceDirectoryCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RegisterWorkspaceDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterWorkspaceDirectoryCommandInput} for command's `input` shape.
 * @see {@link RegisterWorkspaceDirectoryCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterWorkspaceDirectoryCommand = /** @class */ (function (_super) {
    __extends(RegisterWorkspaceDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterWorkspaceDirectoryCommand(input) {
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
    RegisterWorkspaceDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "RegisterWorkspaceDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterWorkspaceDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterWorkspaceDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterWorkspaceDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterWorkspaceDirectoryCommand(input, context);
    };
    RegisterWorkspaceDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterWorkspaceDirectoryCommand(output, context);
    };
    return RegisterWorkspaceDirectoryCommand;
}($Command));
export { RegisterWorkspaceDirectoryCommand };
//# sourceMappingURL=RegisterWorkspaceDirectoryCommand.js.map