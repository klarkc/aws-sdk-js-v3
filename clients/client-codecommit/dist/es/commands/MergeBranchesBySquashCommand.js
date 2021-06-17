import { __extends } from "tslib";
import { MergeBranchesBySquashInput, MergeBranchesBySquashOutput } from "../models/models_1";
import { deserializeAws_json1_1MergeBranchesBySquashCommand, serializeAws_json1_1MergeBranchesBySquashCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Merges two branches using the squash merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesBySquashCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesBySquashCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergeBranchesBySquashCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeBranchesBySquashCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesBySquashCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MergeBranchesBySquashCommand = /** @class */ (function (_super) {
    __extends(MergeBranchesBySquashCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MergeBranchesBySquashCommand(input) {
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
    MergeBranchesBySquashCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "MergeBranchesBySquashCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MergeBranchesBySquashInput.filterSensitiveLog,
            outputFilterSensitiveLog: MergeBranchesBySquashOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MergeBranchesBySquashCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MergeBranchesBySquashCommand(input, context);
    };
    MergeBranchesBySquashCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MergeBranchesBySquashCommand(output, context);
    };
    return MergeBranchesBySquashCommand;
}($Command));
export { MergeBranchesBySquashCommand };
//# sourceMappingURL=MergeBranchesBySquashCommand.js.map