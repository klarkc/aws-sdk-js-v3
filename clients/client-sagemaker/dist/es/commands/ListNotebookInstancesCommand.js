import { __extends } from "tslib";
import { ListNotebookInstancesInput, ListNotebookInstancesOutput } from "../models/models_2";
import { deserializeAws_json1_1ListNotebookInstancesCommand, serializeAws_json1_1ListNotebookInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS
 *             Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListNotebookInstancesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListNotebookInstancesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListNotebookInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookInstancesCommandInput} for command's `input` shape.
 * @see {@link ListNotebookInstancesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNotebookInstancesCommand = /** @class */ (function (_super) {
    __extends(ListNotebookInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNotebookInstancesCommand(input) {
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
    ListNotebookInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListNotebookInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNotebookInstancesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListNotebookInstancesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNotebookInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListNotebookInstancesCommand(input, context);
    };
    ListNotebookInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListNotebookInstancesCommand(output, context);
    };
    return ListNotebookInstancesCommand;
}($Command));
export { ListNotebookInstancesCommand };
//# sourceMappingURL=ListNotebookInstancesCommand.js.map