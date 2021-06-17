import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RevokeFlowEntitlementRequest, RevokeFlowEntitlementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeFlowEntitlementCommandInput extends RevokeFlowEntitlementRequest {
}
export interface RevokeFlowEntitlementCommandOutput extends RevokeFlowEntitlementResponse, __MetadataBearer {
}
/**
 * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RevokeFlowEntitlementCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RevokeFlowEntitlementCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RevokeFlowEntitlementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeFlowEntitlementCommandInput} for command's `input` shape.
 * @see {@link RevokeFlowEntitlementCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeFlowEntitlementCommand extends $Command<RevokeFlowEntitlementCommandInput, RevokeFlowEntitlementCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: RevokeFlowEntitlementCommandInput;
    constructor(input: RevokeFlowEntitlementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeFlowEntitlementCommandInput, RevokeFlowEntitlementCommandOutput>;
    private serialize;
    private deserialize;
}
