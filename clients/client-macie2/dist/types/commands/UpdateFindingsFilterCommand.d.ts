import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateFindingsFilterRequest, UpdateFindingsFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFindingsFilterCommandInput extends UpdateFindingsFilterRequest {
}
export interface UpdateFindingsFilterCommandOutput extends UpdateFindingsFilterResponse, __MetadataBearer {
}
/**
 * <p>Updates the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFindingsFilterCommand extends $Command<UpdateFindingsFilterCommandInput, UpdateFindingsFilterCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: UpdateFindingsFilterCommandInput;
    constructor(input: UpdateFindingsFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFindingsFilterCommandInput, UpdateFindingsFilterCommandOutput>;
    private serialize;
    private deserialize;
}
