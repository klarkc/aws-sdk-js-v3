import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { AcceptQualificationRequestRequest, AcceptQualificationRequestResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptQualificationRequestCommandInput extends AcceptQualificationRequestRequest {
}
export interface AcceptQualificationRequestCommandOutput extends AcceptQualificationRequestResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification.
 *         </p>
 *         <p>
 *             Only the owner of the Qualification type can grant a Qualification request for that	type.
 *         </p>
 *         <p>
 *             A successful request for the <code>AcceptQualificationRequest</code> operation
 *             returns with no errors and an empty body.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AcceptQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AcceptQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new AcceptQualificationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptQualificationRequestCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptQualificationRequestCommand extends $Command<AcceptQualificationRequestCommandInput, AcceptQualificationRequestCommandOutput, MTurkClientResolvedConfig> {
    readonly input: AcceptQualificationRequestCommandInput;
    constructor(input: AcceptQualificationRequestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptQualificationRequestCommandInput, AcceptQualificationRequestCommandOutput>;
    private serialize;
    private deserialize;
}
