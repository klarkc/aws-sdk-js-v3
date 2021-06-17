import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateFindingsFilterRequest, CreateFindingsFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFindingsFilterCommandInput extends CreateFindingsFilterRequest {
}
export interface CreateFindingsFilterCommandOutput extends CreateFindingsFilterResponse, __MetadataBearer {
}
/**
 * <p>Creates and defines the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link CreateFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFindingsFilterCommand extends $Command<CreateFindingsFilterCommandInput, CreateFindingsFilterCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: CreateFindingsFilterCommandInput;
    constructor(input: CreateFindingsFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFindingsFilterCommandInput, CreateFindingsFilterCommandOutput>;
    private serialize;
    private deserialize;
}
