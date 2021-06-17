import { __extends } from "tslib";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1CreatePolicyCommand, serializeAws_json1_1CreatePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a policy of a specified type that you can attach to a root, an organizational
 *             unit (OU), or an individual AWS account.</p>
 *         <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing
 *                 Organization Policies</a>.</p>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreatePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreatePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePolicyCommand = /** @class */ (function (_super) {
    __extends(CreatePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePolicyCommand(input) {
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
    CreatePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "CreatePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePolicyCommand(input, context);
    };
    CreatePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePolicyCommand(output, context);
    };
    return CreatePolicyCommand;
}($Command));
export { CreatePolicyCommand };
//# sourceMappingURL=CreatePolicyCommand.js.map