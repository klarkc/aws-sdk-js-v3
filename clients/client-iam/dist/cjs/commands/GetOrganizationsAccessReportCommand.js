"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrganizationsAccessReportCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated
 *             using the <code>
 *                <a>GenerateOrganizationsAccessReport</a>
 *             </code> operation.
 *             This operation retrieves the status of your report job and the report contents.</p>
 *         <p>Depending on the parameters that you passed when you generated the report, the data
 *             returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p>
 *         <p>To call this operation, you must be signed in to the management account in your
 *             organization. SCPs must be enabled for your organization root. You must have permissions
 *             to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using
 *                 service last accessed data</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For each service that principals in an account (root users, IAM users, or IAM
 *             roles) could access using SCPs, the operation returns details about the most recent
 *             access attempt. If there was no attempt, the service is listed without details about the
 *             most recent attempt to access the service. If the operation fails, it returns the reason
 *             that it failed.</p>
 *         <p>By default, the list is sorted by service namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOrganizationsAccessReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOrganizationsAccessReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetOrganizationsAccessReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationsAccessReportCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationsAccessReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetOrganizationsAccessReportCommand extends smithy_client_1.Command {
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
        const clientName = "IAMClient";
        const commandName = "GetOrganizationsAccessReportCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetOrganizationsAccessReportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetOrganizationsAccessReportResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGetOrganizationsAccessReportCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGetOrganizationsAccessReportCommand(output, context);
    }
}
exports.GetOrganizationsAccessReportCommand = GetOrganizationsAccessReportCommand;
//# sourceMappingURL=GetOrganizationsAccessReportCommand.js.map