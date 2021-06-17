import { __extends } from "tslib";
import { GetEffectivePoliciesRequest, GetEffectivePoliciesResponse } from "../models/models_1";
import { deserializeAws_restJson1GetEffectivePoliciesCommand, serializeAws_restJson1GetEffectivePoliciesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the policies that have an effect on the authorization behavior of the
 *          specified device when it connects to the AWS IoT device gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetEffectivePoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetEffectivePoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetEffectivePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEffectivePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEffectivePoliciesCommand = /** @class */ (function (_super) {
    __extends(GetEffectivePoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEffectivePoliciesCommand(input) {
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
    GetEffectivePoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetEffectivePoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEffectivePoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEffectivePoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEffectivePoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEffectivePoliciesCommand(input, context);
    };
    GetEffectivePoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEffectivePoliciesCommand(output, context);
    };
    return GetEffectivePoliciesCommand;
}($Command));
export { GetEffectivePoliciesCommand };
//# sourceMappingURL=GetEffectivePoliciesCommand.js.map