import { __extends } from "tslib";
import { AssociateHealthCheckRequest, AssociateHealthCheckResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateHealthCheckCommand, serializeAws_json1_1AssociateHealthCheckCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation.  </p>
 *          <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, AssociateHealthCheckCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, AssociateHealthCheckCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new AssociateHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link AssociateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateHealthCheckCommand = /** @class */ (function (_super) {
    __extends(AssociateHealthCheckCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateHealthCheckCommand(input) {
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
    AssociateHealthCheckCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "AssociateHealthCheckCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateHealthCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateHealthCheckResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateHealthCheckCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateHealthCheckCommand(input, context);
    };
    AssociateHealthCheckCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateHealthCheckCommand(output, context);
    };
    return AssociateHealthCheckCommand;
}($Command));
export { AssociateHealthCheckCommand };
//# sourceMappingURL=AssociateHealthCheckCommand.js.map