import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { ListResponsePlansInput, ListResponsePlansOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResponsePlansCommandInput extends ListResponsePlansInput {
}
export interface ListResponsePlansCommandOutput extends ListResponsePlansOutput, __MetadataBearer {
}
/**
 * <p>Lists all response plans in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListResponsePlansCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListResponsePlansCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListResponsePlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResponsePlansCommandInput} for command's `input` shape.
 * @see {@link ListResponsePlansCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResponsePlansCommand extends $Command<ListResponsePlansCommandInput, ListResponsePlansCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: ListResponsePlansCommandInput;
    constructor(input: ListResponsePlansCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResponsePlansCommandInput, ListResponsePlansCommandOutput>;
    private serialize;
    private deserialize;
}
