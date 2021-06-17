import { __extends } from "tslib";
import { CreateTagsRequest } from "../models/models_0";
import { deserializeAws_restJson1CreateTagsCommand, serializeAws_restJson1CreateTagsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <note>
 *             <p>DEPRECATED - CreateTags is deprecated and not maintained. Please use the
 *        API action to create tags for EFS resources.</p>
 *          </note>
 *          <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If
 *       a tag key specified in the request already exists on the file system, this operation
 *       overwrites its value with the value provided in the request. If you add the <code>Name</code>
 *       tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p>
 *          <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "EFSClient";
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
        return serializeAws_restJson1CreateTagsCommand(input, context);
    };
    CreateTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateTagsCommand(output, context);
    };
    return CreateTagsCommand;
}($Command));
export { CreateTagsCommand };
//# sourceMappingURL=CreateTagsCommand.js.map