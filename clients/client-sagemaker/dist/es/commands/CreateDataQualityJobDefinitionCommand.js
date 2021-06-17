import { __extends } from "tslib";
import { CreateDataQualityJobDefinitionRequest, CreateDataQualityJobDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDataQualityJobDefinitionCommand, serializeAws_json1_1CreateDataQualityJobDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a definition for a job that monitors data quality and drift. For information
 *          about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateDataQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateDataQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateDataQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateDataQualityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDataQualityJobDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateDataQualityJobDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDataQualityJobDefinitionCommand(input) {
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
    CreateDataQualityJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateDataQualityJobDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDataQualityJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDataQualityJobDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDataQualityJobDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDataQualityJobDefinitionCommand(input, context);
    };
    CreateDataQualityJobDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDataQualityJobDefinitionCommand(output, context);
    };
    return CreateDataQualityJobDefinitionCommand;
}($Command));
export { CreateDataQualityJobDefinitionCommand };
//# sourceMappingURL=CreateDataQualityJobDefinitionCommand.js.map