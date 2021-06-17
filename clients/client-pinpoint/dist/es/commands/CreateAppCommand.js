import { __extends } from "tslib";
import { CreateAppRequest, CreateAppResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAppCommand, serializeAws_restJson1CreateAppCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateAppCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateAppCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAppCommand = /** @class */ (function (_super) {
    __extends(CreateAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAppCommand(input) {
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
    CreateAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreateAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAppCommand(input, context);
    };
    CreateAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAppCommand(output, context);
    };
    return CreateAppCommand;
}($Command));
export { CreateAppCommand };
//# sourceMappingURL=CreateAppCommand.js.map