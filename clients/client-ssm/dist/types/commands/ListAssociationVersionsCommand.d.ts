import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListAssociationVersionsRequest, ListAssociationVersionsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssociationVersionsCommandInput extends ListAssociationVersionsRequest {
}
export interface ListAssociationVersionsCommandOutput extends ListAssociationVersionsResult, __MetadataBearer {
}
/**
 * <p>Retrieves all versions of an association for a specific association ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListAssociationVersionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListAssociationVersionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListAssociationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationVersionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssociationVersionsCommand extends $Command<ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListAssociationVersionsCommandInput;
    constructor(input: ListAssociationVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
