"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeCasesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of cases that you specify by passing one or more case IDs. You can use
 *             the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by
 *             date. You can set values for the <code>includeResolvedCases</code> and
 *                 <code>includeCommunications</code> parameters to specify how much information to
 *             return.</p>
 *         <p>The response returns the following in JSON format:</p>
 *         <ul>
 *             <li>
 *                 <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p>
 *             </li>
 *             <li>
 *                 <p>One or more <code>nextToken</code> values, which specify where to paginate the
 *                     returned records represented by the <code>CaseDetails</code> objects.</p>
 *             </li>
 *          </ul>
 *         <p>Case data is available for 12 months after creation. If a case was created more than
 *             12 months ago, a request might return an error.</p>
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
 * import { SupportClient, DescribeCasesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCasesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeCasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCasesCommandInput} for command's `input` shape.
 * @see {@link DescribeCasesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeCasesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeCasesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeCasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeCasesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeCasesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeCasesCommand(output, context);
    }
}
exports.DescribeCasesCommand = DescribeCasesCommand;
//# sourceMappingURL=DescribeCasesCommand.js.map