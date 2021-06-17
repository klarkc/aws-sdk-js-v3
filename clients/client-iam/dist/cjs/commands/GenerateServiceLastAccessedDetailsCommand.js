"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateServiceLastAccessedDetailsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Generates a report that includes details about when an IAM resource (user, group,
 *             role, or policy) was last used in an attempt to access AWS services. Recent activity
 *             usually appears within four hours. IAM reports activity for the last 365 days, or less
 *             if your Region began supporting this feature within the last year. For more information,
 *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p>
 *         <important>
 *             <p>The service last accessed data includes all attempts to access an AWS API, not
 *                 just the successful ones. This includes all attempts that were made using the
 *                 AWS Management Console, the AWS API through any of the SDKs, or any of the command line tools.
 *                 An unexpected entry in the service last accessed data does not mean that your
 *                 account has been compromised, because the request might have been denied. Refer to
 *                 your CloudTrail logs as the authoritative source for information about all API calls
 *                 and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging
 *                     IAM events with CloudTrail</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *         </important>
 *         <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a
 *                 <code>JobId</code>. Use this parameter in the following operations to retrieve the
 *             following details from your report: </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a>GetServiceLastAccessedDetails</a> – Use this operation
 *                     for users, groups, roles, or policies to list every AWS service that the
 *                     resource could access using permissions policies. For each service, the response
 *                     includes information about the most recent access attempt.</p>
 *                 <p>The <code>JobId</code> returned by
 *                         <code>GenerateServiceLastAccessedDetail</code> must be used by the same role
 *                     within a session, or by the same user when used to call
 *                         <code>GetServiceLastAccessedDetail</code>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this
 *                     operation for groups and policies to list information about the associated
 *                     entities (users or roles) that attempted to access a specific AWS service.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request,
 *             use the <code>JobId</code> parameter in the same operations and test the
 *                 <code>JobStatus</code> response parameter.</p>
 *         <p>For additional information about the permissions policies that allow an identity
 *             (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
 *         <note>
 *             <p>Service last accessed data does not use other policy types when determining
 *                 whether a resource could access a service. These other policy types include
 *                 resource-based policies, access control lists, AWS Organizations policies, IAM
 *                 permissions boundaries, and AWS STS assume role policies. It only applies
 *                 permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         </note>
 *         <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GenerateServiceLastAccessedDetailsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GenerateServiceLastAccessedDetailsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GenerateServiceLastAccessedDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateServiceLastAccessedDetailsCommandInput} for command's `input` shape.
 * @see {@link GenerateServiceLastAccessedDetailsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GenerateServiceLastAccessedDetailsCommand extends smithy_client_1.Command {
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
        const commandName = "GenerateServiceLastAccessedDetailsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GenerateServiceLastAccessedDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GenerateServiceLastAccessedDetailsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGenerateServiceLastAccessedDetailsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGenerateServiceLastAccessedDetailsCommand(output, context);
    }
}
exports.GenerateServiceLastAccessedDetailsCommand = GenerateServiceLastAccessedDetailsCommand;
//# sourceMappingURL=GenerateServiceLastAccessedDetailsCommand.js.map