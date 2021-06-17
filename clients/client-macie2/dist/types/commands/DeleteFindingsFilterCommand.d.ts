import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DeleteFindingsFilterRequest, DeleteFindingsFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFindingsFilterCommandInput extends DeleteFindingsFilterRequest {
}
export interface DeleteFindingsFilterCommandOutput extends DeleteFindingsFilterResponse, __MetadataBearer {
}
/**
 * <p>Deletes a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeleteFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DeleteFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFindingsFilterCommand extends $Command<DeleteFindingsFilterCommandInput, DeleteFindingsFilterCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: DeleteFindingsFilterCommandInput;
    constructor(input: DeleteFindingsFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFindingsFilterCommandInput, DeleteFindingsFilterCommandOutput>;
    private serialize;
    private deserialize;
}
