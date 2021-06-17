import { __extends } from "tslib";
import { CreateBillingGroupRequest, CreateBillingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateBillingGroupCommand, serializeAws_restJson1CreateBillingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBillingGroupCommand = /** @class */ (function (_super) {
    __extends(CreateBillingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBillingGroupCommand(input) {
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
    CreateBillingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateBillingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBillingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBillingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBillingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateBillingGroupCommand(input, context);
    };
    CreateBillingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateBillingGroupCommand(output, context);
    };
    return CreateBillingGroupCommand;
}($Command));
export { CreateBillingGroupCommand };
//# sourceMappingURL=CreateBillingGroupCommand.js.map