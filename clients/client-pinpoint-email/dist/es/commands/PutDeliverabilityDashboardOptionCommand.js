import { __extends } from "tslib";
import { PutDeliverabilityDashboardOptionRequest, PutDeliverabilityDashboardOptionResponse } from "../models/models_0";
import { deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand, serializeAws_restJson1PutDeliverabilityDashboardOptionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the
 *             Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for
 *             the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform
 *             predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
 *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutDeliverabilityDashboardOptionCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutDeliverabilityDashboardOptionCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutDeliverabilityDashboardOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDeliverabilityDashboardOptionCommandInput} for command's `input` shape.
 * @see {@link PutDeliverabilityDashboardOptionCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDeliverabilityDashboardOptionCommand = /** @class */ (function (_super) {
    __extends(PutDeliverabilityDashboardOptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDeliverabilityDashboardOptionCommand(input) {
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
    PutDeliverabilityDashboardOptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutDeliverabilityDashboardOptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDeliverabilityDashboardOptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutDeliverabilityDashboardOptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDeliverabilityDashboardOptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutDeliverabilityDashboardOptionCommand(input, context);
    };
    PutDeliverabilityDashboardOptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand(output, context);
    };
    return PutDeliverabilityDashboardOptionCommand;
}($Command));
export { PutDeliverabilityDashboardOptionCommand };
//# sourceMappingURL=PutDeliverabilityDashboardOptionCommand.js.map