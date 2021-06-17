"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeCommunicationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns communications and attachments for one or more support cases. Use the
 *                 <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You
 *             can use the <code>caseId</code> parameter to restrict the results to a specific
 *             case.</p>
 *         <p>Case data is available for 12 months after creation. If a case was created more than
 *             12 months ago, a request for data might cause an error.</p>
 *         <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to
 *             control the pagination of the results. Set <code>maxResults</code> to the number of
 *             cases that you want to display on each page, and use <code>nextToken</code> to specify
 *             the resumption of pagination.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeCommunicationsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCommunicationsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeCommunicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCommunicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommunicationsCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeCommunicationsCommand extends smithy_client_1.Command {
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
        const clientName = "SupportClient";
        const commandName = "DescribeCommunicationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeCommunicationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeCommunicationsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeCommunicationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeCommunicationsCommand(output, context);
    }
}
exports.DescribeCommunicationsCommand = DescribeCommunicationsCommand;
//# sourceMappingURL=DescribeCommunicationsCommand.js.map