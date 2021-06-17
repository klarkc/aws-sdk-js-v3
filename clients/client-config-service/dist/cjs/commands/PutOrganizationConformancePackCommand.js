"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutOrganizationConformancePackCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deploys conformance packs across member accounts in an AWS Organization.</p>
 * 		       <p>Only a master account and a delegated administrator can call this API.
 * 			When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 		       <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code>
 * 			through the <code>EnableAWSServiceAccess</code> action and creates a
 * 			service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master or delegated administrator account of your organization.
 * 			The service linked role is created only when the role does not exist in the caller account.
 * 			To use this API with delegated administrator, register a delegated administrator by calling AWS Organization
 * 			<code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
 *
 *
 *
 * 		       <note>
 * 			         <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
 * 			         <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
 * 			If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
 * 			         <p>AWS Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated.
 * 				You cannot update a conformance pack while it is in this state.</p>
 * 			         <p>You can create 50 conformance packs with 25 AWS Config rules in each pack and 3 delegated administrator per organization. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutOrganizationConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutOrganizationConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutOrganizationConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutOrganizationConformancePackCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutOrganizationConformancePackCommand extends smithy_client_1.Command {
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
        const commandName = "PutOrganizationConformancePackCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutOrganizationConformancePackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutOrganizationConformancePackResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutOrganizationConformancePackCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutOrganizationConformancePackCommand(output, context);
    }
}
exports.PutOrganizationConformancePackCommand = PutOrganizationConformancePackCommand;
//# sourceMappingURL=PutOrganizationConformancePackCommand.js.map