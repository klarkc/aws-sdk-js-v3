import { __extends } from "tslib";
import { DescribeDashboardRequest, DescribeDashboardResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDashboardCommand, serializeAws_restJson1DescribeDashboardCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a summary for a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDashboardCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDashboardCommand = /** @class */ (function (_super) {
    __extends(DescribeDashboardCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDashboardCommand(input) {
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
    DescribeDashboardCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeDashboardCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDashboardRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDashboardResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDashboardCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDashboardCommand(input, context);
    };
    DescribeDashboardCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDashboardCommand(output, context);
    };
    return DescribeDashboardCommand;
}($Command));
export { DescribeDashboardCommand };
//# sourceMappingURL=DescribeDashboardCommand.js.map