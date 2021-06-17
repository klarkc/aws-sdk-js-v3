import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { GetAccessControlEffectRequest, GetAccessControlEffectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAccessControlEffectCommandInput extends GetAccessControlEffectRequest {
}
export interface GetAccessControlEffectCommandOutput extends GetAccessControlEffectResponse, __MetadataBearer {
}
/**
 * <p>Gets the effects of an organization's access control rules as they apply to a
 *          specified IPv4 address, access protocol action, or user ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetAccessControlEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetAccessControlEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetAccessControlEffectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessControlEffectCommandInput} for command's `input` shape.
 * @see {@link GetAccessControlEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccessControlEffectCommand extends $Command<GetAccessControlEffectCommandInput, GetAccessControlEffectCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: GetAccessControlEffectCommandInput;
    constructor(input: GetAccessControlEffectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessControlEffectCommandInput, GetAccessControlEffectCommandOutput>;
    private serialize;
    private deserialize;
}
