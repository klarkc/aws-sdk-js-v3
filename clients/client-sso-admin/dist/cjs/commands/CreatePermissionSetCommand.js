"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissionSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a permission set within a specified SSO instance.</p>
 *          <note>
 *             <p>To grant users and groups access to AWS account resources, use <code>
 *                   <a>CreateAccountAssignment</a>
 *                </code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreatePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreatePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreatePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePermissionSetCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreatePermissionSetCommand extends smithy_client_1.Command {
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
        const clientName = "SSOAdminClient";
        const commandName = "CreatePermissionSetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreatePermissionSetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreatePermissionSetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreatePermissionSetCommand(output, context);
    }
}
exports.CreatePermissionSetCommand = CreatePermissionSetCommand;
//# sourceMappingURL=CreatePermissionSetCommand.js.map