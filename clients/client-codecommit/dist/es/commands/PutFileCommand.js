import { __extends } from "tslib";
import { PutFileInput, PutFileOutput } from "../models/models_1";
import { deserializeAws_json1_1PutFileCommand, serializeAws_json1_1PutFileCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PutFileCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PutFileCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PutFileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFileCommandInput} for command's `input` shape.
 * @see {@link PutFileCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutFileCommand = /** @class */ (function (_super) {
    __extends(PutFileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutFileCommand(input) {
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
    PutFileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "PutFileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutFileInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutFileOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutFileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutFileCommand(input, context);
    };
    PutFileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutFileCommand(output, context);
    };
    return PutFileCommand;
}($Command));
export { PutFileCommand };
//# sourceMappingURL=PutFileCommand.js.map