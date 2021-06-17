import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DeleteProtectionGroupRequest, DeleteProtectionGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProtectionGroupCommandInput extends DeleteProtectionGroupRequest {
}
export interface DeleteProtectionGroupCommandOutput extends DeleteProtectionGroupResponse, __MetadataBearer {
}
/**
 * <p>Removes the specified protection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DeleteProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DeleteProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DeleteProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProtectionGroupCommand extends $Command<DeleteProtectionGroupCommandInput, DeleteProtectionGroupCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DeleteProtectionGroupCommandInput;
    constructor(input: DeleteProtectionGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProtectionGroupCommandInput, DeleteProtectionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
