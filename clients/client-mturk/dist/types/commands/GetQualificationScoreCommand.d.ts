import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetQualificationScoreRequest, GetQualificationScoreResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetQualificationScoreCommandInput extends GetQualificationScoreRequest {
}
export interface GetQualificationScoreCommandOutput extends GetQualificationScoreResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>GetQualificationScore</code>
 *             operation returns the value of a Worker's Qualification for a given
 *             Qualification type.
 *         </p>
 *         <p>
 *             To get a Worker's Qualification, you must know the Worker's ID. The
 *             Worker's ID is included in the assignment data returned by the
 *             <code>ListAssignmentsForHIT</code>
 *             operation.
 *         </p>
 *         <p>Only the owner of a Qualification type can query the value of
 *             a Worker's Qualification of that type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetQualificationScoreCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetQualificationScoreCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetQualificationScoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQualificationScoreCommandInput} for command's `input` shape.
 * @see {@link GetQualificationScoreCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetQualificationScoreCommand extends $Command<GetQualificationScoreCommandInput, GetQualificationScoreCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetQualificationScoreCommandInput;
    constructor(input: GetQualificationScoreCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQualificationScoreCommandInput, GetQualificationScoreCommandOutput>;
    private serialize;
    private deserialize;
}
