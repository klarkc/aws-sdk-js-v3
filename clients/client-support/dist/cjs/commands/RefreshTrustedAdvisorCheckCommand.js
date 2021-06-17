"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTrustedAdvisorCheckCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Refreshes the AWS Trusted Advisor check that you specify using the check ID. You can get the
 *             check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *         <note>
 *             <p>Some checks are refreshed automatically. If you call the
 *                     <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see
 *                 the <code>InvalidParameterValue</code> error.</p>
 *         </note>
 *         <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a>
 *             object.</p>
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
 * import { SupportClient, RefreshTrustedAdvisorCheckCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, RefreshTrustedAdvisorCheckCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new RefreshTrustedAdvisorCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshTrustedAdvisorCheckCommandInput} for command's `input` shape.
 * @see {@link RefreshTrustedAdvisorCheckCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RefreshTrustedAdvisorCheckCommand extends smithy_client_1.Command {
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
        const commandName = "RefreshTrustedAdvisorCheckCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RefreshTrustedAdvisorCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RefreshTrustedAdvisorCheckResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RefreshTrustedAdvisorCheckCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand(output, context);
    }
}
exports.RefreshTrustedAdvisorCheckCommand = RefreshTrustedAdvisorCheckCommand;
//# sourceMappingURL=RefreshTrustedAdvisorCheckCommand.js.map