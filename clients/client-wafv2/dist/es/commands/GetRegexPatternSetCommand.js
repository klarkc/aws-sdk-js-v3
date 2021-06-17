import { __extends } from "tslib";
import { GetRegexPatternSetRequest, GetRegexPatternSetResponse } from "../models/models_0";
import { deserializeAws_json1_1GetRegexPatternSetCommand, serializeAws_json1_1GetRegexPatternSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified <a>RegexPatternSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRegexPatternSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRegexPatternSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link GetRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRegexPatternSetCommand = /** @class */ (function (_super) {
    __extends(GetRegexPatternSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRegexPatternSetCommand(input) {
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
    GetRegexPatternSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "GetRegexPatternSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRegexPatternSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRegexPatternSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRegexPatternSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRegexPatternSetCommand(input, context);
    };
    GetRegexPatternSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRegexPatternSetCommand(output, context);
    };
    return GetRegexPatternSetCommand;
}($Command));
export { GetRegexPatternSetCommand };
//# sourceMappingURL=GetRegexPatternSetCommand.js.map