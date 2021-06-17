import { __extends } from "tslib";
import { CreateOTAUpdateRequest, CreateOTAUpdateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateOTAUpdateCommand, serializeAws_restJson1CreateOTAUpdateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS IoT OTAUpdate on a target group of things or groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateOTAUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link CreateOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOTAUpdateCommand = /** @class */ (function (_super) {
    __extends(CreateOTAUpdateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOTAUpdateCommand(input) {
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
    CreateOTAUpdateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateOTAUpdateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOTAUpdateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOTAUpdateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOTAUpdateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateOTAUpdateCommand(input, context);
    };
    CreateOTAUpdateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateOTAUpdateCommand(output, context);
    };
    return CreateOTAUpdateCommand;
}($Command));
export { CreateOTAUpdateCommand };
//# sourceMappingURL=CreateOTAUpdateCommand.js.map