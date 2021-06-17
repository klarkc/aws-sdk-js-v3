import { __extends } from "tslib";
import { CreateFirewallRequest, CreateFirewallResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateFirewallCommand, serializeAws_json1_0CreateFirewallCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p>
 *          <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p>
 *          <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p>
 *          <p>To update the settings for a firewall, you use the operations that apply to the settings
 *          themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p>
 *          <p>To manage a firewall's tags, use the standard AWS resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new CreateFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFirewallCommand = /** @class */ (function (_super) {
    __extends(CreateFirewallCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFirewallCommand(input) {
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
    CreateFirewallCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "CreateFirewallCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFirewallRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFirewallResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFirewallCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateFirewallCommand(input, context);
    };
    CreateFirewallCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateFirewallCommand(output, context);
    };
    return CreateFirewallCommand;
}($Command));
export { CreateFirewallCommand };
//# sourceMappingURL=CreateFirewallCommand.js.map