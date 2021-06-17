import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetGroupsRequest, GetGroupsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGroupsCommandInput extends GetGroupsRequest {
}
export interface GetGroupsCommandOutput extends GetGroupsResult, __MetadataBearer {
}
/**
 * <p>Retrieves all active group details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetGroupsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetGroupsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupsCommandInput} for command's `input` shape.
 * @see {@link GetGroupsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGroupsCommand extends $Command<GetGroupsCommandInput, GetGroupsCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetGroupsCommandInput;
    constructor(input: GetGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupsCommandInput, GetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
