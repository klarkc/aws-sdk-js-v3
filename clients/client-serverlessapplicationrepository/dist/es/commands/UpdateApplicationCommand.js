import { __extends } from "tslib";
import { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateApplicationCommand, serializeAws_restJson1UpdateApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, UpdateApplicationCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, UpdateApplicationCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApplicationCommand = /** @class */ (function (_super) {
    __extends(UpdateApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApplicationCommand(input) {
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
    UpdateApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "UpdateApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateApplicationCommand(input, context);
    };
    UpdateApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateApplicationCommand(output, context);
    };
    return UpdateApplicationCommand;
}($Command));
export { UpdateApplicationCommand };
//# sourceMappingURL=UpdateApplicationCommand.js.map