import { __extends } from "tslib";
import { DescribeNotebookInstanceInput, DescribeNotebookInstanceOutput } from "../models/models_1";
import { deserializeAws_json1_1DescribeNotebookInstanceCommand, serializeAws_json1_1DescribeNotebookInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a notebook instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNotebookInstanceCommand = /** @class */ (function (_super) {
    __extends(DescribeNotebookInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNotebookInstanceCommand(input) {
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
    DescribeNotebookInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeNotebookInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNotebookInstanceInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNotebookInstanceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNotebookInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeNotebookInstanceCommand(input, context);
    };
    DescribeNotebookInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeNotebookInstanceCommand(output, context);
    };
    return DescribeNotebookInstanceCommand;
}($Command));
export { DescribeNotebookInstanceCommand };
//# sourceMappingURL=DescribeNotebookInstanceCommand.js.map