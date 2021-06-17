import { __extends } from "tslib";
import { ListDomainDeliverabilityCampaignsRequest, ListDomainDeliverabilityCampaignsResponse, } from "../models/models_0";
import { deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand, serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation)
 *             for the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListDomainDeliverabilityCampaignsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListDomainDeliverabilityCampaignsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new ListDomainDeliverabilityCampaignsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainDeliverabilityCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListDomainDeliverabilityCampaignsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDomainDeliverabilityCampaignsCommand = /** @class */ (function (_super) {
    __extends(ListDomainDeliverabilityCampaignsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDomainDeliverabilityCampaignsCommand(input) {
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
    ListDomainDeliverabilityCampaignsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "ListDomainDeliverabilityCampaignsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDomainDeliverabilityCampaignsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDomainDeliverabilityCampaignsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDomainDeliverabilityCampaignsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand(input, context);
    };
    ListDomainDeliverabilityCampaignsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand(output, context);
    };
    return ListDomainDeliverabilityCampaignsCommand;
}($Command));
export { ListDomainDeliverabilityCampaignsCommand };
//# sourceMappingURL=ListDomainDeliverabilityCampaignsCommand.js.map