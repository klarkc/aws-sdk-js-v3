import { __extends } from "tslib";
import { DescribeThemePermissionsRequest, DescribeThemePermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeThemePermissionsCommand, serializeAws_restJson1DescribeThemePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the read and write permissions for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeThemePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThemePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeThemePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeThemePermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeThemePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeThemePermissionsCommand(input) {
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
    DescribeThemePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeThemePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeThemePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeThemePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeThemePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeThemePermissionsCommand(input, context);
    };
    DescribeThemePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeThemePermissionsCommand(output, context);
    };
    return DescribeThemePermissionsCommand;
}($Command));
export { DescribeThemePermissionsCommand };
//# sourceMappingURL=DescribeThemePermissionsCommand.js.map