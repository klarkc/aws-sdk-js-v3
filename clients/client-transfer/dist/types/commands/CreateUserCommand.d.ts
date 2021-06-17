import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserCommandInput extends CreateUserRequest {
}
export interface CreateUserCommandOutput extends CreateUserResponse, __MetadataBearer {
}
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
export declare class CreateUserCommand extends $Command<CreateUserCommandInput, CreateUserCommandOutput, TransferClientResolvedConfig> {
    readonly input: CreateUserCommandInput;
    constructor(input: CreateUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserCommandInput, CreateUserCommandOutput>;
    private serialize;
    private deserialize;
}
