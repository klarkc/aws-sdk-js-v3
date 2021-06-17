"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns descriptive information about an Amazon EKS cluster.</p>
 *         <p>The API server endpoint and certificate authority data returned by this operation are
 *             required for <code>kubelet</code> and <code>kubectl</code> to communicate with your
 *             Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a
 *                 kubeconfig for Amazon EKS</a>.</p>
 *         <note>
 *             <p>The API server endpoint and certificate authority data aren't available until the
 *                 cluster reaches the <code>ACTIVE</code> state.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeClusterCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeClusterResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeClusterCommand(output, context);
    }
}
exports.DescribeClusterCommand = DescribeClusterCommand;
//# sourceMappingURL=DescribeClusterCommand.js.map