import { __extends } from "tslib";
import { DescribeAccountSettingsRequest, DescribeAccountSettingsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAccountSettingsCommand, serializeAws_restJson1DescribeAccountSettingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the settings that were used when your QuickSight subscription was first
 *             created in this AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAccountSettingsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAccountSettingsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountSettingsCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountSettingsCommand(input) {
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
    DescribeAccountSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeAccountSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAccountSettingsCommand(input, context);
    };
    DescribeAccountSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAccountSettingsCommand(output, context);
    };
    return DescribeAccountSettingsCommand;
}($Command));
export { DescribeAccountSettingsCommand };
//# sourceMappingURL=DescribeAccountSettingsCommand.js.map