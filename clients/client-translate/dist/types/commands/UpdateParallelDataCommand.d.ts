import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { UpdateParallelDataRequest, UpdateParallelDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateParallelDataCommandInput extends UpdateParallelDataRequest {
}
export interface UpdateParallelDataCommandOutput extends UpdateParallelDataResponse, __MetadataBearer {
}
/**
 * <p>Updates a previously created parallel data resource by importing a new input file from
 *       Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, UpdateParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, UpdateParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new UpdateParallelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateParallelDataCommandInput} for command's `input` shape.
 * @see {@link UpdateParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateParallelDataCommand extends $Command<UpdateParallelDataCommandInput, UpdateParallelDataCommandOutput, TranslateClientResolvedConfig> {
    readonly input: UpdateParallelDataCommandInput;
    constructor(input: UpdateParallelDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateParallelDataCommandInput, UpdateParallelDataCommandOutput>;
    private serialize;
    private deserialize;
}
