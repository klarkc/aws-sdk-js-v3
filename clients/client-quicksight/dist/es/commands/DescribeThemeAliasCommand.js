import { __extends } from "tslib";
import { DescribeThemeAliasRequest, DescribeThemeAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeThemeAliasCommand, serializeAws_restJson1DescribeThemeAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the alias for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeThemeAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThemeAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeThemeAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeThemeAliasCommand = /** @class */ (function (_super) {
    __extends(DescribeThemeAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeThemeAliasCommand(input) {
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
    DescribeThemeAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeThemeAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeThemeAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeThemeAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeThemeAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeThemeAliasCommand(input, context);
    };
    DescribeThemeAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeThemeAliasCommand(output, context);
    };
    return DescribeThemeAliasCommand;
}($Command));
export { DescribeThemeAliasCommand };
//# sourceMappingURL=DescribeThemeAliasCommand.js.map