"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeJobFlowsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * @deprecated
 *
 * <p>This API is no longer supported and will eventually be removed. We recommend you use
 *             <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p>
 *          <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters.
 *          The parameters can include a list of job flow IDs, job flow states, and restrictions on job
 *          flow creation date and time.</p>
 *          <p>Regardless of supplied parameters, only job flows created within the last two months are
 *          returned.</p>
 *          <p>If no parameters are supplied, then job flows matching either of the following criteria
 *          are returned:</p>
 *          <ul>
 *             <li>
 *                <p>Job flows created and completed in the last two weeks</p>
 *             </li>
 *             <li>
 *                <p> Job flows created within the last two months that are in one of the following
 *                states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>,
 *                   <code>STARTING</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeJobFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobFlowsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobFlowsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeJobFlowsCommand extends smithy_client_1.Command {
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
        const clientName = "EMRClient";
        const commandName = "DescribeJobFlowsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeJobFlowsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeJobFlowsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeJobFlowsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeJobFlowsCommand(output, context);
    }
}
exports.DescribeJobFlowsCommand = DescribeJobFlowsCommand;
//# sourceMappingURL=DescribeJobFlowsCommand.js.map