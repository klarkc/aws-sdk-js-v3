"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutDeliverabilityDashboardOptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 *             access to reputation, deliverability, and other metrics for the domains that you use to
 *             send email. You also gain the ability to perform predictive inbox placement tests.</p>
 *
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other AWS services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDeliverabilityDashboardOptionCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDeliverabilityDashboardOptionCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutDeliverabilityDashboardOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDeliverabilityDashboardOptionCommandInput} for command's `input` shape.
 * @see {@link PutDeliverabilityDashboardOptionCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutDeliverabilityDashboardOptionCommand extends smithy_client_1.Command {
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
        const clientName = "SESv2Client";
        const commandName = "PutDeliverabilityDashboardOptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutDeliverabilityDashboardOptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutDeliverabilityDashboardOptionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutDeliverabilityDashboardOptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand(output, context);
    }
}
exports.PutDeliverabilityDashboardOptionCommand = PutDeliverabilityDashboardOptionCommand;
//# sourceMappingURL=PutDeliverabilityDashboardOptionCommand.js.map