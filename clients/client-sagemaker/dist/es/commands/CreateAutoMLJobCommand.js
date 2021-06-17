import { __extends } from "tslib";
import { CreateAutoMLJobRequest, CreateAutoMLJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAutoMLJobCommand, serializeAws_json1_1CreateAutoMLJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Autopilot job.</p>
 *          <p>Find the best performing model after you run an Autopilot job by calling .</p>
 *          <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model
 *             Development with Amazon SageMaker Autopilot</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateAutoMLJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link CreateAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAutoMLJobCommand = /** @class */ (function (_super) {
    __extends(CreateAutoMLJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAutoMLJobCommand(input) {
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
    CreateAutoMLJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateAutoMLJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAutoMLJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAutoMLJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAutoMLJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAutoMLJobCommand(input, context);
    };
    CreateAutoMLJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAutoMLJobCommand(output, context);
    };
    return CreateAutoMLJobCommand;
}($Command));
export { CreateAutoMLJobCommand };
//# sourceMappingURL=CreateAutoMLJobCommand.js.map