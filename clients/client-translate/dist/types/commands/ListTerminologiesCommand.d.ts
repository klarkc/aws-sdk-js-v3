import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { ListTerminologiesRequest, ListTerminologiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTerminologiesCommandInput extends ListTerminologiesRequest {
}
export interface ListTerminologiesCommandOutput extends ListTerminologiesResponse, __MetadataBearer {
}
/**
 * <p>Provides a list of custom terminologies associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTerminologiesCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListTerminologiesCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new ListTerminologiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTerminologiesCommandInput} for command's `input` shape.
 * @see {@link ListTerminologiesCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTerminologiesCommand extends $Command<ListTerminologiesCommandInput, ListTerminologiesCommandOutput, TranslateClientResolvedConfig> {
    readonly input: ListTerminologiesCommandInput;
    constructor(input: ListTerminologiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTerminologiesCommandInput, ListTerminologiesCommandOutput>;
    private serialize;
    private deserialize;
}
