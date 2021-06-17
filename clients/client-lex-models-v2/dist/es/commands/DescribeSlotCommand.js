import { __extends } from "tslib";
import { DescribeSlotRequest, DescribeSlotResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSlotCommand, serializeAws_restJson1DescribeSlotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets metadata information about a slot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeSlotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSlotCommandInput} for command's `input` shape.
 * @see {@link DescribeSlotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSlotCommand = /** @class */ (function (_super) {
    __extends(DescribeSlotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSlotCommand(input) {
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
    DescribeSlotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeSlotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSlotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSlotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSlotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSlotCommand(input, context);
    };
    DescribeSlotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSlotCommand(output, context);
    };
    return DescribeSlotCommand;
}($Command));
export { DescribeSlotCommand };
//# sourceMappingURL=DescribeSlotCommand.js.map