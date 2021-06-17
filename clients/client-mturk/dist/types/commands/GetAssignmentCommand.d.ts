import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetAssignmentRequest, GetAssignmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAssignmentCommandInput extends GetAssignmentRequest {
}
export interface GetAssignmentCommandOutput extends GetAssignmentResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>GetAssignment</code> operation retrieves the details of the specified Assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssignmentCommandInput} for command's `input` shape.
 * @see {@link GetAssignmentCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAssignmentCommand extends $Command<GetAssignmentCommandInput, GetAssignmentCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetAssignmentCommandInput;
    constructor(input: GetAssignmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssignmentCommandInput, GetAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
