import { __extends } from "tslib";
import { CreateRepositoryRequest, CreateRepositoryResult } from "../models/models_0";
import { deserializeAws_restJson1CreateRepositoryCommand, serializeAws_restJson1CreateRepositoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Creates a repository.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, CreateRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, CreateRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "CodeartifactClient";
        var commandName = "CreateRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRepositoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRepositoryCommand(input, context);
    };
    CreateRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRepositoryCommand(output, context);
    };
    return CreateRepositoryCommand;
}($Command));
export { CreateRepositoryCommand };
//# sourceMappingURL=CreateRepositoryCommand.js.map