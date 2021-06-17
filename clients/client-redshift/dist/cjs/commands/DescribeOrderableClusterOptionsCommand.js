"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeOrderableClusterOptionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of orderable cluster options. Before you create a new cluster you
 *             can use this operation to find what options are available, such as the EC2 Availability
 *             Zones (AZ) in the specific AWS Region that you can specify, and the node types you can
 *             request. The node types differ by available storage, memory, CPU and price. With the
 *             cost involved you might want to obtain a list of cluster options in the specific region
 *             and specify values when creating a cluster.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeOrderableClusterOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeOrderableClusterOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeOrderableClusterOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableClusterOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableClusterOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeOrderableClusterOptionsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeOrderableClusterOptionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeOrderableClusterOptionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.OrderableClusterOptionsMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeOrderableClusterOptionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeOrderableClusterOptionsCommand(output, context);
    }
}
exports.DescribeOrderableClusterOptionsCommand = DescribeOrderableClusterOptionsCommand;
//# sourceMappingURL=DescribeOrderableClusterOptionsCommand.js.map