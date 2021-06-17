import { __extends } from "tslib";
import { DescribeWorkforceRequest } from "../models/models_1";
import { DescribeWorkforceResponse } from "../models/models_2";
import { deserializeAws_json1_1DescribeWorkforceCommand, serializeAws_json1_1DescribeWorkforceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists private workforce information, including workforce name, Amazon Resource Name
 *             (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address
 *             ranges are the IP addresses that workers can use to access tasks. </p>
 *         <important>
 *             <p>This operation applies only to private workforces.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkforceCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkforceCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkforceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkforceCommand(input) {
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
    DescribeWorkforceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeWorkforceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkforceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkforceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkforceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkforceCommand(input, context);
    };
    DescribeWorkforceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkforceCommand(output, context);
    };
    return DescribeWorkforceCommand;
}($Command));
export { DescribeWorkforceCommand };
//# sourceMappingURL=DescribeWorkforceCommand.js.map