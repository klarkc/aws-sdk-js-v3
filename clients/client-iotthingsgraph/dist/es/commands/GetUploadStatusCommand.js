import { __extends } from "tslib";
import { GetUploadStatusRequest, GetUploadStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetUploadStatusCommand, serializeAws_json1_1GetUploadStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the status of the specified upload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetUploadStatusCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetUploadStatusCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetUploadStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUploadStatusCommandInput} for command's `input` shape.
 * @see {@link GetUploadStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUploadStatusCommand = /** @class */ (function (_super) {
    __extends(GetUploadStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUploadStatusCommand(input) {
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
    GetUploadStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "GetUploadStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUploadStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUploadStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUploadStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetUploadStatusCommand(input, context);
    };
    GetUploadStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetUploadStatusCommand(output, context);
    };
    return GetUploadStatusCommand;
}($Command));
export { GetUploadStatusCommand };
//# sourceMappingURL=GetUploadStatusCommand.js.map