import { __extends } from "tslib";
import { DeregisterWorkspaceDirectoryRequest, DeregisterWorkspaceDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand, serializeAws_json1_1DeregisterWorkspaceDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters the specified directory. This operation is asynchronous
 *          and returns before the WorkSpace directory is deregistered. If any WorkSpaces are
 *       registered to this directory, you must remove them before you can deregister the directory.</p>
 *
 *          <note>
 *             <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces.
 *             If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30
 *             consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces,
 *             and you will be charged for this directory as per the
 *             <a href="http://aws.amazon.com/directoryservice/pricing/">AWS Directory Services pricing terms</a>.</p>
 *
 *             <p>To delete empty directories, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html">
 *                Delete the Directory for Your WorkSpaces</a>. If you delete your
 *             Simple AD or AD Connector directory, you can always create a new one when you want to start using
 *             WorkSpaces again.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeregisterWorkspaceDirectoryCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeregisterWorkspaceDirectoryCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeregisterWorkspaceDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterWorkspaceDirectoryCommandInput} for command's `input` shape.
 * @see {@link DeregisterWorkspaceDirectoryCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterWorkspaceDirectoryCommand = /** @class */ (function (_super) {
    __extends(DeregisterWorkspaceDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterWorkspaceDirectoryCommand(input) {
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
    DeregisterWorkspaceDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DeregisterWorkspaceDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterWorkspaceDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterWorkspaceDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterWorkspaceDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterWorkspaceDirectoryCommand(input, context);
    };
    DeregisterWorkspaceDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand(output, context);
    };
    return DeregisterWorkspaceDirectoryCommand;
}($Command));
export { DeregisterWorkspaceDirectoryCommand };
//# sourceMappingURL=DeregisterWorkspaceDirectoryCommand.js.map