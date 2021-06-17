import { __extends } from "tslib";
import { GetDiskRequest, GetDiskResult } from "../models/models_0";
import { deserializeAws_json1_1GetDiskCommand, serializeAws_json1_1GetDiskCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific block storage disk.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDiskCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDiskCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDiskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiskCommandInput} for command's `input` shape.
 * @see {@link GetDiskCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDiskCommand = /** @class */ (function (_super) {
    __extends(GetDiskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDiskCommand(input) {
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
    GetDiskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDiskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDiskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDiskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDiskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDiskCommand(input, context);
    };
    GetDiskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDiskCommand(output, context);
    };
    return GetDiskCommand;
}($Command));
export { GetDiskCommand };
//# sourceMappingURL=GetDiskCommand.js.map