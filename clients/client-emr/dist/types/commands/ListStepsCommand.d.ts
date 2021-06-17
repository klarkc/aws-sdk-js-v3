import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStepsInput, ListStepsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStepsCommandInput extends ListStepsInput {
}
export interface ListStepsCommandOutput extends ListStepsOutput, __MetadataBearer {
}
/**
 * <p>Provides a list of steps for the cluster in reverse order unless you specify
 *             <code>stepIds</code> with the request of filter by <code>StepStates</code>. You can
 *          specify a maximum of 10 <code>stepIDs</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStepsCommandInput} for command's `input` shape.
 * @see {@link ListStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStepsCommand extends $Command<ListStepsCommandInput, ListStepsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListStepsCommandInput;
    constructor(input: ListStepsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStepsCommandInput, ListStepsCommandOutput>;
    private serialize;
    private deserialize;
}
