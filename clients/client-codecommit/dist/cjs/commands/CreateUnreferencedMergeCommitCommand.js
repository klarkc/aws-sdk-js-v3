"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUnreferencedMergeCommitCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an unreferenced commit that represents the result of merging two branches
 *             using a specified merge strategy. This can help you determine the outcome of a potential
 *             merge. This API cannot be used with the fast-forward merge strategy because that
 *             strategy does not create a merge commit.</p>
 *         <note>
 *             <p>This unreferenced merge commit
 *         can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateUnreferencedMergeCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateUnreferencedMergeCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateUnreferencedMergeCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUnreferencedMergeCommitCommandInput} for command's `input` shape.
 * @see {@link CreateUnreferencedMergeCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateUnreferencedMergeCommitCommand extends smithy_client_1.Command {
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
        const clientName = "CodeCommitClient";
        const commandName = "CreateUnreferencedMergeCommitCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateUnreferencedMergeCommitInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateUnreferencedMergeCommitOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateUnreferencedMergeCommitCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateUnreferencedMergeCommitCommand(output, context);
    }
}
exports.CreateUnreferencedMergeCommitCommand = CreateUnreferencedMergeCommitCommand;
//# sourceMappingURL=CreateUnreferencedMergeCommitCommand.js.map