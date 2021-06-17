import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { GrantFlowEntitlementsRequest, GrantFlowEntitlementsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GrantFlowEntitlementsCommandInput extends GrantFlowEntitlementsRequest {
}
export interface GrantFlowEntitlementsCommandOutput extends GrantFlowEntitlementsResponse, __MetadataBearer {
}
/**
 * Grants entitlements to an existing flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, GrantFlowEntitlementsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, GrantFlowEntitlementsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new GrantFlowEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GrantFlowEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GrantFlowEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GrantFlowEntitlementsCommand extends $Command<GrantFlowEntitlementsCommandInput, GrantFlowEntitlementsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: GrantFlowEntitlementsCommandInput;
    constructor(input: GrantFlowEntitlementsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GrantFlowEntitlementsCommandInput, GrantFlowEntitlementsCommandOutput>;
    private serialize;
    private deserialize;
}
