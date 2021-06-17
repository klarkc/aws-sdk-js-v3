import { __extends } from "tslib";
import { GetNamespaceDeletionStatusRequest, GetNamespaceDeletionStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetNamespaceDeletionStatusCommand, serializeAws_json1_1GetNamespaceDeletionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the status of a namespace deletion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetNamespaceDeletionStatusCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetNamespaceDeletionStatusCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetNamespaceDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNamespaceDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetNamespaceDeletionStatusCommand = /** @class */ (function (_super) {
    __extends(GetNamespaceDeletionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetNamespaceDeletionStatusCommand(input) {
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
    GetNamespaceDeletionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "GetNamespaceDeletionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetNamespaceDeletionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetNamespaceDeletionStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetNamespaceDeletionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetNamespaceDeletionStatusCommand(input, context);
    };
    GetNamespaceDeletionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetNamespaceDeletionStatusCommand(output, context);
    };
    return GetNamespaceDeletionStatusCommand;
}($Command));
export { GetNamespaceDeletionStatusCommand };
//# sourceMappingURL=GetNamespaceDeletionStatusCommand.js.map