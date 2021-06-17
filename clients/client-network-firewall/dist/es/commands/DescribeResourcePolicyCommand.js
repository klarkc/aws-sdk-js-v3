import { __extends } from "tslib";
import { DescribeResourcePolicyRequest, DescribeResourcePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeResourcePolicyCommand, serializeAws_json1_0DescribeResourcePolicyCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeResourcePolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeResourcePolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResourcePolicyCommand = /** @class */ (function (_super) {
    __extends(DescribeResourcePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResourcePolicyCommand(input) {
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
    DescribeResourcePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "DescribeResourcePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResourcePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourcePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResourcePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeResourcePolicyCommand(input, context);
    };
    DescribeResourcePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeResourcePolicyCommand(output, context);
    };
    return DescribeResourcePolicyCommand;
}($Command));
export { DescribeResourcePolicyCommand };
//# sourceMappingURL=DescribeResourcePolicyCommand.js.map