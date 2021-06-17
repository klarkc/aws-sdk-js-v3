import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { StartJobRequest, StartJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartJobCommandInput extends StartJobRequest {
}
export interface StartJobCommandOutput extends StartJobResponse, __MetadataBearer {
}
/**
 * <p>This operation starts a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, StartJobCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, StartJobCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new StartJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartJobCommandInput} for command's `input` shape.
 * @see {@link StartJobCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartJobCommand extends $Command<StartJobCommandInput, StartJobCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: StartJobCommandInput;
    constructor(input: StartJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartJobCommandInput, StartJobCommandOutput>;
    private serialize;
    private deserialize;
}
