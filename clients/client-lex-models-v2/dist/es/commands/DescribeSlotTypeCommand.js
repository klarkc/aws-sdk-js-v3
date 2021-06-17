import { __extends } from "tslib";
import { DescribeSlotTypeRequest, DescribeSlotTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSlotTypeCommand, serializeAws_restJson1DescribeSlotTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets metadata information about a slot type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSlotTypeCommand = /** @class */ (function (_super) {
    __extends(DescribeSlotTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSlotTypeCommand(input) {
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
    DescribeSlotTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeSlotTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSlotTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSlotTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSlotTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSlotTypeCommand(input, context);
    };
    DescribeSlotTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSlotTypeCommand(output, context);
    };
    return DescribeSlotTypeCommand;
}($Command));
export { DescribeSlotTypeCommand };
//# sourceMappingURL=DescribeSlotTypeCommand.js.map