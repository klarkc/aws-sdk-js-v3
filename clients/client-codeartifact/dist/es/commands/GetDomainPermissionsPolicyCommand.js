import { __extends } from "tslib";
import { GetDomainPermissionsPolicyRequest, GetDomainPermissionsPolicyResult } from "../models/models_0";
import { deserializeAws_restJson1GetDomainPermissionsPolicyCommand, serializeAws_restJson1GetDomainPermissionsPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Returns the resource policy attached to the specified domain.
 *       </p>
 *          <note>
 *             <p>
 *          The policy is a resource-based policy, not an identity-based policy. For more information, see
 *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies
 *            and resource-based policies </a> in the <i>AWS Identity and Access Management User Guide</i>.
 *        </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetDomainPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetDomainPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetDomainPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDomainPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainPermissionsPolicyCommand = /** @class */ (function (_super) {
    __extends(GetDomainPermissionsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDomainPermissionsPolicyCommand(input) {
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
    GetDomainPermissionsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "GetDomainPermissionsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDomainPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDomainPermissionsPolicyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDomainPermissionsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDomainPermissionsPolicyCommand(input, context);
    };
    GetDomainPermissionsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDomainPermissionsPolicyCommand(output, context);
    };
    return GetDomainPermissionsPolicyCommand;
}($Command));
export { GetDomainPermissionsPolicyCommand };
//# sourceMappingURL=GetDomainPermissionsPolicyCommand.js.map