import { __extends } from "tslib";
import { AddTagsToResourceRequest, AddTagsToResourceResult } from "../models/models_0";
import { deserializeAws_json1_1AddTagsToResourceCommand, serializeAws_json1_1AddTagsToResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you
 *    can assign to your documents, managed instances, maintenance windows, Parameter Store parameters,
 *    and patch baselines. Tags enable you to categorize your resources in different ways, for example,
 *    by purpose, owner, or environment. Each tag consists of a key and an optional value, both of
 *    which you define. For example, you could define a set of tags for your account's managed
 *    instances that helps you track each instance's owner and stack level. For example: Key=Owner and
 *    Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or
 *    Test.</p>
 *          <p>Each resource can have a maximum of 50 tags. </p>
 *          <p>We recommend that you devise a set of tag keys that meets your needs for each resource type.
 *    Using a consistent set of tag keys makes it easier for you to manage your resources. You can
 *    search and filter the resources based on the tags you add. Tags don't have any semantic meaning
 *    to and are interpreted strictly as a string of characters. </p>
 *          <p>For more information about using tags with EC2 instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the
 *     <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AddTagsToResourceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AddTagsToResourceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsToResourceCommand = /** @class */ (function (_super) {
    __extends(AddTagsToResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsToResourceCommand(input) {
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
    AddTagsToResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "AddTagsToResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsToResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddTagsToResourceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsToResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddTagsToResourceCommand(input, context);
    };
    AddTagsToResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddTagsToResourceCommand(output, context);
    };
    return AddTagsToResourceCommand;
}($Command));
export { AddTagsToResourceCommand };
//# sourceMappingURL=AddTagsToResourceCommand.js.map