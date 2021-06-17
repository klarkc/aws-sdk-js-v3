import { __extends } from "tslib";
import { GetOperationsForResourceRequest, GetOperationsForResourceResult } from "../models/models_1";
import { deserializeAws_json1_1GetOperationsForResourceCommand, serializeAws_json1_1GetOperationsForResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets operations for a specific resource (e.g., an instance or a static IP).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetOperationsForResourceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetOperationsForResourceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetOperationsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOperationsForResourceCommandInput} for command's `input` shape.
 * @see {@link GetOperationsForResourceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOperationsForResourceCommand = /** @class */ (function (_super) {
    __extends(GetOperationsForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOperationsForResourceCommand(input) {
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
    GetOperationsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetOperationsForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOperationsForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOperationsForResourceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOperationsForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOperationsForResourceCommand(input, context);
    };
    GetOperationsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOperationsForResourceCommand(output, context);
    };
    return GetOperationsForResourceCommand;
}($Command));
export { GetOperationsForResourceCommand };
//# sourceMappingURL=GetOperationsForResourceCommand.js.map