import { __extends } from "tslib";
import { RunJobFlowInput, RunJobFlowOutput } from "../models/models_0";
import { deserializeAws_json1_1RunJobFlowCommand, serializeAws_json1_1RunJobFlowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the
 *          steps specified. After the steps complete, the cluster stops and the HDFS partition is
 *          lost. To prevent loss of data, configure the last step of the job flow to store results in
 *          Amazon S3. If the <a>JobFlowInstancesConfig</a>
 *             <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster
 *          transitions to the WAITING state rather than shutting down after the steps have completed. </p>
 *          <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a>
 *             <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and
 *          prevent it from being terminated by API call, user intervention, or in the event of a job
 *          flow error.</p>
 *          <p>A maximum of 256 steps are allowed in each job flow.</p>
 *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
 *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
 *          various ways, including using the SSH shell to connect to the master node and submitting
 *          queries directly to the software running on the master node, such as Hive and Hadoop. For
 *          more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a
 *             Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p>
 *          <p>For long running clusters, we recommend that you periodically store your results.</p>
 *          <note>
 *             <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets
 *             parameters or InstanceGroups parameters, but not both.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RunJobFlowCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RunJobFlowCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new RunJobFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunJobFlowCommandInput} for command's `input` shape.
 * @see {@link RunJobFlowCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RunJobFlowCommand = /** @class */ (function (_super) {
    __extends(RunJobFlowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RunJobFlowCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    RunJobFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "RunJobFlowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RunJobFlowInput.filterSensitiveLog,
            outputFilterSensitiveLog: RunJobFlowOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RunJobFlowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RunJobFlowCommand(input, context);
    };
    RunJobFlowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RunJobFlowCommand(output, context);
    };
    return RunJobFlowCommand;
}($Command));
export { RunJobFlowCommand };
//# sourceMappingURL=RunJobFlowCommand.js.map