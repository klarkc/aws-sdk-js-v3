import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListUniqueProblemsRequest, ListUniqueProblemsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUniqueProblemsCommandInput extends ListUniqueProblemsRequest {
}
export interface ListUniqueProblemsCommandOutput extends ListUniqueProblemsResult, __MetadataBearer {
}
/**
 * <p>Gets information about unique problems, such as exceptions or crashes.</p>
 *         <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
 *             if a call in your application consistently raises an exception (<code>OutOfBoundsException in
 *                 MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many
 *             individual entries for that exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListUniqueProblemsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListUniqueProblemsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListUniqueProblemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUniqueProblemsCommandInput} for command's `input` shape.
 * @see {@link ListUniqueProblemsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUniqueProblemsCommand extends $Command<ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListUniqueProblemsCommandInput;
    constructor(input: ListUniqueProblemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput>;
    private serialize;
    private deserialize;
}
