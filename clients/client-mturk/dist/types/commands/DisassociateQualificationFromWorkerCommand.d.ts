import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DisassociateQualificationFromWorkerRequest, DisassociateQualificationFromWorkerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateQualificationFromWorkerCommandInput extends DisassociateQualificationFromWorkerRequest {
}
export interface DisassociateQualificationFromWorkerCommandOutput extends DisassociateQualificationFromWorkerResponse, __MetadataBearer {
}
/**
 * <p>
 *             The 	<code>DisassociateQualificationFromWorker</code>
 *             revokes a previously granted Qualification from a user.
 *         </p>
 *         <p>
 *             You can provide a text message explaining why the Qualification was
 *             revoked. The user who had the Qualification can see this message.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DisassociateQualificationFromWorkerCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DisassociateQualificationFromWorkerCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DisassociateQualificationFromWorkerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateQualificationFromWorkerCommandInput} for command's `input` shape.
 * @see {@link DisassociateQualificationFromWorkerCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateQualificationFromWorkerCommand extends $Command<DisassociateQualificationFromWorkerCommandInput, DisassociateQualificationFromWorkerCommandOutput, MTurkClientResolvedConfig> {
    readonly input: DisassociateQualificationFromWorkerCommandInput;
    constructor(input: DisassociateQualificationFromWorkerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateQualificationFromWorkerCommandInput, DisassociateQualificationFromWorkerCommandOutput>;
    private serialize;
    private deserialize;
}
