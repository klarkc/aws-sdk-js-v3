import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { UpdateGroupRequest, UpdateGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateGroupCommandInput extends UpdateGroupRequest {
}
export interface UpdateGroupCommandOutput extends UpdateGroupResult, __MetadataBearer {
}
/**
 * <p>Updates a group resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, UpdateGroupCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, UpdateGroupCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGroupCommand extends $Command<UpdateGroupCommandInput, UpdateGroupCommandOutput, XRayClientResolvedConfig> {
    readonly input: UpdateGroupCommandInput;
    constructor(input: UpdateGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGroupCommandInput, UpdateGroupCommandOutput>;
    private serialize;
    private deserialize;
}
