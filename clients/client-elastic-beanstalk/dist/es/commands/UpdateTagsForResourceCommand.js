import { __extends } from "tslib";
import { UpdateTagsForResourceMessage } from "../models/models_0";
import { deserializeAws_queryUpdateTagsForResourceCommand, serializeAws_queryUpdateTagsForResourceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code>
 *       for tags to add or update, and <code>TagsToRemove</code>.</p>
 *          <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see
 *       <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application
 *         Resources</a>.</p>
 *          <p>If you create a custom IAM user policy to control permission to this operation, specify
 *       one of the following two virtual actions (or both) instead of the API operation name:</p>
 *          <dl>
 *             <dt>elasticbeanstalk:AddTags</dt>
 *             <dd>
 *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code>
 *           parameter.</p>
 *             </dd>
 *             <dt>elasticbeanstalk:RemoveTags</dt>
 *             <dd>
 *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code>
 *           parameter.</p>
 *             </dd>
 *          </dl>
 *          <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateTagsForResourceCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateTagsForResourceCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTagsForResourceCommand = /** @class */ (function (_super) {
    __extends(UpdateTagsForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTagsForResourceCommand(input) {
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
    UpdateTagsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "UpdateTagsForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTagsForResourceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTagsForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateTagsForResourceCommand(input, context);
    };
    UpdateTagsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateTagsForResourceCommand(output, context);
    };
    return UpdateTagsForResourceCommand;
}($Command));
export { UpdateTagsForResourceCommand };
//# sourceMappingURL=UpdateTagsForResourceCommand.js.map