"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNodegroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group
 *             for your cluster that is equal to the current Kubernetes version for the cluster. All
 *             node groups are created with the latest AMI release version for the respective minor
 *             Kubernetes version of the cluster, unless you deploy a custom AMI using a launch
 *             template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch
 *                 template support</a>.</p>
 *         <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that
 *             are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS
 *             optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed
 *                 Node Groups</a> in the <i>Amazon EKS User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new CreateNodegroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNodegroupCommandInput} for command's `input` shape.
 * @see {@link CreateNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateNodegroupCommand extends smithy_client_1.Command {
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
        const clientName = "EKSClient";
        const commandName = "CreateNodegroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateNodegroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateNodegroupResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateNodegroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateNodegroupCommand(output, context);
    }
}
exports.CreateNodegroupCommand = CreateNodegroupCommand;
//# sourceMappingURL=CreateNodegroupCommand.js.map