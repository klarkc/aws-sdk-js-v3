import { __extends } from "tslib";
import { DescribeAnalysisRequest, DescribeAnalysisResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAnalysisCommand, serializeAws_restJson1DescribeAnalysisCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a summary of the metadata for an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAnalysisCommand = /** @class */ (function (_super) {
    __extends(DescribeAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAnalysisCommand(input) {
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
    DescribeAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAnalysisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAnalysisCommand(input, context);
    };
    DescribeAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAnalysisCommand(output, context);
    };
    return DescribeAnalysisCommand;
}($Command));
export { DescribeAnalysisCommand };
//# sourceMappingURL=DescribeAnalysisCommand.js.map