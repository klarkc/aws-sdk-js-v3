import { __extends } from "tslib";
import { DescribeExportRequest, DescribeExportResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeExportCommand, serializeAws_restJson1DescribeExportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specific export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportCommandInput} for command's `input` shape.
 * @see {@link DescribeExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExportCommand = /** @class */ (function (_super) {
    __extends(DescribeExportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeExportCommand(input) {
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
    DescribeExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeExportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeExportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeExportCommand(input, context);
    };
    DescribeExportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeExportCommand(output, context);
    };
    return DescribeExportCommand;
}($Command));
export { DescribeExportCommand };
//# sourceMappingURL=DescribeExportCommand.js.map