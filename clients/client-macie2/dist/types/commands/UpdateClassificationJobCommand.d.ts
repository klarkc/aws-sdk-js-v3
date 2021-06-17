import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateClassificationJobRequest, UpdateClassificationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateClassificationJobCommandInput extends UpdateClassificationJobRequest {
}
export interface UpdateClassificationJobCommandOutput extends UpdateClassificationJobResponse, __MetadataBearer {
}
/**
 * <p>Changes the status of a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClassificationJobCommandInput} for command's `input` shape.
 * @see {@link UpdateClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateClassificationJobCommand extends $Command<UpdateClassificationJobCommandInput, UpdateClassificationJobCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: UpdateClassificationJobCommandInput;
    constructor(input: UpdateClassificationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClassificationJobCommandInput, UpdateClassificationJobCommandOutput>;
    private serialize;
    private deserialize;
}
