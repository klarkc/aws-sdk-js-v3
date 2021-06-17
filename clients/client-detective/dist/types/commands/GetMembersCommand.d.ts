import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { GetMembersRequest, GetMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMembersCommandInput extends GetMembersRequest {
}
export interface GetMembersCommandOutput extends GetMembersResponse, __MetadataBearer {
}
/**
 * <p>Returns the membership details for specified member accounts for a behavior
 *          graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, GetMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, GetMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new GetMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMembersCommandInput} for command's `input` shape.
 * @see {@link GetMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMembersCommand extends $Command<GetMembersCommandInput, GetMembersCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: GetMembersCommandInput;
    constructor(input: GetMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMembersCommandInput, GetMembersCommandOutput>;
    private serialize;
    private deserialize;
}
