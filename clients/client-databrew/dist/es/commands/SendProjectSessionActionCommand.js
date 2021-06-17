import { __extends } from "tslib";
import { SendProjectSessionActionRequest, SendProjectSessionActionResponse } from "../models/models_0";
import { deserializeAws_restJson1SendProjectSessionActionCommand, serializeAws_restJson1SendProjectSessionActionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Performs a recipe step within an interactive DataBrew session that's currently
 *             open.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, SendProjectSessionActionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, SendProjectSessionActionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new SendProjectSessionActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendProjectSessionActionCommandInput} for command's `input` shape.
 * @see {@link SendProjectSessionActionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendProjectSessionActionCommand = /** @class */ (function (_super) {
    __extends(SendProjectSessionActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendProjectSessionActionCommand(input) {
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
    SendProjectSessionActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "SendProjectSessionActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendProjectSessionActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendProjectSessionActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendProjectSessionActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendProjectSessionActionCommand(input, context);
    };
    SendProjectSessionActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendProjectSessionActionCommand(output, context);
    };
    return SendProjectSessionActionCommand;
}($Command));
export { SendProjectSessionActionCommand };
//# sourceMappingURL=SendProjectSessionActionCommand.js.map