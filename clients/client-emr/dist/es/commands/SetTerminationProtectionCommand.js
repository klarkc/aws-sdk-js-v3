import { __extends } from "tslib";
import { SetTerminationProtectionInput } from "../models/models_0";
import { deserializeAws_json1_1SetTerminationProtectionCommand, serializeAws_json1_1SetTerminationProtectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster
 *          cannot be terminated by user intervention, an API call, or in the event of a job-flow
 *          error. The cluster still terminates upon successful completion of the job flow. Calling
 *             <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2
 *             <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p>
 *          <p>
 *             <code>SetTerminationProtection</code> is used to prevent accidental termination of a
 *          cluster and to ensure that in the event of an error, the instances persist so that you can
 *          recover any data stored in their ephemeral instance storage.</p>
 *          <p> To terminate a cluster that has been locked by setting
 *             <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the
 *          job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the
 *          value to <code>false</code>. </p>
 *          <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster
 *             Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetTerminationProtectionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetTerminationProtectionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new SetTerminationProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTerminationProtectionCommandInput} for command's `input` shape.
 * @see {@link SetTerminationProtectionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetTerminationProtectionCommand = /** @class */ (function (_super) {
    __extends(SetTerminationProtectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetTerminationProtectionCommand(input) {
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
    SetTerminationProtectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "SetTerminationProtectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetTerminationProtectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetTerminationProtectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetTerminationProtectionCommand(input, context);
    };
    SetTerminationProtectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetTerminationProtectionCommand(output, context);
    };
    return SetTerminationProtectionCommand;
}($Command));
export { SetTerminationProtectionCommand };
//# sourceMappingURL=SetTerminationProtectionCommand.js.map