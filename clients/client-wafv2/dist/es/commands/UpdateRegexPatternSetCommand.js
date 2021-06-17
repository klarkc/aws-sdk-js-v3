import { __extends } from "tslib";
import { UpdateRegexPatternSetRequest, UpdateRegexPatternSetResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateRegexPatternSetCommand, serializeAws_json1_1UpdateRegexPatternSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified <a>RegexPatternSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateRegexPatternSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateRegexPatternSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link UpdateRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRegexPatternSetCommand = /** @class */ (function (_super) {
    __extends(UpdateRegexPatternSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRegexPatternSetCommand(input) {
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
    UpdateRegexPatternSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "UpdateRegexPatternSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRegexPatternSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRegexPatternSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRegexPatternSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRegexPatternSetCommand(input, context);
    };
    UpdateRegexPatternSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRegexPatternSetCommand(output, context);
    };
    return UpdateRegexPatternSetCommand;
}($Command));
export { UpdateRegexPatternSetCommand };
//# sourceMappingURL=UpdateRegexPatternSetCommand.js.map