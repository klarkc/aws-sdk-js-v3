import { __extends } from "tslib";
import { CreateCliTokenRequest, CreateCliTokenResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCliTokenCommand, serializeAws_restJson1CreateCliTokenCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a CLI token to use Airflow CLI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateCliTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateCliTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new CreateCliTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCliTokenCommandInput} for command's `input` shape.
 * @see {@link CreateCliTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCliTokenCommand = /** @class */ (function (_super) {
    __extends(CreateCliTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCliTokenCommand(input) {
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
    CreateCliTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MWAAClient";
        var commandName = "CreateCliTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCliTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCliTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCliTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCliTokenCommand(input, context);
    };
    CreateCliTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCliTokenCommand(output, context);
    };
    return CreateCliTokenCommand;
}($Command));
export { CreateCliTokenCommand };
//# sourceMappingURL=CreateCliTokenCommand.js.map