import { __extends } from "tslib";
import { DescribeDataSourcePermissionsRequest, DescribeDataSourcePermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDataSourcePermissionsCommand, serializeAws_restJson1DescribeDataSourcePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the resource permissions for a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDataSourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDataSourcePermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeDataSourcePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDataSourcePermissionsCommand(input) {
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
    DescribeDataSourcePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeDataSourcePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDataSourcePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDataSourcePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDataSourcePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDataSourcePermissionsCommand(input, context);
    };
    DescribeDataSourcePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDataSourcePermissionsCommand(output, context);
    };
    return DescribeDataSourcePermissionsCommand;
}($Command));
export { DescribeDataSourcePermissionsCommand };
//# sourceMappingURL=DescribeDataSourcePermissionsCommand.js.map