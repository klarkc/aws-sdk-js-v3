import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetGroupRequest, GetGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGroupCommandInput extends GetGroupRequest {
}
export interface GetGroupCommandOutput extends GetGroupResult, __MetadataBearer {
}
/**
 * <p>Retrieves group resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetGroupCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetGroupCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGroupCommand extends $Command<GetGroupCommandInput, GetGroupCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetGroupCommandInput;
    constructor(input: GetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupCommandInput, GetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
