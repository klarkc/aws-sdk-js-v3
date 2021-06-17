import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListHITsRequest, ListHITsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHITsCommandInput extends ListHITsRequest {
}
export interface ListHITsCommandOutput extends ListHITsResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>ListHITs</code>
 *             operation returns all of a Requester's HITs. The operation returns
 *             HITs of any status, except for HITs that have been deleted of with
 *             the DeleteHIT operation or that have been auto-deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListHITsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListHITsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHITsCommandInput} for command's `input` shape.
 * @see {@link ListHITsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHITsCommand extends $Command<ListHITsCommandInput, ListHITsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListHITsCommandInput;
    constructor(input: ListHITsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHITsCommandInput, ListHITsCommandOutput>;
    private serialize;
    private deserialize;
}
