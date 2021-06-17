import { __extends } from "tslib";
import { ListRepositoriesInput, ListRepositoriesOutput } from "../models/models_1";
import { deserializeAws_json1_1ListRepositoriesCommand, serializeAws_json1_1ListRepositoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more repositories.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRepositoriesCommand = /** @class */ (function (_super) {
    __extends(ListRepositoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRepositoriesCommand(input) {
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
    ListRepositoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "ListRepositoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRepositoriesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListRepositoriesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRepositoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRepositoriesCommand(input, context);
    };
    ListRepositoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRepositoriesCommand(output, context);
    };
    return ListRepositoriesCommand;
}($Command));
export { ListRepositoriesCommand };
//# sourceMappingURL=ListRepositoriesCommand.js.map