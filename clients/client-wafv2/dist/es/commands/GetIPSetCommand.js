import { __extends } from "tslib";
import { GetIPSetRequest, GetIPSetResponse } from "../models/models_0";
import { deserializeAws_json1_1GetIPSetCommand, serializeAws_json1_1GetIPSetCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified <a>IPSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetIPSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIPSetCommandInput} for command's `input` shape.
 * @see {@link GetIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIPSetCommand = /** @class */ (function (_super) {
    __extends(GetIPSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIPSetCommand(input) {
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
    GetIPSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "GetIPSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIPSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIPSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIPSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetIPSetCommand(input, context);
    };
    GetIPSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetIPSetCommand(output, context);
    };
    return GetIPSetCommand;
}($Command));
export { GetIPSetCommand };
//# sourceMappingURL=GetIPSetCommand.js.map