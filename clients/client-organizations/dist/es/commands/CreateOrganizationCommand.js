import { __extends } from "tslib";
import { CreateOrganizationRequest, CreateOrganizationResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateOrganizationCommand, serializeAws_json1_1CreateOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS organization. The account whose user is calling the
 *                 <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">management account</a> of the new organization.</p>
 *         <p>This operation must be called using credentials from the account that is to become the
 *             new organization's management account. The principal must also have the relevant IAM
 *             permissions.</p>
 *         <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>),
 *             the new organization is created with all features enabled and service control policies
 *             automatically enabled in the root. If you instead choose to create the organization
 *             supporting only the consolidated billing features by setting the <code>FeatureSet</code>
 *             parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default,
 *             and you can't use organization policies</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreateOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrganizationCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOrganizationCommand = /** @class */ (function (_super) {
    __extends(CreateOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOrganizationCommand(input) {
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
    CreateOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "CreateOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateOrganizationCommand(input, context);
    };
    CreateOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateOrganizationCommand(output, context);
    };
    return CreateOrganizationCommand;
}($Command));
export { CreateOrganizationCommand };
//# sourceMappingURL=CreateOrganizationCommand.js.map