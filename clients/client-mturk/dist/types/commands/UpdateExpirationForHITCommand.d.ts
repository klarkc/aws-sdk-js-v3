import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateExpirationForHITRequest, UpdateExpirationForHITResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateExpirationForHITCommandInput extends UpdateExpirationForHITRequest {
}
export interface UpdateExpirationForHITCommandOutput extends UpdateExpirationForHITResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT.
 *             If you update it to a time in the past, the HIT will be immediately expired.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateExpirationForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateExpirationForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateExpirationForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExpirationForHITCommandInput} for command's `input` shape.
 * @see {@link UpdateExpirationForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateExpirationForHITCommand extends $Command<UpdateExpirationForHITCommandInput, UpdateExpirationForHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: UpdateExpirationForHITCommandInput;
    constructor(input: UpdateExpirationForHITCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateExpirationForHITCommandInput, UpdateExpirationForHITCommandOutput>;
    private serialize;
    private deserialize;
}
