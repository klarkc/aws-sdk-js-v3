import { __extends } from "tslib";
import { DescribeAnalysisPermissionsRequest, DescribeAnalysisPermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAnalysisPermissionsCommand, serializeAws_restJson1DescribeAnalysisPermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides the read and write permissions for an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAnalysisPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAnalysisPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeAnalysisPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnalysisPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAnalysisPermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeAnalysisPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAnalysisPermissionsCommand(input) {
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
    DescribeAnalysisPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeAnalysisPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAnalysisPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAnalysisPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAnalysisPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAnalysisPermissionsCommand(input, context);
    };
    DescribeAnalysisPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAnalysisPermissionsCommand(output, context);
    };
    return DescribeAnalysisPermissionsCommand;
}($Command));
export { DescribeAnalysisPermissionsCommand };
//# sourceMappingURL=DescribeAnalysisPermissionsCommand.js.map