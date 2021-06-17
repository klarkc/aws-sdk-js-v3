import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { CreateArchiveRequest, CreateArchiveResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateArchiveCommandInput extends CreateArchiveRequest {
}
export interface CreateArchiveCommandOutput extends CreateArchiveResponse, __MetadataBearer {
}
/**
 * <p>Creates an archive of events with the specified settings. When you create an archive,
 *       incoming events might not immediately start being sent to the archive. Allow a short period of
 *       time for changes to take effect. If you do not specify a pattern to filter events sent to the
 *       archive, all events are sent to the archive except replayed events. Replayed events are not
 *       sent to an archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreateArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreateArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new CreateArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateArchiveCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateArchiveCommand extends $Command<CreateArchiveCommandInput, CreateArchiveCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: CreateArchiveCommandInput;
    constructor(input: CreateArchiveCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateArchiveCommandInput, CreateArchiveCommandOutput>;
    private serialize;
    private deserialize;
}
