import { __extends } from "tslib";
import { DescribeInstanceInformationRequest, DescribeInstanceInformationResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeInstanceInformationCommand, serializeAws_json1_1DescribeInstanceInformationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your instances, including information about the operating system
 *    platform, the version of SSM Agent installed on the instance, instance status, and so on.</p>
 *          <p>If you specify one or more instance IDs, it returns information for those instances. If you
 *    do not specify instance IDs, it returns information for all your instances. If you specify an
 *    instance ID that is not valid or an instance that you do not own, you receive an error.</p>
 *          <note>
 *             <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM)
 *     role assigned to on-premises instances. This call does not return the IAM role for EC2
 *     instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstanceInformationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstanceInformationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInstanceInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceInformationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceInformationCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceInformationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceInformationCommand(input) {
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
    DescribeInstanceInformationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeInstanceInformationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceInformationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceInformationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceInformationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInstanceInformationCommand(input, context);
    };
    DescribeInstanceInformationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInstanceInformationCommand(output, context);
    };
    return DescribeInstanceInformationCommand;
}($Command));
export { DescribeInstanceInformationCommand };
//# sourceMappingURL=DescribeInstanceInformationCommand.js.map