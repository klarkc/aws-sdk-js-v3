import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { GetParallelDataRequest, GetParallelDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetParallelDataCommandInput extends GetParallelDataRequest {
}
export interface GetParallelDataCommandOutput extends GetParallelDataResponse, __MetadataBearer {
}
/**
 * <p>Provides information about a parallel data resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, GetParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, GetParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new GetParallelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParallelDataCommandInput} for command's `input` shape.
 * @see {@link GetParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetParallelDataCommand extends $Command<GetParallelDataCommandInput, GetParallelDataCommandOutput, TranslateClientResolvedConfig> {
    readonly input: GetParallelDataCommandInput;
    constructor(input: GetParallelDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParallelDataCommandInput, GetParallelDataCommandOutput>;
    private serialize;
    private deserialize;
}
