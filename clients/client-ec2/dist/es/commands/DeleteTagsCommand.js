import { __extends } from "tslib";
import { DeleteTagsRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteTagsCommand, serializeAws_ec2DeleteTagsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified set of tags from the specified set of resources.</p>
 *          <p>To list the current tags, use <a>DescribeTags</a>. For more information about tags, see
 *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a>
 *          in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTagsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTagsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTagsCommand = /** @class */ (function (_super) {
    __extends(DeleteTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTagsCommand(input) {
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
    DeleteTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTagsCommand(input, context);
    };
    DeleteTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTagsCommand(output, context);
    };
    return DeleteTagsCommand;
}($Command));
export { DeleteTagsCommand };
//# sourceMappingURL=DeleteTagsCommand.js.map