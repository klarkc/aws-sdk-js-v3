import { __extends } from "tslib";
import { CreateAccountCustomizationRequest, CreateAccountCustomizationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAccountCustomizationCommand, serializeAws_restJson1CreateAccountCustomizationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates Amazon QuickSight customizations the current AWS Region. Currently, you can
 *             add a custom default theme by using the <code>CreateAccountCustomization</code> or
 *                 <code>UpdateAccountCustomization</code> API operation. To further customize
 *             QuickSight by removing QuickSight sample assets and videos for all new users, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight.html">Customizing QuickSight</a> in the <i>Amazon QuickSight User
 *                 Guide.</i>
 *          </p>
 *         <p>You can create customizations for your AWS account or, if you specify a namespace, for
 *             a QuickSight namespace instead. Customizations that apply to a namespace always override
 *             customizations that apply to an AWS account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation.</p>
 *         <p>Before you use the <code>CreateAccountCustomization</code> API operation to add a theme
 *             as the namespace default, make sure that you first share the theme with the namespace.
 *             If you don't share it with the namespace, the theme isn't visible to your users
 *             even if you make it the default theme.
 *             To check if the theme is shared, view the current permissions by using the
 *             <code>
 *                <a>DescribeThemePermissions</a>
 *             </code> API operation.
 *             To share the theme, grant permissions by using the
 *             <code>
 *                <a>UpdateThemePermissions</a>
 *             </code> API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link CreateAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccountCustomizationCommand = /** @class */ (function (_super) {
    __extends(CreateAccountCustomizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAccountCustomizationCommand(input) {
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
    CreateAccountCustomizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateAccountCustomizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccountCustomizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAccountCustomizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAccountCustomizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAccountCustomizationCommand(input, context);
    };
    CreateAccountCustomizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAccountCustomizationCommand(output, context);
    };
    return CreateAccountCustomizationCommand;
}($Command));
export { CreateAccountCustomizationCommand };
//# sourceMappingURL=CreateAccountCustomizationCommand.js.map