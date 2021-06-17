import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteAccountSettingRequest, DeleteAccountSettingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccountSettingCommandInput extends DeleteAccountSettingRequest {
}
export interface DeleteAccountSettingCommandOutput extends DeleteAccountSettingResponse, __MetadataBearer {
}
/**
 * <p>Disables an account setting for a specified IAM user, IAM role, or the root user for
 * 			an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteAccountSettingCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteAccountSettingCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteAccountSettingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountSettingCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccountSettingCommand extends $Command<DeleteAccountSettingCommandInput, DeleteAccountSettingCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteAccountSettingCommandInput;
    constructor(input: DeleteAccountSettingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccountSettingCommandInput, DeleteAccountSettingCommandOutput>;
    private serialize;
    private deserialize;
}
