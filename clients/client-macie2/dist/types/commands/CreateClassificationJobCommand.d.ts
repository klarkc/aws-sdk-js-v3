import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateClassificationJobRequest, CreateClassificationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateClassificationJobCommandInput extends CreateClassificationJobRequest {
}
export interface CreateClassificationJobCommandOutput extends CreateClassificationJobResponse, __MetadataBearer {
}
/**
 * <p>Creates and defines the settings for a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClassificationJobCommandInput} for command's `input` shape.
 * @see {@link CreateClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateClassificationJobCommand extends $Command<CreateClassificationJobCommandInput, CreateClassificationJobCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: CreateClassificationJobCommandInput;
    constructor(input: CreateClassificationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClassificationJobCommandInput, CreateClassificationJobCommandOutput>;
    private serialize;
    private deserialize;
}
