import { __extends } from "tslib";
import { TagSAMLProviderRequest } from "../models/models_0";
import { deserializeAws_queryTagSAMLProviderCommand, serializeAws_queryTagSAMLProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider.
 *       For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation </a>.
 *       If a tag with the same key name already exists, then that tag is overwritten with the new
 *       value.</p>
 *          <p>A tag consists of a key name and an associated value. By assigning tags to your
 *       resources, you can do the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Administrative grouping and discovery</b> - Attach
 *           tags to resources to aid in organization and search. For example, you could search for all
 *           resources with the key name <i>Project</i> and the value
 *             <i>MyImportantProject</i>. Or search for all resources with the key name
 *             <i>Cost Center</i> and the value <i>41200</i>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Access control</b> - Include tags in IAM user-based
 *           and resource-based policies. You can use tags to restrict access to only a SAML identity
 *           provider that has a specified tag attached. For examples of policies that show how to use
 *           tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
 *             <i>IAM User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
 *             need to store an array, you can store comma-separated values in the string. However, you
 *             must interpret the value in your code.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, TagSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, TagSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new TagSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link TagSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagSAMLProviderCommand = /** @class */ (function (_super) {
    __extends(TagSAMLProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TagSAMLProviderCommand(input) {
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
    TagSAMLProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "TagSAMLProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TagSAMLProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TagSAMLProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryTagSAMLProviderCommand(input, context);
    };
    TagSAMLProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryTagSAMLProviderCommand(output, context);
    };
    return TagSAMLProviderCommand;
}($Command));
export { TagSAMLProviderCommand };
//# sourceMappingURL=TagSAMLProviderCommand.js.map