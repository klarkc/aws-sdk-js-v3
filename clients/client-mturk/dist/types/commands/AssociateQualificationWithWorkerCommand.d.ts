import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { AssociateQualificationWithWorkerRequest, AssociateQualificationWithWorkerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateQualificationWithWorkerCommandInput extends AssociateQualificationWithWorkerRequest {
}
export interface AssociateQualificationWithWorkerCommandOutput extends AssociateQualificationWithWorkerResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>AssociateQualificationWithWorker</code> operation gives a Worker a
 *             Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker
 *             submit a Qualification request. It gives the Qualification directly to the Worker.
 *         </p>
 *
 *         <p>
 *             You can only assign a Qualification of a Qualification type that you created (using
 *             the <code>CreateQualificationType</code> operation).
 *         </p>
 *
 *         <note>
 *             <p>
 *                 Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification
 *                 requests for the Qualification by the Worker. If you assign a Qualification to a
 *                 Worker, then later grant a Qualification request made by the Worker, the granting of
 *                 the request may modify the Qualification score. To resolve a pending Qualification
 *                 request without affecting the Qualification the Worker already has, reject the
 *                 request with the <code>RejectQualificationRequest</code> operation.
 *             </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AssociateQualificationWithWorkerCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AssociateQualificationWithWorkerCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new AssociateQualificationWithWorkerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateQualificationWithWorkerCommandInput} for command's `input` shape.
 * @see {@link AssociateQualificationWithWorkerCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateQualificationWithWorkerCommand extends $Command<AssociateQualificationWithWorkerCommandInput, AssociateQualificationWithWorkerCommandOutput, MTurkClientResolvedConfig> {
    readonly input: AssociateQualificationWithWorkerCommandInput;
    constructor(input: AssociateQualificationWithWorkerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateQualificationWithWorkerCommandInput, AssociateQualificationWithWorkerCommandOutput>;
    private serialize;
    private deserialize;
}
