import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { UpdateArchiveRequest, UpdateArchiveResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateArchiveCommandInput extends UpdateArchiveRequest {
}
export interface UpdateArchiveCommandOutput extends UpdateArchiveResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, UpdateArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, UpdateArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new UpdateArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateArchiveCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateArchiveCommand extends $Command<UpdateArchiveCommandInput, UpdateArchiveCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: UpdateArchiveCommandInput;
    constructor(input: UpdateArchiveCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateArchiveCommandInput, UpdateArchiveCommandOutput>;
    private serialize;
    private deserialize;
}
