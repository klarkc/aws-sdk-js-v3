import { __extends } from "tslib";
import { UpdateRepositoryRequest, UpdateRepositoryResult } from "../models/models_0";
import { deserializeAws_restJson1UpdateRepositoryCommand, serializeAws_restJson1UpdateRepositoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Update the properties of a repository.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, UpdateRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, UpdateRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new UpdateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRepositoryCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRepositoryCommand = /** @class */ (function (_super) {
    __extends(UpdateRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRepositoryCommand(input) {
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
    UpdateRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "UpdateRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRepositoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRepositoryCommand(input, context);
    };
    UpdateRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRepositoryCommand(output, context);
    };
    return UpdateRepositoryCommand;
}($Command));
export { UpdateRepositoryCommand };
//# sourceMappingURL=UpdateRepositoryCommand.js.map