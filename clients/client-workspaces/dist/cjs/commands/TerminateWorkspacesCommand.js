"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminateWorkspacesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class TerminateWorkspacesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "WorkSpacesClient";
        const commandName = "TerminateWorkspacesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.TerminateWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.TerminateWorkspacesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1TerminateWorkspacesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1TerminateWorkspacesCommand(output, context);
    }
}
exports.TerminateWorkspacesCommand = TerminateWorkspacesCommand;
//# sourceMappingURL=TerminateWorkspacesCommand.js.map