import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateSMBFileShareVisibilityInput, UpdateSMBFileShareVisibilityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSMBFileShareVisibilityCommandInput extends UpdateSMBFileShareVisibilityInput {
}
export interface UpdateSMBFileShareVisibilityCommandOutput extends UpdateSMBFileShareVisibilityOutput, __MetadataBearer {
}
/**
 * <p>Controls whether the shares on a gateway are visible in a net view or browse
 *          list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSMBFileShareVisibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSMBFileShareVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBFileShareVisibilityCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSMBFileShareVisibilityCommand extends $Command<UpdateSMBFileShareVisibilityCommandInput, UpdateSMBFileShareVisibilityCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateSMBFileShareVisibilityCommandInput;
    constructor(input: UpdateSMBFileShareVisibilityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSMBFileShareVisibilityCommandInput, UpdateSMBFileShareVisibilityCommandOutput>;
    private serialize;
    private deserialize;
}
