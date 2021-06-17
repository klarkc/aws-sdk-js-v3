import { __extends } from "tslib";
import { ListUploadsRequest, ListUploadsResult } from "../models/models_0";
import { deserializeAws_json1_1ListUploadsCommand, serializeAws_json1_1ListUploadsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about uploads, given an AWS Device Farm project ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListUploadsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListUploadsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListUploadsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUploadsCommandInput} for command's `input` shape.
 * @see {@link ListUploadsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUploadsCommand = /** @class */ (function (_super) {
    __extends(ListUploadsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUploadsCommand(input) {
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
    ListUploadsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListUploadsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUploadsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUploadsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUploadsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListUploadsCommand(input, context);
    };
    ListUploadsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListUploadsCommand(output, context);
    };
    return ListUploadsCommand;
}($Command));
export { ListUploadsCommand };
//# sourceMappingURL=ListUploadsCommand.js.map