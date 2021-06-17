"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartnerEventSourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Called by an SaaS partner to create a partner event source. This operation is not used by
 *       AWS customers.</p>
 *          <p>Each partner event source can be used by one AWS account to create a matching partner
 *       event bus in that AWS account. A SaaS partner must create one partner event source for each
 *       AWS account that wants to receive those event types. </p>
 *          <p>A partner event source creates events based on resources within the SaaS partner's service
 *       or application.</p>
 *          <p>An AWS account that creates a partner event bus that matches the partner event source can
 *       use that event bus to receive events from the partner, and then process them using AWS Events
 *       rules and targets.</p>
 *          <p>Partner event source names follow this format:</p>
 *          <p>
 *             <code>
 *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
 *             </code>
 *          </p>
 *          <p>
 *             <i>partner_name</i> is determined during partner registration and identifies
 *       the partner to AWS customers. <i>event_namespace</i> is determined by the
 *       partner and is a way for the partner to categorize their events.
 *         <i>event_name</i> is determined by the partner, and should uniquely identify
 *       an event-generating resource within the partner system. The combination of
 *         <i>event_namespace</i> and <i>event_name</i> should help AWS
 *       customers decide whether to create an event bus to receive these events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreatePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreatePartnerEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new CreatePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreatePartnerEventSourceCommand extends smithy_client_1.Command {
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
        const clientName = "EventBridgeClient";
        const commandName = "CreatePartnerEventSourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePartnerEventSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreatePartnerEventSourceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreatePartnerEventSourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreatePartnerEventSourceCommand(output, context);
    }
}
exports.CreatePartnerEventSourceCommand = CreatePartnerEventSourceCommand;
//# sourceMappingURL=CreatePartnerEventSourceCommand.js.map