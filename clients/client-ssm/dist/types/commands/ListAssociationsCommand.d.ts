import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListAssociationsRequest, ListAssociationsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssociationsCommandInput extends ListAssociationsRequest {
}
export interface ListAssociationsCommandOutput extends ListAssociationsResult, __MetadataBearer {
}
/**
 * <p>Returns all State Manager associations in the current AWS account and Region. You can limit
 *    the results to a specific State Manager association document or instance by specifying a
 *    filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListAssociationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListAssociationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssociationsCommand extends $Command<ListAssociationsCommandInput, ListAssociationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListAssociationsCommandInput;
    constructor(input: ListAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociationsCommandInput, ListAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
