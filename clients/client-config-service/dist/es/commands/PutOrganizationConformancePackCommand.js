import { __extends } from "tslib";
import { PutOrganizationConformancePackRequest, PutOrganizationConformancePackResponse } from "../models/models_0";
import { deserializeAws_json1_1PutOrganizationConformancePackCommand, serializeAws_json1_1PutOrganizationConformancePackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var PutOrganizationConformancePackCommand = /** @class */ (function (_super) {
    __extends(PutOrganizationConformancePackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutOrganizationConformancePackCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    PutOrganizationConformancePackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutOrganizationConformancePackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutOrganizationConformancePackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutOrganizationConformancePackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutOrganizationConformancePackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutOrganizationConformancePackCommand(input, context);
    };
    PutOrganizationConformancePackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutOrganizationConformancePackCommand(output, context);
    };
    return PutOrganizationConformancePackCommand;
}($Command));
export { PutOrganizationConformancePackCommand };
//# sourceMappingURL=PutOrganizationConformancePackCommand.js.map