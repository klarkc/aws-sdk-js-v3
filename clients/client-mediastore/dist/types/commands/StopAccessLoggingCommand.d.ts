import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { StopAccessLoggingInput, StopAccessLoggingOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopAccessLoggingCommandInput extends StopAccessLoggingInput {
}
export interface StopAccessLoggingCommandOutput extends StopAccessLoggingOutput, __MetadataBearer {
}
/**
 * <p>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, StopAccessLoggingCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, StopAccessLoggingCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new StopAccessLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAccessLoggingCommandInput} for command's `input` shape.
 * @see {@link StopAccessLoggingCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopAccessLoggingCommand extends $Command<StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: StopAccessLoggingCommandInput;
    constructor(input: StopAccessLoggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
