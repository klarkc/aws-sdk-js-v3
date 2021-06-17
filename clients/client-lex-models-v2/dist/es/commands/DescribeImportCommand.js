import { __extends } from "tslib";
import { DescribeImportRequest, DescribeImportResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeImportCommand, serializeAws_restJson1DescribeImportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specific import.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeImportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeImportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImportCommandInput} for command's `input` shape.
 * @see {@link DescribeImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImportCommand = /** @class */ (function (_super) {
    __extends(DescribeImportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeImportCommand(input) {
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
    DescribeImportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeImportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeImportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeImportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeImportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeImportCommand(input, context);
    };
    DescribeImportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeImportCommand(output, context);
    };
    return DescribeImportCommand;
}($Command));
export { DescribeImportCommand };
//# sourceMappingURL=DescribeImportCommand.js.map