"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupEventsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail.
 *          You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p>
 *          <ul>
 *             <li>
 *                <p>AWS access key</p>
 *             </li>
 *             <li>
 *                <p>Event ID</p>
 *             </li>
 *             <li>
 *                <p>Event name</p>
 *             </li>
 *             <li>
 *                <p>Event source</p>
 *             </li>
 *             <li>
 *                <p>Read only</p>
 *             </li>
 *             <li>
 *                <p>Resource name</p>
 *             </li>
 *             <li>
 *                <p>Resource type</p>
 *             </li>
 *             <li>
 *                <p>User name</p>
 *             </li>
 *          </ul>
 *          <p>Lookup supports the following attributes for Insights events:</p>
 *          <ul>
 *             <li>
 *                <p>Event ID</p>
 *             </li>
 *             <li>
 *                <p>Event name</p>
 *             </li>
 *             <li>
 *                <p>Event source</p>
 *             </li>
 *          </ul>
 *          <p>All attributes are optional. The default number of results returned is 50, with a
 *          maximum of 50 possible. The response includes a token that you can use to get the next page
 *          of results.</p>
 *          <important>
 *             <p>The rate of lookup requests is limited to two per second, per account, per region. If this
 *             limit is exceeded, a throttling error occurs.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, LookupEventsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, LookupEventsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new LookupEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LookupEventsCommandInput} for command's `input` shape.
 * @see {@link LookupEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class LookupEventsCommand extends smithy_client_1.Command {
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
        const clientName = "CloudTrailClient";
        const commandName = "LookupEventsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.LookupEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.LookupEventsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1LookupEventsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1LookupEventsCommand(output, context);
    }
}
exports.LookupEventsCommand = LookupEventsCommand;
//# sourceMappingURL=LookupEventsCommand.js.map