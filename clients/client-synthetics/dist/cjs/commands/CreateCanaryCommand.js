"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCanaryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the
 *          outside-in. Canaries help you check the availability and latency of your web services and
 *          troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and
 *          metrics. You can set up a canary to run continuously or just once. </p>
 *          <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p>
 *          <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy.
 *          If you are creating a new IAM role for the canary, you also need the
 *          the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and
 *             <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary
 *             Roles and Permissions</a>.</p>
 *          <p>Do not include secrets or proprietary information in your canary names. The canary name
 *          makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in
 *          outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, CreateCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, CreateCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new CreateCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCanaryCommandInput} for command's `input` shape.
 * @see {@link CreateCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateCanaryCommand extends smithy_client_1.Command {
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
        const clientName = "SyntheticsClient";
        const commandName = "CreateCanaryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateCanaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateCanaryResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateCanaryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateCanaryCommand(output, context);
    }
}
exports.CreateCanaryCommand = CreateCanaryCommand;
//# sourceMappingURL=CreateCanaryCommand.js.map