import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DeleteQualificationTypeRequest, DeleteQualificationTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteQualificationTypeCommandInput extends DeleteQualificationTypeRequest {
}
export interface DeleteQualificationTypeCommandOutput extends DeleteQualificationTypeResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>DeleteQualificationType</code>
 *             deletes a Qualification type and deletes any HIT types that are
 *             associated with the Qualification type.
 *         </p>
 *         <p>This operation does not revoke Qualifications already assigned
 *             to Workers because the Qualifications might be needed for active HITs.
 *             If there are any pending requests for the Qualification type, Amazon
 *             Mechanical Turk rejects those requests. After you delete a
 *             Qualification type, you can no longer use it to create HITs or HIT
 *             types.</p>
 *         <note>
 *             <p>DeleteQualificationType must wait for all the HITs that use
 *                 the deleted Qualification type to be deleted before completing. It
 *                 may take up to 48 hours before DeleteQualificationType completes and
 *                 the unique name of the Qualification type is available for reuse with
 *                 CreateQualificationType.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DeleteQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteQualificationTypeCommand extends $Command<DeleteQualificationTypeCommandInput, DeleteQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: DeleteQualificationTypeCommandInput;
    constructor(input: DeleteQualificationTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQualificationTypeCommandInput, DeleteQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
