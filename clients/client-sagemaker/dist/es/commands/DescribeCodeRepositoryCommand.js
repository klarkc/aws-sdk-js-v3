import { __extends } from "tslib";
import { DescribeCodeRepositoryInput, DescribeCodeRepositoryOutput } from "../models/models_1";
import { deserializeAws_json1_1DescribeCodeRepositoryCommand, serializeAws_json1_1DescribeCodeRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets details about the specified Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCodeRepositoryCommand = /** @class */ (function (_super) {
    __extends(DescribeCodeRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCodeRepositoryCommand(input) {
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
    DescribeCodeRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeCodeRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCodeRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCodeRepositoryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCodeRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCodeRepositoryCommand(input, context);
    };
    DescribeCodeRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCodeRepositoryCommand(output, context);
    };
    return DescribeCodeRepositoryCommand;
}($Command));
export { DescribeCodeRepositoryCommand };
//# sourceMappingURL=DescribeCodeRepositoryCommand.js.map