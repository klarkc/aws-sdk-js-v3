import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateMacieSessionRequest, UpdateMacieSessionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMacieSessionCommandInput extends UpdateMacieSessionRequest {
}
export interface UpdateMacieSessionCommandOutput extends UpdateMacieSessionResponse, __MetadataBearer {
}
/**
 * <p>Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateMacieSessionCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateMacieSessionCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateMacieSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMacieSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateMacieSessionCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMacieSessionCommand extends $Command<UpdateMacieSessionCommandInput, UpdateMacieSessionCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: UpdateMacieSessionCommandInput;
    constructor(input: UpdateMacieSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMacieSessionCommandInput, UpdateMacieSessionCommandOutput>;
    private serialize;
    private deserialize;
}
