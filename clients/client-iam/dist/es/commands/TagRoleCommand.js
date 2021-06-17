import { __extends } from "tslib";
import { TagRoleRequest } from "../models/models_0";
import { deserializeAws_queryTagRoleCommand, serializeAws_queryTagRoleCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more tags to an IAM role. The role can be a regular role or a
 *       service-linked role. If a tag with the same key name already exists, then that tag is
 *       overwritten with the new value.</p>
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
 *           and resource-based policies. You can use tags to restrict access to only an IAM role
 *           that has a specified tag attached. You can also restrict access to only those resources
 *           that have a certain tag attached. For examples of policies that show how to use tags to
 *           control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
 *           <i>IAM User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Cost allocation</b> - Use tags to help track which
 *           individuals and teams are using which AWS resources.</p>
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
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the
 *         <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, TagRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, TagRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new TagRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagRoleCommandInput} for command's `input` shape.
 * @see {@link TagRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagRoleCommand = /** @class */ (function (_super) {
    __extends(TagRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TagRoleCommand(input) {
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
    TagRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "TagRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TagRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TagRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryTagRoleCommand(input, context);
    };
    TagRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryTagRoleCommand(output, context);
    };
    return TagRoleCommand;
}($Command));
export { TagRoleCommand };
//# sourceMappingURL=TagRoleCommand.js.map