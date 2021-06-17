import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { ListProjectsRequest, ListProjectsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProjectsCommandInput extends ListProjectsRequest {
}
export interface ListProjectsCommandOutput extends ListProjectsResult, __MetadataBearer {
}
/**
 * <p>
 *             Lists projects in AWS Mobile Hub.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ListProjectsCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ListProjectsCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProjectsCommand extends $Command<ListProjectsCommandInput, ListProjectsCommandOutput, MobileClientResolvedConfig> {
    readonly input: ListProjectsCommandInput;
    constructor(input: ListProjectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MobileClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProjectsCommandInput, ListProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
