import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { ListExperimentsRequest, ListExperimentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListExperimentsCommandInput extends ListExperimentsRequest {
}
export interface ListExperimentsCommandOutput extends ListExperimentsResponse, __MetadataBearer {
}
/**
 * <p>Lists your experiments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new ListExperimentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExperimentsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListExperimentsCommand extends $Command<ListExperimentsCommandInput, ListExperimentsCommandOutput, FisClientResolvedConfig> {
    readonly input: ListExperimentsCommandInput;
    constructor(input: ListExperimentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListExperimentsCommandInput, ListExperimentsCommandOutput>;
    private serialize;
    private deserialize;
}
