import { __extends } from "tslib";
import { CreateCodeRepositoryInput, CreateCodeRepositoryOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateCodeRepositoryCommand, serializeAws_json1_1CreateCodeRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the
 *             repository with notebook instances so that you can use Git source control for the
 *             notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can
 *             be associated with more than one notebook instance, and it persists independently from
 *             the lifecycle of any notebook instances it is associated with.</p>
 *         <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
 *             other Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCodeRepositoryCommand = /** @class */ (function (_super) {
    __extends(CreateCodeRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCodeRepositoryCommand(input) {
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
    CreateCodeRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateCodeRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCodeRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCodeRepositoryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCodeRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCodeRepositoryCommand(input, context);
    };
    CreateCodeRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCodeRepositoryCommand(output, context);
    };
    return CreateCodeRepositoryCommand;
}($Command));
export { CreateCodeRepositoryCommand };
//# sourceMappingURL=CreateCodeRepositoryCommand.js.map