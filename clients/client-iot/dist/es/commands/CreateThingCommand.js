import { __extends } from "tslib";
import { CreateThingRequest, CreateThingResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateThingCommand, serializeAws_restJson1CreateThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a thing record in the registry. If this call is made multiple times using
 * 			the same thing name and configuration, the call will succeed. If this call is made with
 * 			the same thing name but different configuration a
 * 				<code>ResourceAlreadyExistsException</code> is thrown.</p>
 * 		       <note>
 * 			         <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
 * 				information about authorizing control plane actions.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThingCommandInput} for command's `input` shape.
 * @see {@link CreateThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateThingCommand = /** @class */ (function (_super) {
    __extends(CreateThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateThingCommand(input) {
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
    CreateThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateThingCommand(input, context);
    };
    CreateThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateThingCommand(output, context);
    };
    return CreateThingCommand;
}($Command));
export { CreateThingCommand };
//# sourceMappingURL=CreateThingCommand.js.map