import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { UpdateUserRequest, UpdateUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserCommandInput extends UpdateUserRequest {
}
export interface UpdateUserCommandOutput extends UpdateUserResponse, __MetadataBearer {
}
/**
 * Updates the information for an ActiveMQ user.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateUserCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateUserCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserCommand extends $Command<UpdateUserCommandInput, UpdateUserCommandOutput, MqClientResolvedConfig> {
    readonly input: UpdateUserCommandInput;
    constructor(input: UpdateUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserCommandInput, UpdateUserCommandOutput>;
    private serialize;
    private deserialize;
}
