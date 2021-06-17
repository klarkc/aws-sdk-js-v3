import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { GetJobRequest, GetJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobCommandInput extends GetJobRequest {
}
export interface GetJobCommandOutput extends GetJobResponse, __MetadataBearer {
}
/**
 * <p>This operation returns information about a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetJobCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetJobCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobCommand extends $Command<GetJobCommandInput, GetJobCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: GetJobCommandInput;
    constructor(input: GetJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobCommandInput, GetJobCommandOutput>;
    private serialize;
    private deserialize;
}
