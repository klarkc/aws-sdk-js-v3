import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { UpdateProtectionGroupRequest, UpdateProtectionGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateProtectionGroupCommandInput extends UpdateProtectionGroupRequest {
}
export interface UpdateProtectionGroupCommandOutput extends UpdateProtectionGroupResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, UpdateProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, UpdateProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new UpdateProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateProtectionGroupCommand extends $Command<UpdateProtectionGroupCommandInput, UpdateProtectionGroupCommandOutput, ShieldClientResolvedConfig> {
    readonly input: UpdateProtectionGroupCommandInput;
    constructor(input: UpdateProtectionGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProtectionGroupCommandInput, UpdateProtectionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
