import { __extends } from "tslib";
import { DissociateEntityFromThingRequest, DissociateEntityFromThingResponse } from "../models/models_0";
import { deserializeAws_json1_1DissociateEntityFromThingCommand, serializeAws_json1_1DissociateEntityFromThingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only
 *          one entity of a particular type can be associated with a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DissociateEntityFromThingCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DissociateEntityFromThingCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DissociateEntityFromThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DissociateEntityFromThingCommandInput} for command's `input` shape.
 * @see {@link DissociateEntityFromThingCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DissociateEntityFromThingCommand = /** @class */ (function (_super) {
    __extends(DissociateEntityFromThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DissociateEntityFromThingCommand(input) {
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
    DissociateEntityFromThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "DissociateEntityFromThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DissociateEntityFromThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DissociateEntityFromThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DissociateEntityFromThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DissociateEntityFromThingCommand(input, context);
    };
    DissociateEntityFromThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DissociateEntityFromThingCommand(output, context);
    };
    return DissociateEntityFromThingCommand;
}($Command));
export { DissociateEntityFromThingCommand };
//# sourceMappingURL=DissociateEntityFromThingCommand.js.map