import { __extends } from "tslib";
import { AssociateEntityToThingRequest, AssociateEntityToThingResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateEntityToThingCommand, serializeAws_json1_1AssociateEntityToThingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a device with a concrete thing that is in the user's registry.</p>
 *          <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, AssociateEntityToThingCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, AssociateEntityToThingCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new AssociateEntityToThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEntityToThingCommandInput} for command's `input` shape.
 * @see {@link AssociateEntityToThingCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateEntityToThingCommand = /** @class */ (function (_super) {
    __extends(AssociateEntityToThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateEntityToThingCommand(input) {
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
    AssociateEntityToThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "AssociateEntityToThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateEntityToThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateEntityToThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateEntityToThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateEntityToThingCommand(input, context);
    };
    AssociateEntityToThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateEntityToThingCommand(output, context);
    };
    return AssociateEntityToThingCommand;
}($Command));
export { AssociateEntityToThingCommand };
//# sourceMappingURL=AssociateEntityToThingCommand.js.map