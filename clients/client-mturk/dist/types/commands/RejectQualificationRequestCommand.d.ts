import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { RejectQualificationRequestRequest, RejectQualificationRequestResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectQualificationRequestCommandInput extends RejectQualificationRequestRequest {
}
export interface RejectQualificationRequestCommandOutput extends RejectQualificationRequestResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>RejectQualificationRequest</code>
 *             operation rejects a user's request for a Qualification.
 *         </p>
 *         <p> You can provide a text message explaining why the request was
 *             rejected. The Worker who made the request can see this message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, RejectQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, RejectQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new RejectQualificationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link RejectQualificationRequestCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectQualificationRequestCommand extends $Command<RejectQualificationRequestCommandInput, RejectQualificationRequestCommandOutput, MTurkClientResolvedConfig> {
    readonly input: RejectQualificationRequestCommandInput;
    constructor(input: RejectQualificationRequestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectQualificationRequestCommandInput, RejectQualificationRequestCommandOutput>;
    private serialize;
    private deserialize;
}
