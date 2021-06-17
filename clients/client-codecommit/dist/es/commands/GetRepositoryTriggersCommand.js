import { __extends } from "tslib";
import { GetRepositoryTriggersInput, GetRepositoryTriggersOutput } from "../models/models_0";
import { deserializeAws_json1_1GetRepositoryTriggersCommand, serializeAws_json1_1GetRepositoryTriggersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about triggers configured for a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryTriggersCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRepositoryTriggersCommand = /** @class */ (function (_super) {
    __extends(GetRepositoryTriggersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRepositoryTriggersCommand(input) {
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
    GetRepositoryTriggersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetRepositoryTriggersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRepositoryTriggersInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetRepositoryTriggersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRepositoryTriggersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRepositoryTriggersCommand(input, context);
    };
    GetRepositoryTriggersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRepositoryTriggersCommand(output, context);
    };
    return GetRepositoryTriggersCommand;
}($Command));
export { GetRepositoryTriggersCommand };
//# sourceMappingURL=GetRepositoryTriggersCommand.js.map