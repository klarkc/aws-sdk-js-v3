"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutOrganizationConfigRuleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your
 * 			desired configurations.</p>
 * 	        <p> Only a master account and a delegated administrator can create or update an organization config rule.
 * 		When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 		<code>ListDelegatedAdministrator</code> permissions are added. </p>
 * 		       <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service linked
 * 			role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master or delegated administrator account of your organization.
 * 			The service linked role is created only when the role does not exist in the caller account.
 * 			AWS Config verifies the existence of role with <code>GetRole</code> action.</p>
 * 		       <p>To use this API with delegated administrator, register a delegated administrator by calling AWS Organization
 * 			<code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p>
 * 		       <p>You can use this action to create both custom AWS Config rules and AWS managed Config rules.
 * 			If you are adding a new custom AWS Config rule, you must first create AWS Lambda function in the master account or a delegated
 * 			administrator that the rule invokes to evaluate your resources.
 * 			When you use the <code>PutOrganizationConfigRule</code> action to add the rule to AWS Config, you must
 * 			specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function.
 * 			If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>RuleIdentifier</code> key.</p>
 * 		       <p>The maximum number of organization config rules that AWS Config supports is 150 and 3 delegated administrator per organization. </p>
 * 		       <note>
 *             <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
 * 			         <p>Specify either <code>OrganizationCustomRuleMetadata</code> or <code>OrganizationManagedRuleMetadata</code>.</p>
 * 			      </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutOrganizationConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutOrganizationConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutOrganizationConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutOrganizationConfigRuleCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutOrganizationConfigRuleCommand extends smithy_client_1.Command {
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
        const clientName = "ConfigServiceClient";
        const commandName = "PutOrganizationConfigRuleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutOrganizationConfigRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutOrganizationConfigRuleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutOrganizationConfigRuleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutOrganizationConfigRuleCommand(output, context);
    }
}
exports.PutOrganizationConfigRuleCommand = PutOrganizationConfigRuleCommand;
//# sourceMappingURL=PutOrganizationConfigRuleCommand.js.map