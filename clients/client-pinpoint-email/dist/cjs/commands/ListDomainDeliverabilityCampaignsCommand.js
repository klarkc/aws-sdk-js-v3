"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDomainDeliverabilityCampaignsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class ListDomainDeliverabilityCampaignsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PinpointEmailClient";
        const commandName = "ListDomainDeliverabilityCampaignsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListDomainDeliverabilityCampaignsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListDomainDeliverabilityCampaignsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand(output, context);
    }
}
exports.ListDomainDeliverabilityCampaignsCommand = ListDomainDeliverabilityCampaignsCommand;
//# sourceMappingURL=ListDomainDeliverabilityCampaignsCommand.js.map