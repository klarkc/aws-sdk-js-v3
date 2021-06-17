import { __extends } from "tslib";
import { UntagSAMLProviderRequest } from "../models/models_1";
import { deserializeAws_queryUntagSAMLProviderCommand, serializeAws_queryUntagSAMLProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified tags from the specified Security Assertion Markup Language (SAML)
 *       identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
 *         federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link UntagSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagSAMLProviderCommand = /** @class */ (function (_super) {
    __extends(UntagSAMLProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagSAMLProviderCommand(input) {
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
    UntagSAMLProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UntagSAMLProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagSAMLProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagSAMLProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUntagSAMLProviderCommand(input, context);
    };
    UntagSAMLProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUntagSAMLProviderCommand(output, context);
    };
    return UntagSAMLProviderCommand;
}($Command));
export { UntagSAMLProviderCommand };
//# sourceMappingURL=UntagSAMLProviderCommand.js.map