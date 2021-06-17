import { __extends } from "tslib";
import { GetCommentInput, GetCommentOutput } from "../models/models_0";
import { deserializeAws_json1_1GetCommentCommand, serializeAws_json1_1GetCommentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the content of a comment made on a change, file, or commit in a repository. </p>
 *             <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *         reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentCommandInput} for command's `input` shape.
 * @see {@link GetCommentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCommentCommand = /** @class */ (function (_super) {
    __extends(GetCommentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCommentCommand(input) {
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
    GetCommentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetCommentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCommentInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetCommentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCommentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCommentCommand(input, context);
    };
    GetCommentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCommentCommand(output, context);
    };
    return GetCommentCommand;
}($Command));
export { GetCommentCommand };
//# sourceMappingURL=GetCommentCommand.js.map