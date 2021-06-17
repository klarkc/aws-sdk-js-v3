import { __extends } from "tslib";
import { DescribeFirewallRequest, DescribeFirewallResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeFirewallCommand, serializeAws_json1_0DescribeFirewallCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the data objects for the specified firewall. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFirewallCommandInput} for command's `input` shape.
 * @see {@link DescribeFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFirewallCommand = /** @class */ (function (_super) {
    __extends(DescribeFirewallCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFirewallCommand(input) {
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
    DescribeFirewallCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "DescribeFirewallCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFirewallRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFirewallResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFirewallCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeFirewallCommand(input, context);
    };
    DescribeFirewallCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeFirewallCommand(output, context);
    };
    return DescribeFirewallCommand;
}($Command));
export { DescribeFirewallCommand };
//# sourceMappingURL=DescribeFirewallCommand.js.map