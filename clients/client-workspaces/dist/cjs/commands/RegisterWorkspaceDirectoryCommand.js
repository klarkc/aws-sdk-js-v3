"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterWorkspaceDirectoryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class RegisterWorkspaceDirectoryCommand extends smithy_client_1.Command {
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
        const commandName = "RegisterWorkspaceDirectoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RegisterWorkspaceDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RegisterWorkspaceDirectoryResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RegisterWorkspaceDirectoryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RegisterWorkspaceDirectoryCommand(output, context);
    }
}
exports.RegisterWorkspaceDirectoryCommand = RegisterWorkspaceDirectoryCommand;
//# sourceMappingURL=RegisterWorkspaceDirectoryCommand.js.map