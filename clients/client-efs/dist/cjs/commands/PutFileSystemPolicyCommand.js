"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutFileSystemPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system.
 *       A file system policy is an IAM resource-based policy and can contain multiple policy statements.
 *       A file system always has exactly one file system policy, which can be the default policy or
 *       an explicit policy set or updated using this API operation.
 *       EFS file system policies have a 20,000 character limit.
 *       When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see
 *       <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>.
 *     </p>
 *          <p>EFS file system policies have a 20,000 character limit.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutFileSystemPolicyCommand extends smithy_client_1.Command {
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
        const clientName = "EFSClient";
        const commandName = "PutFileSystemPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutFileSystemPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.FileSystemPolicyDescription.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutFileSystemPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutFileSystemPolicyCommand(output, context);
    }
}
exports.PutFileSystemPolicyCommand = PutFileSystemPolicyCommand;
//# sourceMappingURL=PutFileSystemPolicyCommand.js.map