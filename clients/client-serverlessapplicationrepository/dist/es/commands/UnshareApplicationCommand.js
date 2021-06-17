import { __extends } from "tslib";
import { UnshareApplicationRequest } from "../models/models_0";
import { deserializeAws_restJson1UnshareApplicationCommand, serializeAws_restJson1UnshareApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, UnshareApplicationCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, UnshareApplicationCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new UnshareApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnshareApplicationCommandInput} for command's `input` shape.
 * @see {@link UnshareApplicationCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnshareApplicationCommand = /** @class */ (function (_super) {
    __extends(UnshareApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnshareApplicationCommand(input) {
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
    UnshareApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "UnshareApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnshareApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnshareApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UnshareApplicationCommand(input, context);
    };
    UnshareApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UnshareApplicationCommand(output, context);
    };
    return UnshareApplicationCommand;
}($Command));
export { UnshareApplicationCommand };
//# sourceMappingURL=UnshareApplicationCommand.js.map