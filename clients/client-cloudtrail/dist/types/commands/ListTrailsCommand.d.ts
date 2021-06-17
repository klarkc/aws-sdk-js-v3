import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { ListTrailsRequest, ListTrailsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTrailsCommandInput extends ListTrailsRequest {
}
export interface ListTrailsCommandOutput extends ListTrailsResponse, __MetadataBearer {
}
/**
 * <p>Lists trails that are in the current account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListTrailsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListTrailsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new ListTrailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrailsCommandInput} for command's `input` shape.
 * @see {@link ListTrailsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTrailsCommand extends $Command<ListTrailsCommandInput, ListTrailsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: ListTrailsCommandInput;
    constructor(input: ListTrailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrailsCommandInput, ListTrailsCommandOutput>;
    private serialize;
    private deserialize;
}
