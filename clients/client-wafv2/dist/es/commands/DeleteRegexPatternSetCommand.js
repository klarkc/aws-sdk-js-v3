import { __extends } from "tslib";
import { DeleteRegexPatternSetRequest, DeleteRegexPatternSetResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteRegexPatternSetCommand, serializeAws_json1_1DeleteRegexPatternSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified <a>RegexPatternSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteRegexPatternSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteRegexPatternSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link DeleteRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRegexPatternSetCommand = /** @class */ (function (_super) {
    __extends(DeleteRegexPatternSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRegexPatternSetCommand(input) {
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
    DeleteRegexPatternSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "DeleteRegexPatternSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRegexPatternSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRegexPatternSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRegexPatternSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRegexPatternSetCommand(input, context);
    };
    DeleteRegexPatternSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRegexPatternSetCommand(output, context);
    };
    return DeleteRegexPatternSetCommand;
}($Command));
export { DeleteRegexPatternSetCommand };
//# sourceMappingURL=DeleteRegexPatternSetCommand.js.map