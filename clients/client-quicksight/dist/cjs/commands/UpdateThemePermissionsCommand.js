"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThemePermissionsCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the resource permissions for a theme. Permissions apply to the action to grant or
 * 			revoke permissions on, for example <code>"quicksight:DescribeTheme"</code>.</p>
 * 		       <p>Theme permissions apply in groupings. Valid groupings include the following for the three
 * 			levels of permissions, which are user, owner, or no permissions: </p>
 * 			      <ul>
 *             <li>
 *                <p>User</p>
 * 					          <ul>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeTheme"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:ListThemeAliases"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:ListThemeVersions"</code>
 *                      </p>
 *                   </li>
 *                </ul>
 * 				        </li>
 *             <li>
 *                <p>Owner</p>
 * 					          <ul>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeTheme"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:ListThemeAliases"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:ListThemeVersions"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DeleteTheme"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:UpdateTheme"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:CreateThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DeleteThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:UpdateThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:UpdateThemePermissions"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeThemePermissions"</code>
 *                      </p>
 *                   </li>
 *                </ul>
 * 				        </li>
 *             <li>
 *                <p>To specify no permissions, omit the permissions list.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateThemePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateThemePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateThemePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThemePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateThemePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateThemePermissionsCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateThemePermissionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.UpdateThemePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.UpdateThemePermissionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateThemePermissionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateThemePermissionsCommand(output, context);
    }
}
exports.UpdateThemePermissionsCommand = UpdateThemePermissionsCommand;
//# sourceMappingURL=UpdateThemePermissionsCommand.js.map