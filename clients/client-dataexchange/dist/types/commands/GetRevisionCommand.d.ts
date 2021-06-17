import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { GetRevisionRequest, GetRevisionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRevisionCommandInput extends GetRevisionRequest {
}
export interface GetRevisionCommandOutput extends GetRevisionResponse, __MetadataBearer {
}
/**
 * <p>This operation returns information about a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new GetRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRevisionCommandInput} for command's `input` shape.
 * @see {@link GetRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRevisionCommand extends $Command<GetRevisionCommandInput, GetRevisionCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: GetRevisionCommandInput;
    constructor(input: GetRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRevisionCommandInput, GetRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
