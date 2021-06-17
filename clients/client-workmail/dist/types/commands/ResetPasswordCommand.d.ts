import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ResetPasswordRequest, ResetPasswordResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetPasswordCommandInput extends ResetPasswordRequest {
}
export interface ResetPasswordCommandOutput extends ResetPasswordResponse, __MetadataBearer {
}
/**
 * <p>Allows the administrator to reset the password for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ResetPasswordCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ResetPasswordCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ResetPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetPasswordCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetPasswordCommand extends $Command<ResetPasswordCommandInput, ResetPasswordCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ResetPasswordCommandInput;
    constructor(input: ResetPasswordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetPasswordCommandInput, ResetPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
