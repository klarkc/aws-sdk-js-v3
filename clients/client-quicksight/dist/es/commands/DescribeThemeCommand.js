import { __extends } from "tslib";
import { DescribeThemeRequest, DescribeThemeResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeThemeCommand, serializeAws_restJson1DescribeThemeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeThemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThemeCommandInput} for command's `input` shape.
 * @see {@link DescribeThemeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeThemeCommand = /** @class */ (function (_super) {
    __extends(DescribeThemeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeThemeCommand(input) {
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
    DescribeThemeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeThemeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeThemeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeThemeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeThemeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeThemeCommand(input, context);
    };
    DescribeThemeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeThemeCommand(output, context);
    };
    return DescribeThemeCommand;
}($Command));
export { DescribeThemeCommand };
//# sourceMappingURL=DescribeThemeCommand.js.map