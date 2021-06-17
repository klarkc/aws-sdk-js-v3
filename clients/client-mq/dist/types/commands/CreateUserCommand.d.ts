import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserCommandInput extends CreateUserRequest {
}
export interface CreateUserCommandOutput extends CreateUserResponse, __MetadataBearer {
}
/**
 * Creates an ActiveMQ user.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, CreateUserCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, CreateUserCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserCommand extends $Command<CreateUserCommandInput, CreateUserCommandOutput, MqClientResolvedConfig> {
    readonly input: CreateUserCommandInput;
    constructor(input: CreateUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserCommandInput, CreateUserCommandOutput>;
    private serialize;
    private deserialize;
}
