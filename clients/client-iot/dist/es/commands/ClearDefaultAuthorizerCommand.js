import { __extends } from "tslib";
import { ClearDefaultAuthorizerRequest, ClearDefaultAuthorizerResponse } from "../models/models_0";
import { deserializeAws_restJson1ClearDefaultAuthorizerCommand, serializeAws_restJson1ClearDefaultAuthorizerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Clears the default authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ClearDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ClearDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ClearDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClearDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link ClearDefaultAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ClearDefaultAuthorizerCommand = /** @class */ (function (_super) {
    __extends(ClearDefaultAuthorizerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ClearDefaultAuthorizerCommand(input) {
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
    ClearDefaultAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ClearDefaultAuthorizerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ClearDefaultAuthorizerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ClearDefaultAuthorizerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ClearDefaultAuthorizerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ClearDefaultAuthorizerCommand(input, context);
    };
    ClearDefaultAuthorizerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ClearDefaultAuthorizerCommand(output, context);
    };
    return ClearDefaultAuthorizerCommand;
}($Command));
export { ClearDefaultAuthorizerCommand };
//# sourceMappingURL=ClearDefaultAuthorizerCommand.js.map