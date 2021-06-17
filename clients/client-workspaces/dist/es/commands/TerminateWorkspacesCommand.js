import { __extends } from "tslib";
import { TerminateWorkspacesRequest, TerminateWorkspacesResult } from "../models/models_0";
import { deserializeAws_json1_1TerminateWorkspacesCommand, serializeAws_json1_1TerminateWorkspacesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Terminates the specified WorkSpaces.</p>
 *
 *          <important>
 *             <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is
 *             destroyed. If you need to archive any user data, contact AWS Support before
 *             terminating the WorkSpace.</p>
 *          </important>
 *
 *          <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
 *          terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned
 *          only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
 *          returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
 *             DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has
 *          been successfully terminated.</p>
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
 * import { WorkSpacesClient, TerminateWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, TerminateWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new TerminateWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateWorkspacesCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TerminateWorkspacesCommand = /** @class */ (function (_super) {
    __extends(TerminateWorkspacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TerminateWorkspacesCommand(input) {
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
    TerminateWorkspacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "TerminateWorkspacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TerminateWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TerminateWorkspacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TerminateWorkspacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TerminateWorkspacesCommand(input, context);
    };
    TerminateWorkspacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TerminateWorkspacesCommand(output, context);
    };
    return TerminateWorkspacesCommand;
}($Command));
export { TerminateWorkspacesCommand };
//# sourceMappingURL=TerminateWorkspacesCommand.js.map