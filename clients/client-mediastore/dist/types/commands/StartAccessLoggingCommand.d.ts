import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { StartAccessLoggingInput, StartAccessLoggingOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartAccessLoggingCommandInput extends StartAccessLoggingInput {
}
export interface StartAccessLoggingCommandOutput extends StartAccessLoggingOutput, __MetadataBearer {
}
/**
 * <p>Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, StartAccessLoggingCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, StartAccessLoggingCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new StartAccessLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAccessLoggingCommandInput} for command's `input` shape.
 * @see {@link StartAccessLoggingCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartAccessLoggingCommand extends $Command<StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: StartAccessLoggingCommandInput;
    constructor(input: StartAccessLoggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
