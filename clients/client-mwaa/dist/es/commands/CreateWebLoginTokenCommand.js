import { __extends } from "tslib";
import { CreateWebLoginTokenRequest, CreateWebLoginTokenResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateWebLoginTokenCommand, serializeAws_restJson1CreateWebLoginTokenCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateWebLoginTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateWebLoginTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new CreateWebLoginTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebLoginTokenCommandInput} for command's `input` shape.
 * @see {@link CreateWebLoginTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWebLoginTokenCommand = /** @class */ (function (_super) {
    __extends(CreateWebLoginTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWebLoginTokenCommand(input) {
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
    CreateWebLoginTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MWAAClient";
        var commandName = "CreateWebLoginTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWebLoginTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWebLoginTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWebLoginTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateWebLoginTokenCommand(input, context);
    };
    CreateWebLoginTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateWebLoginTokenCommand(output, context);
    };
    return CreateWebLoginTokenCommand;
}($Command));
export { CreateWebLoginTokenCommand };
//# sourceMappingURL=CreateWebLoginTokenCommand.js.map