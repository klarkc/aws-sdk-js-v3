import { __extends } from "tslib";
import { GetDomainDeliverabilityCampaignRequest, GetDomainDeliverabilityCampaignResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand, serializeAws_restJson1GetDomainDeliverabilityCampaignCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve all the deliverability data for a specific campaign. This data is available
 *             for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDomainDeliverabilityCampaignCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDomainDeliverabilityCampaignCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetDomainDeliverabilityCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainDeliverabilityCampaignCommandInput} for command's `input` shape.
 * @see {@link GetDomainDeliverabilityCampaignCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainDeliverabilityCampaignCommand = /** @class */ (function (_super) {
    __extends(GetDomainDeliverabilityCampaignCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDomainDeliverabilityCampaignCommand(input) {
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
    GetDomainDeliverabilityCampaignCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetDomainDeliverabilityCampaignCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDomainDeliverabilityCampaignRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDomainDeliverabilityCampaignResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDomainDeliverabilityCampaignCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDomainDeliverabilityCampaignCommand(input, context);
    };
    GetDomainDeliverabilityCampaignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand(output, context);
    };
    return GetDomainDeliverabilityCampaignCommand;
}($Command));
export { GetDomainDeliverabilityCampaignCommand };
//# sourceMappingURL=GetDomainDeliverabilityCampaignCommand.js.map