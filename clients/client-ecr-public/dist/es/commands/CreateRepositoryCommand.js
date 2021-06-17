import { __extends } from "tslib";
import { CreateRepositoryRequest, CreateRepositoryResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateRepositoryCommand, serializeAws_json1_1CreateRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR
 *             repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, CreateRepositoryCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, CreateRepositoryCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRepositoryCommand = /** @class */ (function (_super) {
    __extends(CreateRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRepositoryCommand(input) {
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
    CreateRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "CreateRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRepositoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRepositoryCommand(input, context);
    };
    CreateRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRepositoryCommand(output, context);
    };
    return CreateRepositoryCommand;
}($Command));
export { CreateRepositoryCommand };
//# sourceMappingURL=CreateRepositoryCommand.js.map