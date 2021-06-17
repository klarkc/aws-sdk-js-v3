import { __extends } from "tslib";
import { MergeBranchesByThreeWayInput, MergeBranchesByThreeWayOutput } from "../models/models_1";
import { deserializeAws_json1_1MergeBranchesByThreeWayCommand, serializeAws_json1_1MergeBranchesByThreeWayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Merges two specified branches using the three-way merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesByThreeWayCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesByThreeWayCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergeBranchesByThreeWayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeBranchesByThreeWayCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesByThreeWayCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MergeBranchesByThreeWayCommand = /** @class */ (function (_super) {
    __extends(MergeBranchesByThreeWayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MergeBranchesByThreeWayCommand(input) {
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
    MergeBranchesByThreeWayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "MergeBranchesByThreeWayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MergeBranchesByThreeWayInput.filterSensitiveLog,
            outputFilterSensitiveLog: MergeBranchesByThreeWayOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MergeBranchesByThreeWayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MergeBranchesByThreeWayCommand(input, context);
    };
    MergeBranchesByThreeWayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MergeBranchesByThreeWayCommand(output, context);
    };
    return MergeBranchesByThreeWayCommand;
}($Command));
export { MergeBranchesByThreeWayCommand };
//# sourceMappingURL=MergeBranchesByThreeWayCommand.js.map