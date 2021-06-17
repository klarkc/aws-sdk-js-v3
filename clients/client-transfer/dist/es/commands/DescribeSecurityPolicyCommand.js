import { __extends } from "tslib";
import { DescribeSecurityPolicyRequest, DescribeSecurityPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeSecurityPolicyCommand, serializeAws_json1_1DescribeSecurityPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the security policy that is attached to your file transfer protocol-enabled
 *       server. The response contains a description of the security policy's properties. For more
 *       information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
 *         policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeSecurityPolicyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeSecurityPolicyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeSecurityPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityPolicyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSecurityPolicyCommand = /** @class */ (function (_super) {
    __extends(DescribeSecurityPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSecurityPolicyCommand(input) {
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
    DescribeSecurityPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "DescribeSecurityPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSecurityPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSecurityPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSecurityPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSecurityPolicyCommand(input, context);
    };
    DescribeSecurityPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSecurityPolicyCommand(output, context);
    };
    return DescribeSecurityPolicyCommand;
}($Command));
export { DescribeSecurityPolicyCommand };
//# sourceMappingURL=DescribeSecurityPolicyCommand.js.map