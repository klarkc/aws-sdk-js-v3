import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetQualificationTypeRequest, GetQualificationTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetQualificationTypeCommandInput extends GetQualificationTypeRequest {
}
export interface GetQualificationTypeCommandOutput extends GetQualificationTypeResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link GetQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetQualificationTypeCommand extends $Command<GetQualificationTypeCommandInput, GetQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetQualificationTypeCommandInput;
    constructor(input: GetQualificationTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQualificationTypeCommandInput, GetQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
