"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Changes the size of the cluster. You can change the cluster's type, or change the
 *             number or type of nodes. The default behavior is to use the elastic resize method. With
 *             an elastic resize, your cluster is available for read and write operations more quickly
 *             than with the classic resize method. </p>
 *         <p>Elastic resize operations have the following restrictions:</p>
 *         <ul>
 *             <li>
 *                 <p>You can only resize clusters of the following types:</p>
 *                 <ul>
 *                   <li>
 *                         <p>dc1.large (if your cluster is in a VPC)</p>
 *                     </li>
 *                   <li>
 *                         <p>dc1.8xlarge (if your cluster is in a VPC)</p>
 *                     </li>
 *                   <li>
 *                         <p>dc2.large</p>
 *                     </li>
 *                   <li>
 *                         <p>dc2.8xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ds2.xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ds2.8xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.xlplus</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.4xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.16xlarge</p>
 *                     </li>
 *                </ul>
 *             </li>
 *             <li>
 *                 <p>The type of nodes that you add must match the node type for the
 *                     cluster.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResizeClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResizeClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ResizeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResizeClusterCommandInput} for command's `input` shape.
 * @see {@link ResizeClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResizeClusterCommand extends smithy_client_1.Command {
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
        const clientName = "RedshiftClient";
        const commandName = "ResizeClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ResizeClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ResizeClusterResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryResizeClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryResizeClusterCommand(output, context);
    }
}
exports.ResizeClusterCommand = ResizeClusterCommand;
//# sourceMappingURL=ResizeClusterCommand.js.map