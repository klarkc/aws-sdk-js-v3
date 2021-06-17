import { __extends } from "tslib";
import { CreateProjectInput, CreateProjectOutput } from "../models/models_1";
import { deserializeAws_json1_1CreateProjectCommand, serializeAws_json1_1CreateProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a machine learning (ML) project that can contain one or more templates that set
 *             up an ML pipeline from training to deploying an approved model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateProjectCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateProjectCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProjectCommand = /** @class */ (function (_super) {
    __extends(CreateProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProjectCommand(input) {
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
    CreateProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProjectInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProjectOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateProjectCommand(input, context);
    };
    CreateProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateProjectCommand(output, context);
    };
    return CreateProjectCommand;
}($Command));
export { CreateProjectCommand };
//# sourceMappingURL=CreateProjectCommand.js.map