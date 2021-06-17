import { __extends } from "tslib";
import { ListCodeRepositoriesInput, ListCodeRepositoriesOutput } from "../models/models_2";
import { deserializeAws_json1_1ListCodeRepositoriesCommand, serializeAws_json1_1ListCodeRepositoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the Git repositories in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCodeRepositoriesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCodeRepositoriesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListCodeRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListCodeRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCodeRepositoriesCommand = /** @class */ (function (_super) {
    __extends(ListCodeRepositoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCodeRepositoriesCommand(input) {
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
    ListCodeRepositoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListCodeRepositoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCodeRepositoriesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListCodeRepositoriesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCodeRepositoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCodeRepositoriesCommand(input, context);
    };
    ListCodeRepositoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCodeRepositoriesCommand(output, context);
    };
    return ListCodeRepositoriesCommand;
}($Command));
export { ListCodeRepositoriesCommand };
//# sourceMappingURL=ListCodeRepositoriesCommand.js.map