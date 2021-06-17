"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMountTargetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified mount target.</p>
 *
 *          <p>This operation forcibly breaks any mounts of the file system by using the mount target
 *       that is being deleted, which might disrupt instances or applications using those mounts. To
 *       avoid applications getting cut off abruptly, you might consider unmounting any mounts of the
 *       mount target, if feasible. The operation also deletes the associated network interface.
 *       Uncommitted writes might be lost, but breaking a mount target using this operation does not
 *       corrupt the file system itself. The file system you created remains. You can mount an EC2
 *       instance in your VPC by using another mount target.</p>
 *          <p>This operation requires permissions for the following action on the file
 *       system:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:DeleteMountTarget</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still
 *           <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target
 *         descriptions for the given file system. </p>
 *          </note>
 *
 *          <p>The operation also requires permissions for the following Amazon EC2 action on the
 *       mount target's network interface:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ec2:DeleteNetworkInterface</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteMountTargetCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteMountTargetCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DeleteMountTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMountTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteMountTargetCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteMountTargetCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteMountTargetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteMountTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteMountTargetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteMountTargetCommand(output, context);
    }
}
exports.DeleteMountTargetCommand = DeleteMountTargetCommand;
//# sourceMappingURL=DeleteMountTargetCommand.js.map