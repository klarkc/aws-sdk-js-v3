import { __extends } from "tslib";
import { CreateApplicationVersionRequest, CreateApplicationVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateApplicationVersionCommand, serializeAws_restJson1CreateApplicationVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateApplicationVersionCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateApplicationVersionCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new CreateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApplicationVersionCommand = /** @class */ (function (_super) {
    __extends(CreateApplicationVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateApplicationVersionCommand(input) {
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
    CreateApplicationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "CreateApplicationVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateApplicationVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateApplicationVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateApplicationVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateApplicationVersionCommand(input, context);
    };
    CreateApplicationVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateApplicationVersionCommand(output, context);
    };
    return CreateApplicationVersionCommand;
}($Command));
export { CreateApplicationVersionCommand };
//# sourceMappingURL=CreateApplicationVersionCommand.js.map