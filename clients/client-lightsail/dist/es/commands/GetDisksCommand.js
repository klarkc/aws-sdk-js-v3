import { __extends } from "tslib";
import { GetDisksRequest, GetDisksResult } from "../models/models_0";
import { deserializeAws_json1_1GetDisksCommand, serializeAws_json1_1GetDisksCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all block storage disks in your AWS account and region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDisksCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDisksCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDisksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDisksCommandInput} for command's `input` shape.
 * @see {@link GetDisksCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDisksCommand = /** @class */ (function (_super) {
    __extends(GetDisksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDisksCommand(input) {
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
    GetDisksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDisksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDisksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDisksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDisksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDisksCommand(input, context);
    };
    GetDisksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDisksCommand(output, context);
    };
    return GetDisksCommand;
}($Command));
export { GetDisksCommand };
//# sourceMappingURL=GetDisksCommand.js.map