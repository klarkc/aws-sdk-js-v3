import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListWorkersWithQualificationTypeRequest, ListWorkersWithQualificationTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorkersWithQualificationTypeCommandInput extends ListWorkersWithQualificationTypeRequest {
}
export interface ListWorkersWithQualificationTypeCommandOutput extends ListWorkersWithQualificationTypeResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers
 *             that have been associated with a given Qualification type.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkersWithQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkersWithQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListWorkersWithQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkersWithQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link ListWorkersWithQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorkersWithQualificationTypeCommand extends $Command<ListWorkersWithQualificationTypeCommandInput, ListWorkersWithQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListWorkersWithQualificationTypeCommandInput;
    constructor(input: ListWorkersWithQualificationTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkersWithQualificationTypeCommandInput, ListWorkersWithQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
