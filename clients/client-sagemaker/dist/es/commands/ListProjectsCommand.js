import { __extends } from "tslib";
import { ListProjectsInput, ListProjectsOutput } from "../models/models_2";
import { deserializeAws_json1_1ListProjectsCommand, serializeAws_json1_1ListProjectsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the projects in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListProjectsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListProjectsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProjectsCommand = /** @class */ (function (_super) {
    __extends(ListProjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProjectsCommand(input) {
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
    ListProjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListProjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProjectsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListProjectsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProjectsCommand(input, context);
    };
    ListProjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProjectsCommand(output, context);
    };
    return ListProjectsCommand;
}($Command));
export { ListProjectsCommand };
//# sourceMappingURL=ListProjectsCommand.js.map