import { __extends } from "tslib";
import { DeleteTagsRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteTagsCommand, serializeAws_restJson1DeleteTagsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <note>
 *             <p>DEPRECATED - DeleteTags is deprecated and not maintained. Please use the
 *        API action to remove tags from EFS resources.</p>
 *          </note>
 *          <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request
 *       includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an
 *       error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag Restrictions</a> in the
 *         <i>AWS Billing and Cost Management User Guide</i>.</p>
 *
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "EFSClient";
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
        return serializeAws_restJson1DeleteTagsCommand(input, context);
    };
    DeleteTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTagsCommand(output, context);
    };
    return DeleteTagsCommand;
}($Command));
export { DeleteTagsCommand };
//# sourceMappingURL=DeleteTagsCommand.js.map