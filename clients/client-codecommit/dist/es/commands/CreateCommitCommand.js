import { __extends } from "tslib";
import { CreateCommitInput, CreateCommitOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateCommitCommand, serializeAws_json1_1CreateCommitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a commit for a repository on the tip of a specified branch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCommitCommandInput} for command's `input` shape.
 * @see {@link CreateCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCommitCommand = /** @class */ (function (_super) {
    __extends(CreateCommitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCommitCommand(input) {
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
    CreateCommitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "CreateCommitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCommitInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCommitOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCommitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCommitCommand(input, context);
    };
    CreateCommitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCommitCommand(output, context);
    };
    return CreateCommitCommand;
}($Command));
export { CreateCommitCommand };
//# sourceMappingURL=CreateCommitCommand.js.map