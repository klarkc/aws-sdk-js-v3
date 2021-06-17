"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountCustomizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateAccountCustomizationCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "QuickSightClient";
        const commandName = "CreateAccountCustomizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAccountCustomizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateAccountCustomizationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateAccountCustomizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateAccountCustomizationCommand(output, context);
    }
}
exports.CreateAccountCustomizationCommand = CreateAccountCustomizationCommand;
//# sourceMappingURL=CreateAccountCustomizationCommand.js.map