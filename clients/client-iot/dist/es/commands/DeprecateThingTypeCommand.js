import { __extends } from "tslib";
import { DeprecateThingTypeRequest, DeprecateThingTypeResponse } from "../models/models_1";
import { deserializeAws_restJson1DeprecateThingTypeCommand, serializeAws_restJson1DeprecateThingTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deprecates a thing type. You can not associate new things with deprecated thing
 * 			type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeprecateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeprecateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeprecateThingTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprecateThingTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeprecateThingTypeCommand = /** @class */ (function (_super) {
    __extends(DeprecateThingTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeprecateThingTypeCommand(input) {
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
    DeprecateThingTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeprecateThingTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeprecateThingTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeprecateThingTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeprecateThingTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeprecateThingTypeCommand(input, context);
    };
    DeprecateThingTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeprecateThingTypeCommand(output, context);
    };
    return DeprecateThingTypeCommand;
}($Command));
export { DeprecateThingTypeCommand };
//# sourceMappingURL=DeprecateThingTypeCommand.js.map