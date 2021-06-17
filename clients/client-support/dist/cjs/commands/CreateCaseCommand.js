"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCaseCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a case in the AWS Support Center. This operation is similar to how you create a case
 *             in the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create
 *                 Case</a> page.</p>
 *         <p>The AWS Support API doesn't support requesting service limit increases. You can submit a
 *             service limit increase in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>Submit a request from the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
 *             </li>
 *             <li>
 *                 <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p>
 *             </li>
 *          </ul>
 *         <p>A successful <code>CreateCase</code> request returns an AWS Support case number. You can use
 *             the <a>DescribeCases</a> operation and specify the case number to get
 *             existing AWS Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or
 *             attachments to an existing case.</p>
 *         <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in
 *             the <a href="https://console.aws.amazon.com/support">AWS Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p>
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
 * import { SupportClient, CreateCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, CreateCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new CreateCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCaseCommandInput} for command's `input` shape.
 * @see {@link CreateCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateCaseCommand extends smithy_client_1.Command {
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
        const commandName = "CreateCaseCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateCaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateCaseResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateCaseCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateCaseCommand(output, context);
    }
}
exports.CreateCaseCommand = CreateCaseCommand;
//# sourceMappingURL=CreateCaseCommand.js.map