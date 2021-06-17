import { __extends } from "tslib";
import { CreateDynamicThingGroupRequest, CreateDynamicThingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDynamicThingGroupCommand, serializeAws_restJson1CreateDynamicThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a dynamic thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDynamicThingGroupCommand = /** @class */ (function (_super) {
    __extends(CreateDynamicThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDynamicThingGroupCommand(input) {
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
    CreateDynamicThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateDynamicThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDynamicThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDynamicThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDynamicThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDynamicThingGroupCommand(input, context);
    };
    CreateDynamicThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDynamicThingGroupCommand(output, context);
    };
    return CreateDynamicThingGroupCommand;
}($Command));
export { CreateDynamicThingGroupCommand };
//# sourceMappingURL=CreateDynamicThingGroupCommand.js.map