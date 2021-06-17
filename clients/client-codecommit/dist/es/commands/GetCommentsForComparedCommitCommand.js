import { __extends } from "tslib";
import { GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput } from "../models/models_0";
import { deserializeAws_json1_1GetCommentsForComparedCommitCommand, serializeAws_json1_1GetCommentsForComparedCommitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about comments made on the comparison between two commits.</p>
 *         <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *             reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentsForComparedCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentsForComparedCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentsForComparedCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentsForComparedCommitCommandInput} for command's `input` shape.
 * @see {@link GetCommentsForComparedCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCommentsForComparedCommitCommand = /** @class */ (function (_super) {
    __extends(GetCommentsForComparedCommitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCommentsForComparedCommitCommand(input) {
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
    GetCommentsForComparedCommitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetCommentsForComparedCommitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCommentsForComparedCommitInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetCommentsForComparedCommitOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCommentsForComparedCommitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCommentsForComparedCommitCommand(input, context);
    };
    GetCommentsForComparedCommitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCommentsForComparedCommitCommand(output, context);
    };
    return GetCommentsForComparedCommitCommand;
}($Command));
export { GetCommentsForComparedCommitCommand };
//# sourceMappingURL=GetCommentsForComparedCommitCommand.js.map