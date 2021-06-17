import { __extends } from "tslib";
import { CreateCanaryRequest, CreateCanaryResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCanaryCommand, serializeAws_restJson1CreateCanaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateCanaryCommand = /** @class */ (function (_super) {
    __extends(CreateCanaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCanaryCommand(input) {
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
    CreateCanaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "CreateCanaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCanaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCanaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCanaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCanaryCommand(input, context);
    };
    CreateCanaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCanaryCommand(output, context);
    };
    return CreateCanaryCommand;
}($Command));
export { CreateCanaryCommand };
//# sourceMappingURL=CreateCanaryCommand.js.map