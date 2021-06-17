import { __extends } from "tslib";
import { CreateThemeRequest, CreateThemeResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateThemeCommand, serializeAws_restJson1CreateThemeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a theme.</p>
 * 		       <p>A <i>theme</i> is set of configuration options for color and layout.
 * 			Themes apply to analyses and dashboards. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using
 * 			Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateThemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThemeCommandInput} for command's `input` shape.
 * @see {@link CreateThemeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateThemeCommand = /** @class */ (function (_super) {
    __extends(CreateThemeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateThemeCommand(input) {
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
    CreateThemeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateThemeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateThemeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateThemeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateThemeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateThemeCommand(input, context);
    };
    CreateThemeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateThemeCommand(output, context);
    };
    return CreateThemeCommand;
}($Command));
export { CreateThemeCommand };
//# sourceMappingURL=CreateThemeCommand.js.map