import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { GetTerminologyRequest, GetTerminologyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTerminologyCommandInput extends GetTerminologyRequest {
}
export interface GetTerminologyCommandOutput extends GetTerminologyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a custom terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, GetTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, GetTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new GetTerminologyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTerminologyCommandInput} for command's `input` shape.
 * @see {@link GetTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTerminologyCommand extends $Command<GetTerminologyCommandInput, GetTerminologyCommandOutput, TranslateClientResolvedConfig> {
    readonly input: GetTerminologyCommandInput;
    constructor(input: GetTerminologyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTerminologyCommandInput, GetTerminologyCommandOutput>;
    private serialize;
    private deserialize;
}
