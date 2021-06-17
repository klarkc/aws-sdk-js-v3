"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeregisterWorkspaceDirectoryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DeregisterWorkspaceDirectoryCommand extends smithy_client_1.Command {
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
        const commandName = "DeregisterWorkspaceDirectoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeregisterWorkspaceDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeregisterWorkspaceDirectoryResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeregisterWorkspaceDirectoryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand(output, context);
    }
}
exports.DeregisterWorkspaceDirectoryCommand = DeregisterWorkspaceDirectoryCommand;
//# sourceMappingURL=DeregisterWorkspaceDirectoryCommand.js.map