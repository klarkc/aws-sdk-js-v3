import { __extends } from "tslib";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePolicyCommand, serializeAws_restJson1CreatePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS IoT policy.</p>
 *          <p>The created policy is the default version for the policy. This operation creates a
 *          policy version with a version identifier of <b>1</b> and sets
 *             <b>1</b> as the policy's default version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreatePolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreatePolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePolicyCommand = /** @class */ (function (_super) {
    __extends(CreatePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePolicyCommand(input) {
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
    CreatePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreatePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePolicyCommand(input, context);
    };
    CreatePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePolicyCommand(output, context);
    };
    return CreatePolicyCommand;
}($Command));
export { CreatePolicyCommand };
//# sourceMappingURL=CreatePolicyCommand.js.map