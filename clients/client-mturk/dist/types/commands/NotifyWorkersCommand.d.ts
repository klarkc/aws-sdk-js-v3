import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { NotifyWorkersRequest, NotifyWorkersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface NotifyWorkersCommandInput extends NotifyWorkersRequest {
}
export interface NotifyWorkersCommandOutput extends NotifyWorkersResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>NotifyWorkers</code>
 *             operation sends an email to one or more Workers that you specify with
 *             the Worker ID. You can specify up to 100 Worker IDs to send the same
 *             message with a single call to the NotifyWorkers operation. The
 *             NotifyWorkers operation will send a notification email to a Worker
 *             only if you have previously approved or rejected work from the
 *             Worker.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, NotifyWorkersCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, NotifyWorkersCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new NotifyWorkersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyWorkersCommandInput} for command's `input` shape.
 * @see {@link NotifyWorkersCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class NotifyWorkersCommand extends $Command<NotifyWorkersCommandInput, NotifyWorkersCommandOutput, MTurkClientResolvedConfig> {
    readonly input: NotifyWorkersCommandInput;
    constructor(input: NotifyWorkersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyWorkersCommandInput, NotifyWorkersCommandOutput>;
    private serialize;
    private deserialize;
}
