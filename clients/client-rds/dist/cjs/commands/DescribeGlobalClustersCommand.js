"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeGlobalClustersCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *         Returns information about Aurora global database clusters. This API supports pagination.
 *       </p>
 *          <p>
 *         For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the
 *         <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeGlobalClustersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeGlobalClustersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeGlobalClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalClustersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeGlobalClustersCommand extends smithy_client_1.Command {
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
        const clientName = "RDSClient";
        const commandName = "DescribeGlobalClustersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DescribeGlobalClustersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.GlobalClustersMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeGlobalClustersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeGlobalClustersCommand(output, context);
    }
}
exports.DescribeGlobalClustersCommand = DescribeGlobalClustersCommand;
//# sourceMappingURL=DescribeGlobalClustersCommand.js.map