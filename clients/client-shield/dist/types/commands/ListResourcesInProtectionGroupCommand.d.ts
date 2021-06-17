import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { ListResourcesInProtectionGroupRequest, ListResourcesInProtectionGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourcesInProtectionGroupCommandInput extends ListResourcesInProtectionGroupRequest {
}
export interface ListResourcesInProtectionGroupCommandOutput extends ListResourcesInProtectionGroupResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the resources that are included in the protection group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListResourcesInProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListResourcesInProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListResourcesInProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesInProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link ListResourcesInProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourcesInProtectionGroupCommand extends $Command<ListResourcesInProtectionGroupCommandInput, ListResourcesInProtectionGroupCommandOutput, ShieldClientResolvedConfig> {
    readonly input: ListResourcesInProtectionGroupCommandInput;
    constructor(input: ListResourcesInProtectionGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourcesInProtectionGroupCommandInput, ListResourcesInProtectionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
