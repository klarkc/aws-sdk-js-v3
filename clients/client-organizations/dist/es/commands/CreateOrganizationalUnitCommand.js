import { __extends } from "tslib";
import { CreateOrganizationalUnitRequest, CreateOrganizationalUnitResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateOrganizationalUnitCommand, serializeAws_json1_1CreateOrganizationalUnitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container
 *             for accounts that enables you to organize your accounts to apply policies according to
 *             your business requirements. The number of levels deep that you can nest OUs is dependent
 *             upon the policy types enabled for that root. For service control policies, the limit is
 *             five.</p>
 *         <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreateOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOrganizationalUnitCommand = /** @class */ (function (_super) {
    __extends(CreateOrganizationalUnitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOrganizationalUnitCommand(input) {
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
    CreateOrganizationalUnitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "CreateOrganizationalUnitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOrganizationalUnitRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOrganizationalUnitResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOrganizationalUnitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateOrganizationalUnitCommand(input, context);
    };
    CreateOrganizationalUnitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateOrganizationalUnitCommand(output, context);
    };
    return CreateOrganizationalUnitCommand;
}($Command));
export { CreateOrganizationalUnitCommand };
//# sourceMappingURL=CreateOrganizationalUnitCommand.js.map