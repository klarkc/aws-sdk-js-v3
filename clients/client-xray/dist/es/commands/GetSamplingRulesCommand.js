import { __extends } from "tslib";
import { GetSamplingRulesRequest, GetSamplingRulesResult } from "../models/models_0";
import { deserializeAws_restJson1GetSamplingRulesCommand, serializeAws_restJson1GetSamplingRulesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingRulesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingRulesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetSamplingRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSamplingRulesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingRulesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSamplingRulesCommand = /** @class */ (function (_super) {
    __extends(GetSamplingRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSamplingRulesCommand(input) {
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
    GetSamplingRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetSamplingRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSamplingRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSamplingRulesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSamplingRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSamplingRulesCommand(input, context);
    };
    GetSamplingRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSamplingRulesCommand(output, context);
    };
    return GetSamplingRulesCommand;
}($Command));
export { GetSamplingRulesCommand };
//# sourceMappingURL=GetSamplingRulesCommand.js.map