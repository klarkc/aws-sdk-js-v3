import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { DeleteParallelDataRequest, DeleteParallelDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteParallelDataCommandInput extends DeleteParallelDataRequest {
}
export interface DeleteParallelDataCommandOutput extends DeleteParallelDataResponse, __MetadataBearer {
}
/**
 * <p>Deletes a parallel data resource in Amazon Translate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, DeleteParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, DeleteParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new DeleteParallelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteParallelDataCommandInput} for command's `input` shape.
 * @see {@link DeleteParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteParallelDataCommand extends $Command<DeleteParallelDataCommandInput, DeleteParallelDataCommandOutput, TranslateClientResolvedConfig> {
    readonly input: DeleteParallelDataCommandInput;
    constructor(input: DeleteParallelDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteParallelDataCommandInput, DeleteParallelDataCommandOutput>;
    private serialize;
    private deserialize;
}
