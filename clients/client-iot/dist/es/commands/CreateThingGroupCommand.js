import { __extends } from "tslib";
import { CreateThingGroupRequest, CreateThingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateThingGroupCommand, serializeAws_restJson1CreateThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a thing group.</p>
 * 		       <note>
 * 			         <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
 * 				information about authorizing control plane actions.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateThingGroupCommand = /** @class */ (function (_super) {
    __extends(CreateThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateThingGroupCommand(input) {
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
    CreateThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateThingGroupCommand(input, context);
    };
    CreateThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateThingGroupCommand(output, context);
    };
    return CreateThingGroupCommand;
}($Command));
export { CreateThingGroupCommand };
//# sourceMappingURL=CreateThingGroupCommand.js.map