import { __extends } from "tslib";
import { CreateTagsRequest } from "../models/models_1";
import { deserializeAws_ec2CreateTagsCommand, serializeAws_ec2CreateTagsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or overwrites only the specified tags for the specified Amazon EC2 resource or
 *          resources. When you specify an existing tag key, the value is overwritten with
 *          the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and
 *          optional value. Tag keys must be unique per resource.</p>
 *
 *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a> in the
 *             <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about
 *          creating IAM policies that control users' access to resources based on tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-iam-actions-resources.html">Supported
 *             Resource-Level Permissions for Amazon EC2 API Actions</a> in the <i>Amazon
 *             Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTagsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTagsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTagsCommand = /** @class */ (function (_super) {
    __extends(CreateTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTagsCommand(input) {
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
    CreateTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTagsCommand(input, context);
    };
    CreateTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTagsCommand(output, context);
    };
    return CreateTagsCommand;
}($Command));
export { CreateTagsCommand };
//# sourceMappingURL=CreateTagsCommand.js.map