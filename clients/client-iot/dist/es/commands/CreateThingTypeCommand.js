import { __extends } from "tslib";
import { CreateThingTypeRequest, CreateThingTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateThingTypeCommand, serializeAws_restJson1CreateThingTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new thing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateThingTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThingTypeCommandInput} for command's `input` shape.
 * @see {@link CreateThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateThingTypeCommand = /** @class */ (function (_super) {
    __extends(CreateThingTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateThingTypeCommand(input) {
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
    CreateThingTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateThingTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateThingTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateThingTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateThingTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateThingTypeCommand(input, context);
    };
    CreateThingTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateThingTypeCommand(output, context);
    };
    return CreateThingTypeCommand;
}($Command));
export { CreateThingTypeCommand };
//# sourceMappingURL=CreateThingTypeCommand.js.map