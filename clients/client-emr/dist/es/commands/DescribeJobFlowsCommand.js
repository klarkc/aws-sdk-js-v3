import { __extends } from "tslib";
import { DescribeJobFlowsInput, DescribeJobFlowsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeJobFlowsCommand, serializeAws_json1_1DescribeJobFlowsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeJobFlowsCommand = /** @class */ (function (_super) {
    __extends(DescribeJobFlowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeJobFlowsCommand(input) {
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
    DescribeJobFlowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "DescribeJobFlowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeJobFlowsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeJobFlowsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeJobFlowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeJobFlowsCommand(input, context);
    };
    DescribeJobFlowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeJobFlowsCommand(output, context);
    };
    return DescribeJobFlowsCommand;
}($Command));
export { DescribeJobFlowsCommand };
//# sourceMappingURL=DescribeJobFlowsCommand.js.map