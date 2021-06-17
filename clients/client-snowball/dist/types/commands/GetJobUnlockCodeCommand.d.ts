import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetJobUnlockCodeRequest, GetJobUnlockCodeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobUnlockCodeCommandInput extends GetJobUnlockCodeRequest {
}
export interface GetJobUnlockCodeCommandOutput extends GetJobUnlockCodeResult, __MetadataBearer {
}
/**
 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular
 *         <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job
 *       has been created.</p>
 *
 *          <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric
 *       characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed
 *       along with the manifest to the Snow device through the Snowball client when the client is started
 *       for the first time.</p>
 *
 *          <p>As a best practice, we recommend that you don't save a copy of the
 *         <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these
 *       separately helps prevent unauthorized parties from gaining access to the Snow device associated
 *       with that job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobUnlockCodeCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobUnlockCodeCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetJobUnlockCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobUnlockCodeCommandInput} for command's `input` shape.
 * @see {@link GetJobUnlockCodeCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobUnlockCodeCommand extends $Command<GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput, SnowballClientResolvedConfig> {
    readonly input: GetJobUnlockCodeCommandInput;
    constructor(input: GetJobUnlockCodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput>;
    private serialize;
    private deserialize;
}
