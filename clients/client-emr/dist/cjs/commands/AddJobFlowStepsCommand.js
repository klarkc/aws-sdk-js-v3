"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddJobFlowStepsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed
 *          in each job flow.</p>
 *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
 *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
 *          various ways, including using SSH to connect to the master node and submitting queries
 *          directly to the software running on the master node, such as Hive and Hadoop. For more
 *          information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a
 *             Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p>
 *          <p>A step specifies the location of a JAR file stored either on the master node of the
 *          cluster or in Amazon S3. Each step is performed by the main function of the main class of
 *          the JAR file. The main class can be specified either in the manifest of the JAR or by using
 *          the MainFunction parameter of the step.</p>
 *          <p>Amazon EMR executes each step in the order listed. For a step to be considered complete,
 *          the main function must exit with a zero exit code and all Hadoop jobs started while the
 *          step was running must have completed and run successfully.</p>
 *          <p>You can only add steps to a cluster that is in one of the following states: STARTING,
 *          BOOTSTRAPPING, RUNNING, or WAITING.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddJobFlowStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddJobFlowStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddJobFlowStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddJobFlowStepsCommandInput} for command's `input` shape.
 * @see {@link AddJobFlowStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddJobFlowStepsCommand extends smithy_client_1.Command {
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
        const commandName = "AddJobFlowStepsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddJobFlowStepsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddJobFlowStepsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AddJobFlowStepsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AddJobFlowStepsCommand(output, context);
    }
}
exports.AddJobFlowStepsCommand = AddJobFlowStepsCommand;
//# sourceMappingURL=AddJobFlowStepsCommand.js.map