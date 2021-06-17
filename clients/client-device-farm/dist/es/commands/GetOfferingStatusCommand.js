import { __extends } from "tslib";
import { GetOfferingStatusRequest, GetOfferingStatusResult } from "../models/models_0";
import { deserializeAws_json1_1GetOfferingStatusCommand, serializeAws_json1_1GetOfferingStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the current status and future status of all offerings purchased by an AWS account. The response
 *             indicates how many offerings are currently available and the offerings that will be available in the next
 *             period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the
 *             operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetOfferingStatusCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetOfferingStatusCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetOfferingStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOfferingStatusCommandInput} for command's `input` shape.
 * @see {@link GetOfferingStatusCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOfferingStatusCommand = /** @class */ (function (_super) {
    __extends(GetOfferingStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOfferingStatusCommand(input) {
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
    GetOfferingStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetOfferingStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOfferingStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOfferingStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOfferingStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOfferingStatusCommand(input, context);
    };
    GetOfferingStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOfferingStatusCommand(output, context);
    };
    return GetOfferingStatusCommand;
}($Command));
export { GetOfferingStatusCommand };
//# sourceMappingURL=GetOfferingStatusCommand.js.map