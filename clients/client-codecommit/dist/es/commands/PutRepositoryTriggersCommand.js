import { __extends } from "tslib";
import { PutRepositoryTriggersInput, PutRepositoryTriggersOutput } from "../models/models_1";
import { deserializeAws_json1_1PutRepositoryTriggersCommand, serializeAws_json1_1PutRepositoryTriggersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces all triggers for a repository. Used to create or delete triggers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PutRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PutRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PutRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryTriggersCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRepositoryTriggersCommand = /** @class */ (function (_super) {
    __extends(PutRepositoryTriggersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRepositoryTriggersCommand(input) {
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
    PutRepositoryTriggersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "PutRepositoryTriggersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRepositoryTriggersInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutRepositoryTriggersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRepositoryTriggersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutRepositoryTriggersCommand(input, context);
    };
    PutRepositoryTriggersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutRepositoryTriggersCommand(output, context);
    };
    return PutRepositoryTriggersCommand;
}($Command));
export { PutRepositoryTriggersCommand };
//# sourceMappingURL=PutRepositoryTriggersCommand.js.map