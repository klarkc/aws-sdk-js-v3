"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetachManagedPolicyFromPermissionSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Detaches the attached IAM managed policy ARN from the specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DetachManagedPolicyFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachManagedPolicyFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DetachManagedPolicyFromPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DetachManagedPolicyFromPermissionSetCommand extends smithy_client_1.Command {
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
        const commandName = "DetachManagedPolicyFromPermissionSetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DetachManagedPolicyFromPermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DetachManagedPolicyFromPermissionSetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand(output, context);
    }
}
exports.DetachManagedPolicyFromPermissionSetCommand = DetachManagedPolicyFromPermissionSetCommand;
//# sourceMappingURL=DetachManagedPolicyFromPermissionSetCommand.js.map