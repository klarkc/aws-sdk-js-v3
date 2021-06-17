import { __extends } from "tslib";
import { TerminateJobFlowsInput } from "../models/models_0";
import { deserializeAws_json1_1TerminateJobFlowsCommand, serializeAws_json1_1TerminateJobFlowsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut
 *          down, any step not yet completed is canceled and the EC2 instances on which the cluster is
 *          running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri
 *          was specified when the cluster was created.</p>
 *          <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code>
 *          is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5
 *          minutes for the cluster to completely terminate and release allocated resources, such as
 *          Amazon EC2 instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, TerminateJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, TerminateJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new TerminateJobFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateJobFlowsCommandInput} for command's `input` shape.
 * @see {@link TerminateJobFlowsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TerminateJobFlowsCommand = /** @class */ (function (_super) {
    __extends(TerminateJobFlowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TerminateJobFlowsCommand(input) {
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
    TerminateJobFlowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "TerminateJobFlowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TerminateJobFlowsInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TerminateJobFlowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TerminateJobFlowsCommand(input, context);
    };
    TerminateJobFlowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TerminateJobFlowsCommand(output, context);
    };
    return TerminateJobFlowsCommand;
}($Command));
export { TerminateJobFlowsCommand };
//# sourceMappingURL=TerminateJobFlowsCommand.js.map