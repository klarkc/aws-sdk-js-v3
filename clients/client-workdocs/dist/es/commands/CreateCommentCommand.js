import { __extends } from "tslib";
import { CreateCommentRequest, CreateCommentResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCommentCommand, serializeAws_restJson1CreateCommentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new comment to the specified document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCommentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCommentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCommentCommandInput} for command's `input` shape.
 * @see {@link CreateCommentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCommentCommand = /** @class */ (function (_super) {
    __extends(CreateCommentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCommentCommand(input) {
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
    CreateCommentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "CreateCommentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCommentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCommentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCommentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCommentCommand(input, context);
    };
    CreateCommentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCommentCommand(output, context);
    };
    return CreateCommentCommand;
}($Command));
export { CreateCommentCommand };
//# sourceMappingURL=CreateCommentCommand.js.map