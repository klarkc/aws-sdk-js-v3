import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { ListEnvironmentsInput, ListEnvironmentsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEnvironmentsCommandInput extends ListEnvironmentsInput {
}
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsOutput, __MetadataBearer {
}
/**
 * <p>Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, ListEnvironmentsCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, ListEnvironmentsCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEnvironmentsCommand extends $Command<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput, MWAAClientResolvedConfig> {
    readonly input: ListEnvironmentsCommandInput;
    constructor(input: ListEnvironmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MWAAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput>;
    private serialize;
    private deserialize;
}
