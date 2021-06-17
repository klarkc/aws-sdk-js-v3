"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetTerminationProtectionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class SetTerminationProtectionCommand extends smithy_client_1.Command {
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
        const commandName = "SetTerminationProtectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SetTerminationProtectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1SetTerminationProtectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1SetTerminationProtectionCommand(output, context);
    }
}
exports.SetTerminationProtectionCommand = SetTerminationProtectionCommand;
//# sourceMappingURL=SetTerminationProtectionCommand.js.map