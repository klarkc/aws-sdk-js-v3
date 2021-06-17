import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { UpdateUserRequest, UpdateUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserCommandInput extends UpdateUserRequest {
}
export interface UpdateUserCommandOutput extends UpdateUserResponse, __MetadataBearer {
}
/**
 * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following:
 *       the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code>
 *       you specify.</p>
 *
 *          <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the
 *       updated user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateUserCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateUserCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserCommand extends $Command<UpdateUserCommandInput, UpdateUserCommandOutput, TransferClientResolvedConfig> {
    readonly input: UpdateUserCommandInput;
    constructor(input: UpdateUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserCommandInput, UpdateUserCommandOutput>;
    private serialize;
    private deserialize;
}
