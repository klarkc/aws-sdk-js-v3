"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a user and associates them with an existing file transfer protocol-enabled server.
 *       You can only create and associate users with servers that have the
 *         <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for
 *         <code>CreateUser</code>, you can specify the user name, set the home directory, store the
 *       user's public key, and assign the user's AWS Identity and Access Management (IAM)
 *       role. You can also optionally add a scope-down policy, and assign metadata with tags that can
 *       be used to group and search for users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateUserCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateUserCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateUserCommand extends smithy_client_1.Command {
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
        const clientName = "TransferClient";
        const commandName = "CreateUserCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateUserResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateUserCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateUserCommand(output, context);
    }
}
exports.CreateUserCommand = CreateUserCommand;
//# sourceMappingURL=CreateUserCommand.js.map