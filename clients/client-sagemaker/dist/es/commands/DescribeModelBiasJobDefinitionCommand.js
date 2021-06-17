import { __extends } from "tslib";
import { DescribeModelBiasJobDefinitionRequest, DescribeModelBiasJobDefinitionResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeModelBiasJobDefinitionCommand, serializeAws_json1_1DescribeModelBiasJobDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of a model bias job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelBiasJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelBiasJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelBiasJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelBiasJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeModelBiasJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeModelBiasJobDefinitionCommand = /** @class */ (function (_super) {
    __extends(DescribeModelBiasJobDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeModelBiasJobDefinitionCommand(input) {
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
    DescribeModelBiasJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeModelBiasJobDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeModelBiasJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeModelBiasJobDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeModelBiasJobDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeModelBiasJobDefinitionCommand(input, context);
    };
    DescribeModelBiasJobDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeModelBiasJobDefinitionCommand(output, context);
    };
    return DescribeModelBiasJobDefinitionCommand;
}($Command));
export { DescribeModelBiasJobDefinitionCommand };
//# sourceMappingURL=DescribeModelBiasJobDefinitionCommand.js.map