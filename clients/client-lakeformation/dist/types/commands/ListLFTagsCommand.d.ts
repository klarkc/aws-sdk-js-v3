import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListLFTagsRequest, ListLFTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLFTagsCommandInput extends ListLFTagsRequest {
}
export interface ListLFTagsCommandOutput extends ListLFTagsResponse, __MetadataBearer {
}
/**
 * <p>Lists tags that the requester has permission to view. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new ListLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLFTagsCommandInput} for command's `input` shape.
 * @see {@link ListLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLFTagsCommand extends $Command<ListLFTagsCommandInput, ListLFTagsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: ListLFTagsCommandInput;
    constructor(input: ListLFTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLFTagsCommandInput, ListLFTagsCommandOutput>;
    private serialize;
    private deserialize;
}
