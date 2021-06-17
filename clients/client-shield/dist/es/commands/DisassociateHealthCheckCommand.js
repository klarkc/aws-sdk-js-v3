import { __extends } from "tslib";
import { DisassociateHealthCheckRequest, DisassociateHealthCheckResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateHealthCheckCommand, serializeAws_json1_1DisassociateHealthCheckCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation. </p>
 *          <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateHealthCheckCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateHealthCheckCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisassociateHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DisassociateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateHealthCheckCommand = /** @class */ (function (_super) {
    __extends(DisassociateHealthCheckCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateHealthCheckCommand(input) {
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
    DisassociateHealthCheckCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DisassociateHealthCheckCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateHealthCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateHealthCheckResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateHealthCheckCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateHealthCheckCommand(input, context);
    };
    DisassociateHealthCheckCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateHealthCheckCommand(output, context);
    };
    return DisassociateHealthCheckCommand;
}($Command));
export { DisassociateHealthCheckCommand };
//# sourceMappingURL=DisassociateHealthCheckCommand.js.map