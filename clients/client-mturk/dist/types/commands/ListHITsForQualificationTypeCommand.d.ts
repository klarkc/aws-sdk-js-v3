import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListHITsForQualificationTypeRequest, ListHITsForQualificationTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHITsForQualificationTypeCommandInput extends ListHITsForQualificationTypeRequest {
}
export interface ListHITsForQualificationTypeCommandOutput extends ListHITsForQualificationTypeResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>ListHITsForQualificationType</code> operation returns the HITs that use
 *             the given Qualification type for a Qualification requirement.
 *             The operation returns HITs of any status, except for HITs that have been deleted
 *             with the <code>DeleteHIT</code> operation or that have been auto-deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListHITsForQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListHITsForQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListHITsForQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHITsForQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link ListHITsForQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHITsForQualificationTypeCommand extends $Command<ListHITsForQualificationTypeCommandInput, ListHITsForQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListHITsForQualificationTypeCommandInput;
    constructor(input: ListHITsForQualificationTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHITsForQualificationTypeCommandInput, ListHITsForQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
