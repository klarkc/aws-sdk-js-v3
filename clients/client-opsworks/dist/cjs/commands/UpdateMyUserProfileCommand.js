"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMyUserProfileCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates a user's SSH public key.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
 *       enabled or an attached policy that explicitly grants permissions. For more information about user
 *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateMyUserProfileCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateMyUserProfileCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UpdateMyUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMyUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateMyUserProfileCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateMyUserProfileCommand extends smithy_client_1.Command {
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
        const clientName = "OpsWorksClient";
        const commandName = "UpdateMyUserProfileCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateMyUserProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateMyUserProfileCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateMyUserProfileCommand(output, context);
    }
}
exports.UpdateMyUserProfileCommand = UpdateMyUserProfileCommand;
//# sourceMappingURL=UpdateMyUserProfileCommand.js.map